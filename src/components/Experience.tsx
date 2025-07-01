
import React from 'react';

const Experience = () => {
const experiences = [
  {
    company: 'Personal Freelancing',
    period: 'Jan 2025 – Present',
    position: 'MERN Stack Developer',
    description: 'Collaborating with local clients to design and deploy full-stack web applications using React.js, Node.js, MongoDB, and Express. Managing both frontend and backend independently while ensuring responsiveness and performance.',
    logo: '🔥'
  },
  {
    company: 'East IT Consulting Pvt Ltd',
    period: 'Nov 2023 – Dec 2024',
    position: 'Jr MERN Stack Developer',
    description: 'Worked on web development projects for a US-based client, Jim Martin. Developed and maintained features using React, Redux, and Node.js. Collaborated with UI/UX designers and integrated REST APIs efficiently.',
    logo: '⚡'
  },
  {
    company: 'RK Info Systems',
    period: 'Mar 2023 – Sep 2023',
    position: 'Software Engineer Intern',
    description: 'Supported senior developers by debugging, refactoring, and testing existing modules. Gained hands-on experience with version control systems and Agile methodologies in a real-time project environment.',
    logo: '⚡'
  }
];


 const education = [
  {
    school: 'Anurag Group of Institutions',
    period: 'Aug 2019 – Aug 2023',
    degree: 'Bachelor of Technology in Computer Science',
    description: 'Completed core coursework in Data Structures, DBMS, Web Technologies, and Java Programming. Actively participated in tech fests and group projects with a focus on real-world problem-solving.',
    logo: '✨'
  },
  {
    school: 'Narayana Junior College',
    period: 'Jun 2017 – May 2019',
    degree: 'Intermediate (MPC Stream)',
    description: 'Studied Mathematics, Physics, and Chemistry with a strong foundation in analytical thinking and problem-solving skills. Maintained consistent academic performance.',
    logo: '⚡'
  },
  {
    school: 'Krishnaveni Talent School',
    period: '2017 Passed Out',
    degree: 'Secondary School Certificate (SSC)',
    description: 'Built a solid academic base with an emphasis on discipline, communication, and logical reasoning. Secured top scores in mathematics and science subjects.',
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
