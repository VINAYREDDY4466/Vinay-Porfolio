
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'SERVICES', href: '#services' },
    { name: 'WORKS', href: '#works' },
    { name: 'ABOUT ME', href: '#about' },
    { name: 'ARTICLES', href: '#articles' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-white">M</span> MELLOW
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
              BOOK A CALL
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="mt-4 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
              BOOK A CALL
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
