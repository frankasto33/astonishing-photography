
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 animate-fade-in">
          Preserving Your
          <br />
          Most Precious Memories
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide mb-8 animate-fade-in max-w-2xl mx-auto">
          Professional photography services specializing in portraits, weddings, events, and real estate. 
          Creating timeless images with artistic excellence and attention to detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Link 
            to="/services"
            className="bg-white text-gray-900 px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            View Services
          </Link>
          <Link 
            to="/contact"
            className="border-2 border-white text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            Book Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
