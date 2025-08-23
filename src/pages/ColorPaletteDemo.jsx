import React from 'react';
import { Link } from 'react-router-dom';

const ColorPaletteDemo = () => {
  return (
    <div className="min-h-screen bg-primary-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Color Palette Demo
          </h1>
          <p className="text-lg text-primary-dark/80">
            Showcase of the new Tailwind color palette
          </p>
        </div>

        {/* Color Swatches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-primary-white p-6 rounded-xl border border-primary-blue/20 shadow-md">
            <h2 className="text-xl font-bold text-primary-dark mb-4">Primary Colors</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary-blue rounded-lg"></div>
                <div className="ml-4">
                  <p className="font-medium text-primary-dark">Primary Blue</p>
                  <p className="text-primary-dark/70 text-xs">#2D11E9</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary-cyan rounded-lg"></div>
                <div className="ml-4">
                  <p className="font-medium text-primary-dark">Primary Cyan</p>
                  <p className="text-primary-dark/70 text-xs">#10EDF5</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary-red rounded-lg"></div>
                <div className="ml-4">
                  <p className="font-medium text-primary-dark">Primary Red</p>
                  <p className="text-primary-dark/70 text-xs">#FF4057</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-white p-6 rounded-xl border border-primary-blue/20 shadow-md">
            <h2 className="text-xl font-bold text-primary-dark mb-4">Neutral Colors</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary-dark rounded-lg"></div>
                <div className="ml-4">
                  <p className="font-medium text-primary-dark">Primary Dark</p>
                  <p className="text-primary-dark/70 text-xs">#150D0D</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary-light rounded-lg"></div>
                <div className="ml-4">
                  <p className="font-medium text-primary-dark">Primary Light</p>
                  <p className="text-primary-dark/70 text-xs">#DAD5D0</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary-white border border-primary-blue/20 rounded-lg"></div>
                <div className="ml-4">
                  <p className="font-medium text-primary-dark">Primary White</p>
                  <p className="text-primary-dark/70 text-xs">#F3F7F8</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-white p-6 rounded-xl border border-primary-blue/20 shadow-md">
            <h2 className="text-xl font-bold text-primary-dark mb-4">Additional Colors</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary-teal rounded-lg"></div>
                <div className="ml-4">
                  <p className="font-medium text-primary-dark">Primary Teal</p>
                  <p className="text-primary-dark/70 text-xs">#9AC6C6</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Examples */}
        <div className="bg-primary-white p-6 rounded-xl border border-primary-blue/20 shadow-md mb-12">
          <h2 className="text-xl font-bold text-primary-dark mb-4">Gradients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-primary-dark mb-2">Primary Gradient</h3>
              <div className="h-16 bg-gradient-to-r from-primary-blue to-primary-cyan rounded-lg flex items-center">
                <p className="text-primary-white font-medium pl-4">.bg-gradient-to-r .from-primary-blue .to-primary-cyan</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-primary-dark mb-2">Secondary Gradient</h3>
              <div className="h-16 bg-gradient-to-r from-primary-red to-primary-cyan rounded-lg flex items-center">
                <p className="text-primary-white font-medium pl-4">.bg-gradient-to-r .from-primary-red .to-primary-cyan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Button Examples */}
        <div className="bg-primary-white p-6 rounded-xl border border-primary-blue/20 shadow-md">
          <h2 className="text-xl font-bold text-primary-dark mb-4">Button Examples</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-cyan text-primary-white font-bold rounded-lg hover:from-primary-cyan hover:to-primary-blue transition-all duration-300 transform hover:scale-105">
              Primary Button
            </button>
            <button className="px-6 py-3 border-2 border-primary-blue text-primary-blue font-bold rounded-lg hover:bg-primary-blue hover:text-primary-white transition-all duration-300">
              Secondary Button
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-primary-red to-primary-cyan text-primary-white font-bold rounded-lg hover:from-primary-cyan hover:to-primary-red transition-all duration-300 transform hover:scale-105">
              Accent Button
            </button>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-blue hover:text-primary-cyan font-medium transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteDemo;
