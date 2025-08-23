/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated Color Palette
        'primary-dark': '#000000',      // Pure black
        'primary-blue': '#14213d',      // Dark navy blue
        'primary-orange': '#fca311',    // Bright orange (replaces cyan/teal)
        'primary-light': '#e5e5e5',     // Light gray
        'primary-white': '#ffffff',     // Pure white
        'primary-accent': '#fca311',    // Orange accent
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #14213d, #fca311)',  
        'gradient-secondary': 'linear-gradient(to right, #000000, #e5e5e5)',    
        'gradient-accent': 'linear-gradient(to right, #fca311, #14213d)',  
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-soft': 'pulseSoft 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}