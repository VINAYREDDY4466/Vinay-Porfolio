
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-400 mb-4">About Me</p>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              A PRODUCT DESIGNER WITH A KNACK FOR TURNING PROBLEMS AND CHALLENGES INTO USER-DRIVEN STRATEGIC SOLUTIONS.
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-gray-900 rounded-lg p-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm">GET IN TOUCH</p>
                <p className="text-white">hello@example.com</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              I specialize in creating unique visual identities for digital products. I believe that a 
              stunning design starts with common values, open communication, technical knowledge and 
              respect for your audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
