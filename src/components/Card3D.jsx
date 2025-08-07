import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Card3D = ({ children, className = "", index = 0 }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePos({ x: x * 20, y: y * -20 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      style={{
        transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Subtle shadow that reacts to mouse position */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(at ${mousePos.x * 50 + 50}% ${mousePos.y * 50 + 50}%, rgba(0,0,0,0.2) 0%, transparent 70%)`,
          transform: 'translateZ(-20px)'
        }}
      />
      
      {/* Main card content */}
      <div className="relative transform-gpu" style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
      
      {/* Edge lighting effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          transform: 'translateZ(40px)',
          boxShadow: `0 0 20px rgba(253, 245, 170, 0.3)`
        }}
      />
    </div>
  );
};

export default Card3D;