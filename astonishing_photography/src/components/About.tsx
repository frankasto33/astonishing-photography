
import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Welcome to Astonishing Photography. I'm a dedicated professional photographer 
              with over a decade of experience capturing life's most meaningful moments. 
              My passion lies in creating timeless images that tell authentic stories.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Specializing in portraits, weddings, events, and real estate photography, 
              I bring a keen eye for detail and a commitment to excellence to every project. 
              My approach combines technical expertise with artistic vision to deliver 
              exceptional results that exceed expectations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe that every photograph should capture not just an image, but an emotion, 
              a memory, and a moment in time that will be treasured for generations. 
              Let's work together to create something truly astonishing.
            </p>
          </div>
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
                alt="Professional photographer at work"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
