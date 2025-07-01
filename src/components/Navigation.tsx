import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavItem {
    name: string;
    href: string;
  }

  const navItems: NavItem[] = [
    { name: 'SERVICES', href: '#services' },
    { name: 'MY WORKS', href: '#works' },
    { name: 'ABOUT ME', href: '#about' },
    { name: 'CODING', href: '#coding' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50 py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="relative">
              <div className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${
                scrolled ? 'text-white' : 'text-white'
              }`}>
                <span className="relative">
                  Vinay Reddy
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
                <span className="ml-2 text-gray-300">Dodlapati</span>
              </div>
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 animate-pulse"></div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="relative group text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
              <button
                onClick={() => handleNavClick('#contact')}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <Phone size={16} />
                  BOOK A CALL
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45' : 'rotate-0 -translate-y-2'
                }`}></span>
                <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'rotate-0 translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-br from-gray-900 via-black to-gray-900 border-l border-gray-800/50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
              <div className="text-lg font-bold text-white">Menu</div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 px-6 py-8">
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="block group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center py-3 px-4 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-blue-500/10 hover:to-purple-500/10 border border-transparent hover:border-gray-700/50 transition-all duration-300">
                      <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </span>
                      <div className="ml-auto w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 border-t border-gray-800/50">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-3">
                  <Phone size={18} />
                  BOOK A CALL
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;