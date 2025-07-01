import React, { useState } from 'react';

const Work2 = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Dynamic', 'Static'];

  const worksData = [
    {
      title: 'Github',
      image: '../../public/github.png',
      link: 'https://res.cloudinary.com/ddjcvxwtn/image/upload/v1751396583/github_zlyvxr.png'
    },
    {
      title: 'Leetcode',
      image: '../../public/leetcode.png', 
      link: 'https://res.cloudinary.com/ddjcvxwtn/image/upload/v1751396583/leetcode_fdn6hg.png'
    },
  
  ];
  return (
    <section id="coding" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-4 text-4xl ">My Coding Profiles</p>  
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {worksData.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-900 hover:transform hover:scale-105 transition-all duration-300"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-w-16 aspect-h-10 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </a>
             
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work2;
