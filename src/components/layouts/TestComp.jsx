"use client";
import React from 'react'

const VideoBackground = () => {
  return (
    <>
      <style jsx>{`
        .video-background-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        
        .background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
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
        
        .btn-primary-custom {
          background-color: #007bff;
          border-color: #007bff;
          padding: 12px 32px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-primary-custom:hover {
          background-color: #0056b3;
          border-color: #0056b3;
          transform: translateY(-2px);
        }
        
        .btn-outline-custom {
          color: white;
          border: 2px solid white;
          padding: 12px 32px;
          font-weight: 600;
          background: transparent;
          transition: all 0.3s ease;
        }
        
        .btn-outline-custom:hover {
          background-color: white;
          color: #000;
          transform: translateY(-2px);
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40%, 43% {
            transform: translateX(-50%) translateY(-15px);
          }
          70% {
            transform: translateX(-50%) translateY(-7px);
          }
          90% {
            transform: translateX(-50%) translateY(-3px);
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-description {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-description {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="video-background-container">
        {/* Background Video */}
        <video 
          className="background-video"
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
        >
          <source src="/video/herobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="video-overlay"></div>
        
        {/* Content Layer */}
        <div className="content-layer d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="text-center text-white">
                  {/* Main Heading */}
                  <h1 className="hero-title">
                    Állatorvosi Szolgáltatások
                  </h1>
                  
                  {/* Description */}
                  <p className="hero-description">
                    Professzionális és szeretetteljes ellátást biztosítunk kedvenc állatai számára. 
                    Modern technológiával és tapasztalt szakemberekkel állunk rendelkezésére 
                    állata egészségének megőrzéséért.
                  </p>
                  
                  {/* Call to Action Buttons */}
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <button className="btn btn-primary btn-primary-custom">
                      Időpont foglalás
                    </button>
                    <button className="btn btn-outline-custom">
                      Szolgáltatások
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </>
  )
}

export default VideoBackground