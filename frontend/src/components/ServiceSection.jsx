import React from 'react';
import { serviceActivities } from '../data/mockData';
import { Heart } from 'lucide-react';

const ServiceSection = () => {
  return (
    <section id="service" className="py-28 bg-zinc-800 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end gap-4 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                <Heart size={18} className="text-red-400" />
              </div>
              <span className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">Community</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Service</h2>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-zinc-700/50 to-transparent mb-3" />
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {serviceActivities.map((activity) => (
            <div
              key={activity.id}
              className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-500">
                  {activity.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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
