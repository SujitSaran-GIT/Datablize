import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './common/Logo';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { themeConfig } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', path: '/products' },
    { name: 'Features', path: '/features' },
    { name: 'Services', path: '/services' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? `${themeConfig.surface}/95 backdrop-blur-md shadow-lg border-b ${themeConfig.border}`
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative group">
              <Link to={"/"} className="relative flex items-center gap-2">
                <Logo className="h-6 w-6" />
                <span className="font-bold text-xl bg-gradient-to-r from-blue-deep via-blue-navy to-blue-teal bg-clip-text text-transparent transform group-hover:scale-105 transition-all duration-300">
                  Datablize
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 font-medium ${themeConfig.primary} hover:${themeConfig.secondary} transition-all duration-300 rounded-lg`}
                >
                  <span className="relative z-10 text-sm">{item.name}</span>
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-navy to-blue-teal group-hover:w-full transition-all duration-300`}></div>
                </Link>
              </div>
            ))}

            <div className="ml-4 flex items-center gap-2">
              <ThemeToggle />
              <Link
                to={"/contact"}
                className={`relative px-5 py-2 ${themeConfig.button.primary} rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-1 text-sm transform hover:scale-105`}
              >
                <span>Request Demo</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className={`p-2 ${themeConfig.primary} hover:${themeConfig.accent}/30 rounded-lg transition-all duration-300`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
          <div className={`pt-4 pb-2 space-y-1 ${themeConfig.gradient} backdrop-blur-md rounded-lg mt-2 border ${themeConfig.border} shadow-lg`}>
            {navItems.map((item, index) => (
              <div
                key={item.path}
                className="transition-all duration-300"
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-3 ${themeConfig.primary} hover:${themeConfig.accent}/20 rounded-lg font-medium text-sm transition-all duration-300`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`w-full block px-4 py-3 ${themeConfig.button.primary} ${themeConfig.text} rounded-lg font-semibold shadow-md text-center text-sm transition-all duration-300`}
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;