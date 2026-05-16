import React from 'react';
import { socialAwarenessData } from '../data/mockData';
import { Clapperboard, Sparkles, Clock } from 'lucide-react';

const SocialAwarenessSection = () => {
  return (
    <section id="social-awareness" className="py-28 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[150px]" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-amber-500/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex items-end gap-4 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Clapperboard size={18} className="text-purple-400" />
              </div>
              <span className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">Coming Soon</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">{socialAwarenessData.title}</h2>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent mb-3" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Main content - left */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
              {socialAwarenessData.subtitle}
            </h3>
            <p className="text-gray-400 text-base leading-[1.8] mb-8">
              {socialAwarenessData.description}
            </p>

            {/* Coming Soon banner */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-500/[0.08] to-amber-500/[0.05] border border-purple-500/15 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/[0.06] rounded-full blur-2xl" />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-purple-400" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-purple-300 text-xs font-bold tracking-[0.15em] uppercase">Stay Tuned</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {socialAwarenessData.comingSoon}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Topics - right */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-gray-500 tracking-[0.15em] uppercase mb-6">Topics Covered</h4>
            <div className="space-y-3">
              {socialAwarenessData.topics.map((topic, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 p-4 bg-zinc-800/40 rounded-xl border border-zinc-800 hover:border-purple-500/20 transition-all duration-500 hover:-translate-y-0.5"
                >
                  <Sparkles size={14} className="text-purple-400/60 flex-shrink-0 group-hover:text-purple-400 transition-colors duration-500" />
                  <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-500">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialAwarenessSection;
