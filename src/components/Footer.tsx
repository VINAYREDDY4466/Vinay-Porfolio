
import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
             <a href="/"> <span className="text-white"></span> Vinay Reddy Dodlapati</a>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              I'm an full-stack web developer with a passion for crafting seamless user experiences.
              Let's collaborate and bring your vision to life !
            </p>
            <div className="flex space-x-4">
              <a href="/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/vinayreddyd/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="/https://github.com/VINAYREDDY4466" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Me</a></li>
              <li><a href="#works" className="text-gray-400 hover:text-white transition-colors duration-300">Works</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Websites</span></li>
              <li><span className="text-gray-400">UI/UX Design</span></li>
              <li><span className="text-gray-400">App Devlopment</span></li>
              <li><span className="text-gray-400">Website Maintainence</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm">
            © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
