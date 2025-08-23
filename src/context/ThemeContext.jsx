import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Single theme configuration with new color palette
  const themeConfig = {
    background: '#F3F7F8',               // primary-white
    text: '#150D0D',                     // primary-dark
    primary: '#2D11E9',                  // primary-blue
    secondary: '#9AC6C6',                // primary-teal
    accent: '#10EDF5',                   // primary-cyan
    surface: '#DAD5D0',                  // primary-light
    border: 'rgba(45, 17, 233, 0.2)',    // primary-blue with 20% opacity

    gradient: 'linear-gradient(to right, #2D11E9, #10EDF5)', // primary-blue to primary-cyan

    button: {
      primary: {
        background: 'linear-gradient(to right, #2D11E9, #10EDF5)', // gradient-primary
        text: '#F3F7F8',                                            // primary-white
        border: '#2D11E9',                                          // primary-blue
        hoverBackground: 'linear-gradient(to right, #10EDF5, #2D11E9)', // gradient-primary hover
        hoverText: '#F3F7F8',                                       // primary-white hover
      },
      secondary: {
        border: '#2D11E9',
        text: '#2D11E9',
        hoverBackground: '#2D11E9',
        hoverText: '#F3F7F8',
      },
      accent: {
        background: 'linear-gradient(to right, #FF4057, #10EDF5)', // primary-red to primary-cyan
        text: '#F3F7F8',
      }
    }
  };

  const value = {
    theme: 'single',
    themeConfig,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
