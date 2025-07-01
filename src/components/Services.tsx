
import React from 'react';
import { ArrowRight, Sparkles, Package, Pen, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "A strong brand strategy defines what a brand stands for, promises to its customers, and how it communicates those promises through product development.",
      tags: ["BRAND POSTURE", "CONSUMER BEHAVIOURS", "NARRATIVE STRATEGY", "OFFER FRAMEWORK"],
      delay: "0s"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Product Design",
      description: "The process of creating and developing a product with the goal of solving a specific problem or fulfilling a user need involves a functionality, aesthetics and usability.",
      tags: ["WEB PLATFORM", "MOBILE APPLICATION", "CREATIVE DESIGN SOLUTIONS", "AI CONSULTING"],
      delay: "0.2s"
    },
    {
      icon: <Pen className="w-8 h-8" />,
      title: "UI UX Design",
      description: "Creating digital products that are both visually appealing and easy to use having focus on different aspects of the user's interaction with a product.",
      tags: ["VISUAL DESIGN", "CUSTOMER EXPERIENCE", "PROTOTYPING", "WIREFRAMES", "WEB DESIGN"],
      delay: "0.4s"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "SEO Services",
      description: "Aim to increase organic (non-paid) traffic by optimizing various elements of a website, making it more attractive to both users and search engines.",
      tags: ["PPC ADVERTISING", "SEO AUDITS", "OFF-PAGE SEO", "KEYWORD RESEARCH", "LINK BUILDING"],
      delay: "0.6s"
    }
  ];

  return (
    <section id="services" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4 animate-fade-in">What I do</p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            DIGITAL PRODUCT DESIGN
            <br />
            <span className="text-gray-300">SERVICES I OFFER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-500 group animate-fade-in hover:scale-105"
              style={{ animationDelay: service.delay }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
