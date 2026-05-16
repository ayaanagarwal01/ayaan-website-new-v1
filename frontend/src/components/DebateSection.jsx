import React from 'react';
import { debateAchievements } from '../data/mockData';
import { MessageSquare, Award } from 'lucide-react';

const DebateSection = () => {
  return (
    <section id="debate" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <MessageSquare size={24} className="text-amber-500" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Debate</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-red-500 rounded-full mt-2" />
          </div>
        </div>

        {/* Debate Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {debateAchievements.map((item) => (
            <div
              key={item.id}
              className="group relative bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-800 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3">
                  <Award size={20} className="text-amber-400 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
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
