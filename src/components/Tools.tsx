import React from 'react';

const Tools = () => {
  const tools = [
   { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🌲' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Vercel', icon: '▲' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Nginx', icon: '🌀' },
    { name: 'Java', icon: '☕' },
    { name: 'TailwindCSS', icon: '🌬️' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'AWS', icon: '☁️' },
    { name: 'MySQL', icon: '🐬' },
  ];

  return (
    <section id="tools" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-4xl mb-4">Tools</p>
          <h2 className="text-xl font-bold mb-8">
            TECHNOLOGIES I USE TO BUILD SCALABLE WEB APPS
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-base font-semibold">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
