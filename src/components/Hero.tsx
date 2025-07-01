import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, ExternalLink, Code, Sparkles, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleResumeClick = () => {
    // Replace with your actual resume path
    const link = document.createElement('a');
    link.href = '/vinay-resume.pdf';
    link.download = 'Vinay_Reddy_Resume.pdf';
    link.click();
  };

  const handlePortfolioClick = () => {
    window.open('#works', '_self');
  };

  return (
    <section id="hero" className="min-h-screen bg-black text-white flex items-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/90 to-black z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20 z-10"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Interactive Mouse Effect */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                      rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Main Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Profile Introduction */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="relative group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-1 hover:scale-110 transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Code className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Sparkles size={12} className="text-white" />
                </div>
              </div>
              
              <ArrowRight className="text-blue-400 animate-pulse hidden sm:block" size={32} />
              
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                HI, I'M
              </div>
            </div>

            {/* Name with Gradient */}
            <div className={`transform transition-all duration-1000 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Vinay Reddy
                </span>
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">
                Dodlapati
              </div>
            </div>

            {/* Tagline */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">Full-Stack Developer</span> crafting 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold"> seamless digital experiences</span> with passion and precision.
              </p>
            </div>

            {/* Social Links */}
            <div className={`flex items-center space-x-6 transform transition-all duration-1000 delay-400 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <a href="https://github.com/VINAYREDDY4466" className="group p-3 bg-white/5 rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300">
                <Github size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/vinayreddyd/" className="group p-3 bg-white/5 rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300">
                <Linkedin size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="mailto:vinay@example.com" className="group p-3 bg-white/5 rounded-full border border-gray-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                <Mail size={20} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column - Details & CTA */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-600 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Skills Preview */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Code size={20} className="text-blue-400" />
                Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'Javascript','Java','DSA', 'Nextjs','Docker','github','Expressjs','git', 'MongoDB'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-gray-300 hover:text-white transition-colors duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate about creating innovative web solutions that bridge the gap between 
                <span className="text-blue-400 font-semibold"> beautiful design</span> and 
                <span className="text-purple-400 font-semibold"> robust functionality</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePortfolioClick}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  VIEW PORTFOLIO
                </span>
              </button>

              <button
                onClick={handleResumeClick}
                className="group bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black hover:border-white hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download size={18} />
                  DOWNLOAD RESUME
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 right-8 lg:right-16">
        <div className="relative">
          <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-75"></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/3 left-8 lg:left-16">
        <div className="relative">
          <div className="w-6 h-6 border-2 border-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-1/4">
        <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-bounce"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;