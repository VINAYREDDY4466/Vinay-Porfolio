
import React from 'react';

const Tools = () => {
  const tools = [
    { name: 'FIGMA', icon: '🎨' },
    { name: 'ILLUSTRATOR', icon: '🎨' },
    { name: 'FRAMER', icon: '⚡' },
    { name: 'HTML5', icon: '💻' },
    { name: 'SKETCH', icon: '💎' },
    { name: 'NOTION', icon: '📝' },
    { name: 'WEBFLOW', icon: '🌊' },
    { name: 'SLACK', icon: '💬' }
  ];

  return (
    <section id="tools" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-4">Tools</p>
          <h2 className="text-5xl font-bold mb-8">
            THE KEY DESIGN AND DEVELOPMENT TOOLS I USE
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:bg-gray-800 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
