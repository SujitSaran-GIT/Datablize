import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light', 'dark', 'blue'

  useEffect(() => {
    // Load theme from localStorage if available
    const savedTheme = localStorage.getItem('datablize-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('datablize-theme', theme);

    // Apply theme classes to document
    document.documentElement.className = `theme-${theme}`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      switch (prevTheme) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'blue';
        case 'blue':
          return 'light';
        default:
          return 'light';
      }
    });
  };

  const setSpecificTheme = (newTheme) => {
    if (['light', 'dark', 'blue'].includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  const themeConfig = {
    light: {
      background: 'bg-light-yellow',
      text: 'text-dark-purple',
      primary: 'text-blue-deep',
      secondary: 'text-blue-navy',
      accent: 'text-light-teal',
      surface: 'bg-light-yellow',
      border: 'border-light-cyan/30',
      gradient: 'bg-gradient-to-br from-light-yellow via-light-cyan to-light-blue',
      button: {
        primary: 'bg-gradient-to-r from-blue-deep to-blue-navy text-blue-cream',
        secondary: 'border-2 border-blue-deep text-blue-deep hover:bg-blue-deep hover:text-blue-cream',
        accent: 'bg-gradient-to-r from-light-teal to-blue-navy text-blue-cream'
      }
    },
    dark: {
      background: 'bg-dark-purple',
      text: 'text-blue-cream',
      primary: 'text-light-blue',
      secondary: 'text-light-cyan',
      accent: 'text-light-yellow',
      surface: 'bg-dark-purple',
      border: 'border-light-blue/20',
      gradient: 'bg-gradient-to-br from-dark-purple via-dark-navy to-dark-deep',
      button: {
        primary: 'bg-gradient-to-r from-light-blue to-light-teal text-dark-purple',
        secondary: 'border-2 border-light-blue text-light-blue hover:bg-light-blue hover:text-dark-purple',
        accent: 'bg-gradient-to-r from-light-yellow to-light-blue text-dark-purple'
      }
    },
    blue: {
      background: 'bg-blue-cream',
      text: 'text-blue-deep',
      primary: 'text-blue-navy',
      secondary: 'text-blue-teal',
      accent: 'text-light-yellow',
      surface: 'bg-blue-cream',
      border: 'border-blue-navy/30',
      gradient: 'bg-gradient-to-br from-blue-cream via-light-cyan to-light-blue',
      button: {
        primary: 'bg-gradient-to-r from-blue-navy to-blue-teal text-blue-cream',
        secondary: 'border-2 border-blue-navy text-blue-navy hover:bg-blue-navy hover:text-blue-cream',
        accent: 'bg-gradient-to-r from-light-yellow to-light-blue text-blue-deep'
      }
    }
  };

  const value = {
    theme,
    setTheme: setSpecificTheme,
    toggleTheme,
    themeConfig: themeConfig[theme],
    allThemes: themeConfig
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
