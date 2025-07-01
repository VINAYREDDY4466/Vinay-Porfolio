
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-black text-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <ArrowRight className="text-gray-400" size={32} />
              <div className="text-6xl lg:text-8xl font-bold">
                HI I AM
              </div>
            </div>
            
            <div className="text-6xl lg:text-8xl font-bold">
              MELLOW
            </div>
            
            <div className="text-6xl lg:text-8xl font-bold">
              WHITE <span className="text-4xl">👋</span>
            </div>
          </div>
          
          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              A product designer, specialize in creating magical visual identities for digital products.
            </p>
            
            <div className="space-y-4">
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300 mr-4">
                VIEW PORTFOLIO
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
