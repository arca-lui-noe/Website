"use client";
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const OptimizedVideoBackground = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <style jsx>{`
        .video-background-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background-image: url('/images/video-poster.jpg');
          background-size: cover;
          background-position: center;
        }
        
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2;
        }
        
        .content-layer {
          position: relative;
          z-index: 3;
          height: 100vh;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          color:#fff;
        }
        
        .hero-description {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .btn-play-video {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid white;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 20px auto;
        }
        
        .btn-play-video:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }
        
        .react-player-wrapper {
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-description {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="video-background-container">
        {/* Lazy loaded video - csak akkor töltődik be, amikor play-re kattintanak */}
        {showVideo && (
          <ReactPlayer
            className="react-player-wrapper"
            url="/video/herobg.mp4"
            playing={isPlaying}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  preload: 'none', // Nem tölt be automatikusan
                  poster: '/images/video-poster.jpg' // Placeholder kép
                }
              }
            }}
            onReady={() => setIsPlaying(true)}
          />
        )}
        
        {/* Dark Overlay */}
        <div className="video-overlay"></div>
        
        {/* Content Layer */}
        <div className="content-layer d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="text-center text-white">
                  <h1 className="hero-title">
                    Állatorvosi Szolgáltatások
                  </h1>
                  
                  <p className="hero-description">
                    Professzionális és szeretetteljes ellátást biztosítunk kedvenc állatai számára. 
                    Modern technológiával és tapasztalt szakemberekkel állunk rendelkezésére.
                  </p>
                  
                  {/* Play button - video indítás */}
                  {!showVideo && (
                    <div 
                      className="btn-play-video"
                      onClick={() => setShowVideo(true)}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  )}
                  
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mt-4">
                    <button className="btn btn-primary">
                      Időpont foglalás
                    </button>
                    <button className="btn btn-outline-light">
                      Szolgáltatások
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OptimizedVideoBackground