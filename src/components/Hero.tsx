
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-black text-white flex items-center pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=face"
          alt="Profile Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 hover:scale-110 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <ArrowRight className="text-gray-400 animate-pulse" size={32} />
              <div className="text-5xl lg:text-7xl font-bold">
                HI I AM
              </div>
            </div>
            
            <div className="text-5xl lg:text-7xl font-bold animate-fade-in" style={{ animationDelay: '0.2s' }}>
              MELLOW
            </div>
            
            <div className="text-5xl lg:text-7xl font-bold animate-fade-in" style={{ animationDelay: '0.4s' }}>
              WHITE <span className="text-4xl animate-pulse">👋</span>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl text-gray-300 leading-relaxed">
              A product designer, specialize in creating magical visual identities for digital products.
            </p>
            
            <div className="space-y-4">
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 mr-4">
                VIEW PORTFOLIO
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300">
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-4 h-4 bg-white rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-1/3 left-10 w-6 h-6 border-2 border-white rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-gray-400 rounded-full animate-pulse opacity-50"></div>
    </section>
  );
};

export default Hero;
