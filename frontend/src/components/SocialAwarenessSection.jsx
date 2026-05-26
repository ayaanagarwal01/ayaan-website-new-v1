import React from 'react';
import { socialImpactData } from '../data/mockData';
import { Clock, Heart } from 'lucide-react';

const SocialAwarenessSection = () => {
  return (
    <section id="social-impact" className="py-20 bg-[#0a0a1a] relative overflow-hidden z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/15 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-violet-500/[0.04] rounded-full blur-[150px]" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-cyan-500/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0f1025]/60 border border-slate-800/50">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight">{socialImpactData.subtitle}</h3>
          <p data-testid="social-impact-description" className="text-slate-300 text-base sm:text-lg leading-[1.85] mb-8">
            {socialImpactData.description}
          </p>

          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-violet-500/[0.1] to-cyan-500/[0.05] border border-violet-500/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-400/[0.08] rounded-full blur-2xl" />
            <div className="relative flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-violet-400" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
                  <span className="text-violet-300 text-xs font-bold tracking-[0.15em] uppercase">Stay Tuned</span>
                </div>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{socialImpactData.comingSoon}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500" data-testid="social-impact-partner">
            <Heart size={14} className="text-pink-400" />
            <span>In collaboration with <span className="text-white font-semibold">Doctors For You</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialAwarenessSection;
