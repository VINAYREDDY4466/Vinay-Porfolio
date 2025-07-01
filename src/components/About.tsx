
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-400 mb-4 text-4xl">About Me</p>
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight mb-8">
             Hello ! I'm an full-stack developer. 
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-gray-900 rounded-lg p-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="../../public/batman.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm">GET IN TOUCH</p>
                 <a href="mailto:vinayreddyd4466@gmail.com" className='text-blue-500' >vinayreddyd4466@gmail.com</a>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
            I was graduated in 2023 from the Anurag Group Of Institutions in Hyderabad, Telangana.
             I have work experience in various technologies like  javascript, reactjs, nodejs, mongodb,DSA, java, sql, docker..etc
             I am currently working as a freelancer building web applications for local businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
