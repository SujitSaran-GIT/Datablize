import React from 'react';
import { motion } from 'framer-motion';

const FloatingButton = () => {
  const handleClick = () => {
    // Scroll to top functionality
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-gradient-to-r from-primary-orange to-primary-blue
        shadow-lg
        flex items-center justify-center
        text-primary-white
      `}
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 10px 25px rgba(45, 17, 233, 0.3)'
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  );
};

export default FloatingButton;
