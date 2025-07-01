

import React from 'react';
import { ArrowRight, Sparkles, Package, Pen, Rocket } from 'lucide-react';
import { Icon } from '@radix-ui/react-select';
import { ShoppingCart, Globe, LayoutTemplate, Spline, Code, Network, PencilRuler } from "lucide-react";
const Services = () => {
  interface Services{
     icon: React.ReactNode;
     title:string;
     description:string;
     tags:string[];
     delay: string;

  }


const services: Services[] = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce Development",
    description: "Build dynamic, scalable e-commerce platforms with secure payment integrations, user-friendly interfaces, and inventory management systems.",
    tags: ["SHOPPING CART", "PAYMENT INTEGRATION", "USER ACCOUNTS", "PRODUCT MANAGEMENT"],
    delay: "0s"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Static & Dynamic Websites",
    description: "Design responsive static and dynamic websites with fast load times and SEO-friendly architecture for businesses and individuals.",
    tags: ["RESPONSIVE DESIGN", "HTML/CSS/JS", "REACT/NEXTJS", "SEO BEST PRACTICES"],
    delay: "0.2s"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "System Design & Architecture",
    description: "Architect scalable backend systems using modern technologies and design principles for high availability, performance, and maintainability.",
    tags: ["MICROSERVICES", "LOAD BALANCING", "API DESIGN", "DATABASE SCALING"],
    delay: "0.4s"
  },
  {
    icon: <PencilRuler className="w-8 h-8" />,
    title: "Figma to Code",
    description: "Convert beautiful UI/UX designs from Figma into high-quality, responsive front-end code using modern frameworks and best practices.",
    tags: ["FIGMA INTERPRETATION", "PIXEL PERFECT DESIGN", "REACT IMPLEMENTATION", "UI COMPONENT LIBRARIES"],
    delay: "0.6s"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Full Stack Web Applications",
    description: "Build robust full stack applications with seamless frontend-backend integration using the MERN/MEVN stack or similar technologies.",
    tags: ["NODE.JS", "MONGODB", "EXPRESS", "REACT/VUE", "AUTHENTICATION"],
    delay: "0.8s"
  },
  {
    icon: <Spline className="w-8 h-8" />,
    title: "Admin Dashboards",
    description: "Develop custom admin panels and dashboards for managing users, analytics, product data, and more with a user-centric approach.",
    tags: ["CHARTS", "CRUD OPERATIONS", "ROLE MANAGEMENT", "REAL-TIME UPDATES"],
    delay: "1s"
  }
];


  return (
    <section id="services" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-4xl mb-4 animate-fade-in">What I do</p>
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Web Development Services
            <br />
        
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
