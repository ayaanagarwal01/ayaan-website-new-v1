import React from 'react';
import { serviceActivities } from '../data/mockData';
import SectionBanner from './SectionBanner';
import { Heart } from 'lucide-react';

const ServiceSection = () => {
  return (
    <section id="service" className="py-28 bg-[#0a0a1a] relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />
      <div className="absolute bottom-40 right-10 w-[300px] h-[300px] bg-emerald-500/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end gap-4 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Heart size={18} className="text-emerald-400" />
              </div>
              <span className="text-xs font-semibold text-slate-500 tracking-[0.2em] uppercase">Community</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Service</h2>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-emerald-500/15 to-transparent mb-3" />
        </div>

        <SectionBanner accent="emerald" caption="Service is the quietest spotlight — the one that asks nothing in return." />

        <div className="grid md:grid-cols-3 gap-6">
          {serviceActivities.map((activity) => (
            <div key={activity.id}
              className="group relative bg-[#0f1025]/80 rounded-2xl overflow-hidden border border-slate-800/50 hover:border-emerald-500/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(16,185,129,0.15)] card-glow gradient-border">
              <div className="relative h-60 overflow-hidden">
                <img src={activity.image} alt={activity.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1025] via-[#0f1025]/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-500">{activity.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
