import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, themeConfig } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun size={16} />;
      case 'dark':
        return <Moon size={16} />;
      case 'blue':
        return <Palette size={16} />;
      default:
        return <Sun size={16} />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'blue':
        return 'Blue';
      default:
        return 'Light';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-lg
        ${themeConfig.background} ${themeConfig.text}
        border ${themeConfig.border}
        hover:shadow-lg transition-all duration-300
        group flex items-center gap-2
        transform hover:scale-105
      `}
      aria-label={`Switch to ${getThemeLabel()} theme`}
    >
      <div className="relative">
        {getThemeIcon()}
        <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 rounded transition-opacity duration-300" />
      </div>
      <span className="text-xs font-medium hidden sm:block">
        {getThemeLabel()}
      </span>
    </button>
  );
};

export default ThemeToggle;
