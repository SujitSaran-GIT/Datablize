import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const FloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { themeConfig } = useTheme();

  const handleClick = () => {
    // Scroll to top functionality
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        ${themeConfig.button.primary}
        hover:${themeConfig.button.accent}
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        transform hover:scale-110
        flex items-center justify-center
        group
      `}
      aria-label="Scroll to top"
    >
      <svg
        className={`w-6 h-6 ${themeConfig.text} transition-transform duration-300 ${
          isHovered ? 'transform -translate-y-1' : ''
        }`}
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
    </button>
  );
};

export default FloatingButton;
