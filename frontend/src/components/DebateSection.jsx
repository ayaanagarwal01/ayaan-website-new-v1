import React from 'react';
import { debateAchievements } from '../data/mockData';
import { MessageSquare, Award } from 'lucide-react';

const DebateSection = () => {
  return (
    <section id="debate" className="py-28 bg-zinc-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end gap-4 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <MessageSquare size={18} className="text-amber-400" />
              </div>
              <span className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">Achievements</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Debate</h2>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent mb-3" />
        </div>

        {/* Debate Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {debateAchievements.map((item) => (
            <div
              key={item.id}
              className="group relative bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-70" />
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3">
                  <Award size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <h3 className="text-base font-bold text-gray-200 group-hover:text-amber-400 transition-colors duration-500 leading-snug">
                    {item.title}
                  </h3>
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
