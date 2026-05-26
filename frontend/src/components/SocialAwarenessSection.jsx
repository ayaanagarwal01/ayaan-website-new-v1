import React from 'react';
import { socialImpactData } from '../data/mockData';
import { Clapperboard, Sparkles, Clock } from 'lucide-react';

const SocialAwarenessSection = () => {
  return (
    <section id="social-impact" className="py-28 bg-[#0a0a1a] relative overflow-hidden z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/15 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-violet-500/[0.04] rounded-full blur-[150px]" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-cyan-500/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{socialImpactData.subtitle}</h3>
            <p className="text-slate-400 text-base leading-[1.8] mb-8">{socialImpactData.description}</p>
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-violet-500/[0.08] to-cyan-500/[0.05] border border-violet-500/15 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-400/[0.06] rounded-full blur-2xl" />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-violet-400" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
                    <span className="text-violet-300 text-xs font-bold tracking-[0.15em] uppercase">Stay Tuned</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{socialImpactData.comingSoon}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-slate-500 tracking-[0.15em] uppercase mb-6">Topics Covered</h4>
            <div className="space-y-3">
              {socialImpactData.topics.map((topic, index) => (
                <div key={index}
                  className="group flex items-center gap-3 p-4 bg-[#0f1025]/60 rounded-xl border border-slate-800/50 hover:border-violet-500/20 transition-all duration-500 hover:-translate-y-0.5 shimmer-hover">
                  <Sparkles size={14} className="text-violet-400/60 flex-shrink-0 group-hover:text-violet-400 transition-colors duration-500" />
                  <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors duration-500">{topic}</span>
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
