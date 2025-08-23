import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { themeConfig } = useTheme();

  return (
    <motion.button
      className={`
        relative p-2 rounded-lg
        border transition-all duration-300
        hover:shadow-lg group flex items-center gap-2
        transform
      `}
      style={{
        background: 'linear-gradient(to right, #2D11E9, #10EDF5)',
        borderColor: '#2D11E9',
        color: '#F3F7F8'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Theme toggle"
    >
      <div className="relative">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 17.6859L19.1001 19.1001M6.31412 17.6859L4.8999 19.1001M17.6859 6.31412L19.1001 4.8999M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div 
          className="absolute inset-0 rounded transition-opacity duration-300 opacity-0 group-hover:opacity-20" 
          style={{ backgroundColor: '#F3F7F8' }}
        />
      </div>
      <span className="text-xs font-medium hidden sm:block">
        Theme
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
