import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ScrollIndicator = () => {
  return (
    <motion.div
      className="d-flex flex-column align-items-center text-primary"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <div className="mb-1">Scroll to continue our story</div>
      <FiArrowRight 
        className="fs-4" 
        style={{ transform: 'rotate(90deg)' }} 
      />
    </motion.div>
  );
};

export default ScrollIndicator;