
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Works from '../components/Works';
import About from '../components/About';
import Tools from '../components/Tools';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Work2 from '@/components/Work2';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Services />
      <Works />
      <Tools />
      <Work2/>
       <Experience />
       <About />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
