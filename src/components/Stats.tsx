
import React from 'react';

const Stats = () => {
  const stats = [
    { number: '3+', label: 'Years of experience' },
    { number: '30+', label: 'Projects completed' },
    { number: '10+', label: 'Happy clients' }
  ];

  return (
    <section id="stats" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-gray-400 text-xl">The Numbers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="text-5xl font-bold mb-4">{stat.number}</div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
