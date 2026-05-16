import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = ({ title, subtitle, ctaText, ctaLink }) => {
  const handleCta = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center bg-zinc-800 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-sm font-medium tracking-wide">Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {title || (
              <>
                Welcome to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
                  Ayaan&rsquo;s
                </span>{' '}
                Portfolio!
              </>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
            {subtitle ||
              'You can find all of my research projects, music & theatre performances, debates, and service activities on this website!'}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={ctaLink || '#contact'}
              onClick={handleCta}
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 hover:-translate-y-0.5"
            >
              {ctaText || 'Join Us Now!'}
            </a>
            <a
              href="#research"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#research')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-600 text-gray-300 hover:text-white hover:border-zinc-400 font-semibold text-sm tracking-wider uppercase rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-500" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
