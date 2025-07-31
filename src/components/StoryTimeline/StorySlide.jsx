import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const StorySlide = ({ data, index, activeIndex, setActiveIndex, totalItems }) => {
  const slideRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      },
      { threshold: 0.5 }
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => {
      if (slideRef.current) {
        observer.unobserve(slideRef.current);
      }
    };
  }, [index, setActiveIndex]);

  return (
    <div 
      ref={slideRef}
      className="story-slide flex-shrink-0 px-3 position-relative"
      style={{ width: '90vw', maxWidth: '800px', scrollSnapAlign: 'center' }}
    >
      <motion.div 
        className="card h-100 border-0 shadow overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: activeIndex === index ? 1 : 0.7, 
          y: 0 
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="row g-0 h-100">
          <div className="col-md-6 position-relative">
            {/* Year badge */}
            <div className="position-absolute top-0 start-0 bg-primary text-white px-3 py-2 z-2">
              <span className="fw-bold">{data.year}</span>
            </div>
            
            {/* Image */}
            <div 
              className="h-100 bg-secondary" 
              style={{ 
                backgroundImage: `url(${data.image})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px'
              }}
            />
          </div>
          
          <div className="col-md-6 d-flex align-items-center">
            <div className="p-4 p-lg-5">
              <h3 className="fw-bold mb-3">{data.title}</h3>
              <p className="text-muted">{data.description}</p>
              
              {/* Progress indicator */}
              <div className="d-flex mt-4">
                {[...Array(totalItems)].map((_, i) => (
                  <div 
                    key={i}
                    className={`me-2 rounded-pill ${i === index ? 'bg-primary' : 'bg-light'}`} 
                    style={{ width: i === index ? '30px' : '10px', height: '8px' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StorySlide;