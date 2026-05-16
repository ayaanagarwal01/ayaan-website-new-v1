import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = ({ title, subtitle, ctaText, ctaLink }) => {
  const handleCta = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center bg-zinc-800 overflow-hidden">
      {/* Animated grain */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />

      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/[0.04] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[120px]" />

      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent" />

      {/* Decorative line */}
      <div className="absolute left-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-zinc-700/40 to-transparent hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:pl-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.04] border border-white/[0.06] rounded-full mb-10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
            <span className="text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase">Hi</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
            {title ||
            <>
                Welcome to<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-red-500">
                  Ayaan&rsquo;s
                </span>{' '}
                Portfolio!
              </>
            }
          </h1>

          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-12 max-w-xl">
            {subtitle ||
            'You can find all of my research projects, music & theatre performances, debates, and service activities on this website!'}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={ctaLink || '#contact'}
              onClick={handleCta}
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:shadow-[0_8px_40px_-8px_rgba(220,38,38,0.4)] hover:-translate-y-0.5">

              {ctaText || 'Get in Touch'}
            </a>
            <a
              href="#research"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#research')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 text-gray-400 hover:text-white hover:border-zinc-500 font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:-translate-y-0.5">

              Explore Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] text-gray-600 font-medium tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown className="text-gray-600" size={16} />
        </div>
      </div>
    </section>);

};

export default HeroSection;