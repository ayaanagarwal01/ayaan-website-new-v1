import React from 'react';
import { serviceActivities } from '../data/mockData';
import { Heart } from 'lucide-react';

const ServiceSection = () => {
  return (
    <section id="service" className="py-24 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
            <Heart size={24} className="text-red-500" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Service</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-full mt-2" />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {serviceActivities.map((activity) => (
            <div
              key={activity.id}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-red-600/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
