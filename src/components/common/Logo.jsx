// components/common/Logo.jsx
import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <svg 
      className={`w-10 h-10 ${className}`} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon background gradient */}
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#58A0C8" />
          <stop offset="100%" stopColor="#34699A" />
        </linearGradient>
      </defs>
      
      {/* Hexagon shape */}
      <polygon 
        points="100,20 170,60 170,140 100,180 30,140 30,60" 
        fill="url(#hexGradient)" 
      />
      
      {/* Inner hexagon (white) */}
      <polygon 
        points="100,60 130,80 130,120 100,140 70,120 70,80" 
        fill="#FFFFFF" 
      />
    </svg>
  );
};

export default Logo;