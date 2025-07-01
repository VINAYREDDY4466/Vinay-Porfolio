
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Logoipsum',
      period: 'Aug 2023 – Present',
      position: 'Associate Creative Director',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.',
      logo: '🔥'
    },
    {
      company: 'ACME Digital.',
      period: 'May 2021 – Jun 2023',
      position: 'Senior Product Designer',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.',
      logo: '⚡'
    }
  ];

  const education = [
    {
      school: 'Logoipsum',
      period: 'Nov 2017 – Dec 2019',
      degree: 'Cranfield University, UK',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      logo: '✨'
    },
    {
      school: 'DSGN School, UK',
      period: 'Aug 2013 – Oct 2016',
      degree: 'Msc in Innovation Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.',
      logo: '⚡'
    }
  ];

  return (
    <section id="experience" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h2 className="text-3xl font-bold mb-12">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-white rounded-full"></div>
                  {index < experiences.length - 1 && (
                    <div className="absolute left-1.5 top-5 w-0.5 h-24 bg-gray-700"></div>
                  )}
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{exp.logo}</span>
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                    <h4 className="text-lg font-medium mb-3">{exp.position}</h4>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-12">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-white rounded-full"></div>
                  {index < education.length - 1 && (
                    <div className="absolute left-1.5 top-5 w-0.5 h-24 bg-gray-700"></div>
                  )}
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{edu.logo}</span>
                      <h3 className="text-xl font-semibold">{edu.school}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    <h4 className="text-lg font-medium mb-3">{edu.degree}</h4>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
