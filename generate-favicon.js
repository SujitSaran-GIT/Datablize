// This script can be used to generate favicon.ico from SVG
// Run: npm install -D sharp && node generate-favicon.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgContent = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#58A0C8" />
      <stop offset="100%" stop-color="#34699A" />
    </linearGradient>
  </defs>
  <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="url(#hexGradient)" />
  <polygon points="100,60 130,80 130,120 100,140 70,120 70,80" fill="#FFFFFF" />
</svg>`;

async function generateFavicons() {
  try {
    // Generate PNG versions
    await sharp(Buffer.from(svgContent))
      .resize(32, 32)
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon-32x32.png'));

    await sharp(Buffer.from(svgContent))
      .resize(16, 16)
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon-16x16.png'));

    console.log('Favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

// Uncomment to run
// generateFavicons();