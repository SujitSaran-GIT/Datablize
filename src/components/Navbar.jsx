import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './common/Logo';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? `bg-primary-white bg-opacity-95 backdrop-blur-md shadow-lg border-b border-primary-blue border-opacity-20`
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Link to={"/"} className="relative flex items-center gap-2">
              <motion.div 
                className="relative"
                transition={{ duration: 0.8 }}
              >
                <Logo size={40} showText={true} />
              </motion.div>
              {/* <span className="font-bold text-xl text-primary-blue hover:text-primary-orange transition-colors duration-300">
                Datablize
              </span> */}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.path} 
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 text-primary-blue hover:text-primary-orange hover:bg-primary-light hover:bg-opacity-50`}
                >
                  <span className="relative z-10 text-sm">{item.name}</span>
                  <motion.div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-orange"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </Link>
              </motion.div>
            ))}

            <motion.div 
              className="ml-4 flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={"/contact"}
                className={`relative px-5 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-1 text-sm transform bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">Request Demo</span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <motion.button
              className={`p-2 rounded-lg transition-all duration-300 text-primary-blue hover:text-primary-orange hover:bg-primary-light`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div 
                className={`pt-4 pb-2 space-y-1 rounded-lg mt-2 shadow-lg bg-primary-white border border-primary-light`}
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 text-primary-blue hover:bg-primary-light hover:text-primary-orange`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="pt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`w-full block px-4 py-3 rounded-lg font-semibold shadow-md text-center text-sm transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white hover:shadow-lg transform hover:scale-105`}
                  >
                    Request Demo
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;