/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Color Palette
        'light-yellow': '#FFFA8D',
        'light-cyan': '#A8F1FF',
        'light-blue': '#6FE6FC',
        'light-teal': '#4ED7F1',
        'dark-purple': '#03001C',
        'dark-blue': '#2C74B3',
        'dark-navy': '#144272',
        'dark-deep': '#0A2647',
        'blue-deep': '#000B58',
        'blue-navy': '#003161',
        'blue-teal': '#006A67',
        'blue-cream': '#FFF4B7',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #000B58, #003161)',
        'gradient-soft': 'linear-gradient(to right, #FFFA8D, #A8F1FF)',
        'gradient-accent': 'linear-gradient(to right, #FFF4B7, #6FE6FC)',
      },
    },
  },
  plugins: [],
}