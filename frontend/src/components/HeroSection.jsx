import React from 'react';
import { ArrowDown } from 'lucide-react';

const HERO_IMAGE = 'https://customer-assets.emergentagent.com/job_ayaan-new/artifacts/jbz7svmy_ayaan%20hero%20image.png';

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
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/[0.04] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[120px]" />

      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent" />

      {/* Decorative line */}
      <div className="absolute left-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-zinc-700/40 to-transparent hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32 lg:pl-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text Content */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.04] border border-white/[0.06] rounded-full mb-10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
              <span className="text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase">Hi</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
              {title || (
                <>
                  Welcome to<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-red-500">
                    Ayaan&rsquo;s
                  </span>{' '}
                  Portfolio!
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-12 max-w-xl">
              {subtitle ||
                'You can find all of my research projects, music & theatre performances, debates, and service activities on this website!'}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={ctaLink || '#contact'}
                onClick={handleCta}
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:shadow-[0_8px_40px_-8px_rgba(220,38,38,0.4)] hover:-translate-y-0.5"
              >
                {ctaText || 'Get in Touch'}
              </a>
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#research')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 text-gray-400 hover:text-white hover:border-zinc-500 font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:-translate-y-0.5"
              >
                Explore Work
              </a>
            </div>
          </div>

          {/* Right — Hero Illustration */}
          <div className="flex-shrink-0 lg:flex-1 flex justify-center lg:justify-end relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-red-500/5 to-transparent rounded-full blur-[80px] scale-90" />

            <div className="relative group">
              {/* Decorative border ring */}
              <div className="absolute -inset-3 rounded-[2rem] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors duration-700" />

              {/* Main image */}
              <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                <img
                  src={HERO_IMAGE}
                  alt="Ayaan Agarwal — Theatre, Music, Research, Film"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Subtle dark overlay at edges for blending */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/[0.06]" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-800/60 to-transparent" />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 rounded-full shadow-lg">
                <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
                  Researcher &middot; Performer &middot; Creator
                </span>
              </div>
            </div>
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
    </section>
  );
};

export default HeroSection;
