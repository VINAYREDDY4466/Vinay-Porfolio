
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Works from '../components/Works';
import About from '../components/About';
import Process from '../components/Process';
import Tools from '../components/Tools';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Experience />
      <Works />
      <About />
      <Process />
      <Tools />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
