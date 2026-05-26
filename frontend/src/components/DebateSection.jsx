import React from 'react';
import { debateAchievements } from '../data/mockData';
import { MessageSquare, Award } from 'lucide-react';

const DebateSection = () => {
  return (
    <section id="debate" className="py-28 bg-[#0c0c20] relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/15 to-transparent" />
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-amber-500/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {debateAchievements.map((item) => (
            <div key={item.id}
              className="group relative bg-[#0f1025]/80 rounded-2xl overflow-hidden border border-slate-800/50 hover:border-amber-500/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(245,158,11,0.12)] card-glow gradient-border">
              <div className="relative h-52 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1025] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <Award size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <h3 className="text-base font-bold text-slate-200 group-hover:text-amber-400 transition-colors duration-500 leading-snug">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DebateSection;
