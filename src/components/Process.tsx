
import React from 'react';

const Process = () => {
  const processSteps = [
    {
      number: '1',
      title: 'Discover',
      description: 'The goal is to define clear objectives and requirements for the product and gathering insights.',
      methods: ['STAKEHOLDER INTERVIEW', 'PROBLEM FINDING']
    },
    {
      number: '2',
      title: 'Design',
      description: 'In this stage, ideas are translated into tangible concepts to align product with business goals.',
      methods: ['WIREFRAME', 'VISUAL DESIGN']
    },
    {
      number: '3',
      title: 'Deliver',
      description: 'The final phase involves collaborating with developers to build and launch the product.',
      methods: ['PROJECT HANDOVER', 'DEVELOPER COLLABORATION']
    }
  ];

  return (
    <section id="process" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-4">How I work</p>
          <h2 className="text-5xl font-bold mb-8">PRODUCT DESIGN PROCESS</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Structured series of steps that guide the development of a new product—from identifying a problem or 
            opportunity, to delivering a final, market-ready solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-700 transform translate-x-1/2"></div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{step.number}. {step.title}</h3>
              <p className="text-gray-300 mb-6">{step.description}</p>
              
              <div className="space-y-2">
                {step.methods.map((method, methodIndex) => (
                  <div
                    key={methodIndex}
                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm inline-block mr-2 mb-2"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
