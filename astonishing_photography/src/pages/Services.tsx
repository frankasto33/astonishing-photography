import React from 'react';
import { Check } from 'lucide-react';

const Services = () => {
  const packages = [
    {
      name: "Portrait Session",
      price: "$350",
      duration: "1-2 hours",
      includes: [
        "Professional portrait session",
        "20-30 edited high-resolution images",
        "Online gallery for viewing and sharing",
        "Print release included",
        "Multiple outfit changes"
      ]
    },
    {
      name: "Wedding & Event Photography",
      price: "$1,200",
      duration: "6-8 hours",
      includes: [
        "Full event coverage",
        "200+ edited high-resolution images",
        "Online gallery with download access",
        "Same-day sneak peeks",
        "Professional editing and color correction",
        "USB drive with all images"
      ]
    },
    {
      name: "Real Estate Photography",
      price: "$300",
      duration: "2-3 hours",
      includes: [
        "Interior and exterior shots",
        "20-40 edited high-resolution images",
        "HDR processing for optimal lighting",
        "Same-day delivery available",
        "MLS-ready images"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-gray-900">
            Photography Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional photography services designed to capture your most important moments 
            with exceptional quality and artistic vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.name}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-light mb-2 text-gray-900">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-light text-gray-700 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-500">{pkg.duration}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gray-900 text-white py-3 px-6 hover:bg-gray-800 transition-colors duration-300">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-light mb-6 text-gray-900">
            Ready to Create Something Astonishing?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create stunning photographs that capture your story perfectly.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
