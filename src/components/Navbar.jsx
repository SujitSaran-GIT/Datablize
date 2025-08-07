// components/common/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './common/Logo';

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
        ? 'bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20'
        : 'bg-transparent'
        }`}
      style={{
        background: scrolled
          ? 'linear-gradient(135deg, rgba(253,245,170,0.1) 0%, rgba(88,160,200,0.1) 50%, rgba(52,105,154,0.1) 100%)'
          : 'transparent'
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-1  rounded-lg blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
              <Link to={"/"} className="relative flex items-center gap-3">
                <Logo className="transform group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-2xl bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent transform group-hover:scale-105 transition-all duration-300">
                  Datablize
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.path} className="relative group">
                <Link to={item.path} className="relative px-6 py-3 font-medium text-[#113F67] hover:text-white transition-all duration-300 rounded-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#58A0C8] to-[#34699A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FDF5AA] group-hover:w-full transition-all duration-300"></div>
                </Link>
              </div>
            ))}

            <div className="ml-6 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
              <Link to={"/request-demo"} className="relative px-8 py-3 bg-gradient-to-r from-[#34699A] to-[#113F67] text-white rounded-full font-semibold shadow-2xl hover:shadow-[#58A0C8]/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <span>Request Demo</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-[#113F67] hover:bg-[#FDF5AA]/20 rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
          <div className="pt-6 pb-4 space-y-2 bg-gradient-to-b from-white/90 to-[#113F67]/10 backdrop-blur-lg rounded-xl mt-4 border border-white/20 shadow-xl">
            {navItems.map((item, index) => (
              <div
                key={item.path}
                className="transform transition-all duration-300"
                style={{
                  transform: isOpen ? 'translateX(0)' : 'translateX(-100px)',
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-6 py-4 text-[#113F67] hover:bg-gradient-to-r hover:from-[#FDF5AA]/20 hover:to-[#58A0C8]/20 rounded-xl font-medium transition-all duration-300"
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div
              className="pt-4 transform transition-all duration-300"
              style={{
                transform: isOpen ? 'translateX(0)' : 'translateX(-100px)',
                transitionDelay: `${navItems.length * 50}ms`
              }}
            >
              <Link
                to="/request-demo"
                onClick={() => setIsOpen(false)}
                className="w-full block px-6 py-4 bg-gradient-to-r from-[#34699A] to-[#113F67] text-white rounded-xl font-semibold shadow-lg text-center hover:shadow-[#58A0C8]/50 transform hover:scale-[1.02] transition-all duration-300"
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