
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <Camera className="w-12 h-12 mx-auto mb-6 text-white" />
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss your photography needs and create something beautiful together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-gray-900 px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
