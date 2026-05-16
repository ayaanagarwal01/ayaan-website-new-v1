import React from 'react';

/**
 * Prominent cinematic banner image used across Theatre / Music / Service / Research sections.
 * accent: 'purple' | 'pink' | 'emerald' | 'blue' — controls the colored overlay glow.
 */
const accentMap = {
  purple: 'from-purple-500/30 via-transparent to-transparent',
  pink: 'from-pink-500/30 via-transparent to-transparent',
  emerald: 'from-emerald-500/30 via-transparent to-transparent',
  blue: 'from-blue-500/30 via-transparent to-transparent',
};

const SectionBanner = ({ accent = 'purple', caption }) => {
  const glow = accentMap[accent] || accentMap.purple;
  return (
    <div
      data-testid={`section-banner-${accent}`}
      className="group relative mb-12 overflow-hidden rounded-3xl border border-slate-800/60 bg-[#0f1025] shadow-[0_30px_80px_-25px_rgba(0,0,0,0.7)]"
    >
      <div className="relative aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7]">
        <img
          src="/images/ayaan-stage.jpg"
          alt="Ayaan on stage under purple stage lights"
          className="w-full h-full object-cover object-[center_25%] transition-transform duration-[1200ms] group-hover:scale-105"
        />
        {/* Bottom gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/40 to-transparent" />
        {/* Accent colored glow */}
        <div className={`absolute inset-0 bg-gradient-to-tr ${glow} mix-blend-screen opacity-60`} />

        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="text-white text-sm sm:text-base font-medium tracking-wide drop-shadow-lg max-w-xl">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionBanner;
