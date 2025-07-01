import React, { useState } from 'react';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Dynamic', 'Static'];

  const projects = [
    {
      title: 'Allday (Website)',
      category: 'Dynamic',
      image: '../../public/allday.png',
      tags: ['BRANDING'],
      link: 'https://alldays-z-rv8n.vercel.app/'
    },
    {
      title: 'Evemen (E-commerce)',
      category: 'Dynamic',
      image: '../../public/evemen (1).png',
      tags: ['MARKETING'],
      link: 'https://evemen.co/'
    },
    {
      title: 'Trenzza (E-commerce)',
      category: 'Dynamic',
      image: '../../public/trenzza.png',
      tags: ['CREATIVE'],
      link: 'https://trenzza.in'
    },
    {
      title: 'Personal Portfolio',
      category: 'Static',
      image: '../../public/portfolilo.png',
      tags: ['CREATIVE'],
      link: 'https://vinayportfoilo.netlify.app/'
    },
    {
      title: 'Pickles Website',
      category: 'Static',
      image: '../../public/pickle.png',
      tags: ['CREATIVE'],
      link: 'https://ammammapachadlu2.vercel.app/'
    },
    {
      title: 'Locol Volunteer Network',
      category: 'Static',
      image: '../../public/lvn.png',
      tags: ['CREATIVE'],
      link: 'https://lvn-frontend.vercel.app/'
    }
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="works" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-4 text-4xl">Works</p>
          <h2 className="text-3xl font-bold mb-12">FEATURED PROJECTS</h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full border transition-colors duration-300 ${
                  activeFilter === filter
                    ? 'bg-white text-black border-white'
                    : 'border-gray-600 text-gray-300 hover:border-white hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
              <div className="absolute top-4 left-4">
                <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
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

export default Works;
