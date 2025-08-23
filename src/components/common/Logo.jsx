// const Logo = ({ className = '' }) => {
//   return (
//     <svg
//       className={`w-10 h-10 ${className}`}
//       viewBox="0 0 200 200"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {/* Hexagon background gradient */}
//       <defs>
//         <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#58A0C8" />
//           <stop offset="100%" stopColor="#113F67" />
//         </linearGradient>
//       </defs>

//       {/* Hexagon shape */}
//       <polygon
//         points="100,20 170,60 170,140 100,180 30,140 30,60"
//         fill="url(#hexGradient)"
//       />

//       {/* Inner hexagon (white) */}
//       <polygon
//         points="100,60 130,80 130,120 100,140 70,120 70,80"
//         fill="#FFFFFF"
//       />
//     </svg>
//   );
// };

// export default Logo;

const Logo = ({ size = 40, showText = true, className='' }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <svg width={size} height={size} viewBox="0 0 200 200" 
      className={` ${className}`}
      xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#58A0C8" />
            <stop offset="100%" stopColor="#113F67" />
          </linearGradient>

          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#113F67" />
            <stop offset="100%" stopColor="#58A0C8" />
          </linearGradient>
        </defs>

        {/* Hexagon shape */}
        <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="#FCA311" />

        {/* Inner hexagon (white) */}
        <polygon points="100,60 130,80 130,120 100,140 70,120 70,80" fill="#FFFFFF" />

        {/* Data visualization elements */}
        <line x1="85" y1="85" x2="85" y2="105" stroke="#113F67" strokeWidth="4" />
        <line x1="95" y1="80" x2="95" y2="110" stroke="#113F67" strokeWidth="4" />
        <line x1="105" y1="90" x2="105" y2="115" stroke="#113F67" strokeWidth="4" />
        <line x1="115" y1="85" x2="115" y2="105" stroke="#113F67" strokeWidth="4" />

        {/* Connecting lines */}
        <line x1="85" y1="105" x2="95" y2="110" stroke="#58A0C8" strokeWidth="2" />
        <line x1="95" y1="110" x2="105" y2="115" stroke="#58A0C8" strokeWidth="2" />
        <line x1="105" y1="115" x2="115" y2="105" stroke="#58A0C8" strokeWidth="2" />
      </svg>

      {showText && (
        <div style={{ marginLeft: '5px' }}>
          <div style={{ fontWeight: 700, fontSize: '1rem', color: '#113F67', letterSpacing: '0.5px' }}>DATABLIZE</div>
          <div style={{ fontWeight: 500, fontSize: '0.5rem', color: '#FCA311', letterSpacing: '0.3px' }}>ANALYTICS</div>
        </div>
      )}
    </div>
  );
};

export default Logo;