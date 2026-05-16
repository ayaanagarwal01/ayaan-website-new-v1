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
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0a0a1a] overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/[0.07] rounded-full blur-[180px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/[0.06] rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-pink-500/[0.04] rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400/30 rounded-full animate-float" />
      <div className="absolute top-40 left-[15%] w-2 h-2 bg-purple-400/30 rounded-full animate-float-slow" />
      <div className="absolute bottom-40 right-[20%] w-4 h-4 bg-cyan-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[60%] left-[10%] w-2 h-2 bg-pink-400/25 rounded-full animate-float-slow" style={{ animationDelay: '3s' }} />

      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a1a] to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
          {/* Left — Text */}
          <div className="flex-1 max-w-xl lg:max-w-lg">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-blue-500/[0.08] border border-blue-500/[0.15] rounded-full mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase">Hi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              {title || (
                <>
                  Welcome to<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-shift">
                    Ayaan&rsquo;s
                  </span>{' '}
                  World!
                </>
              )}
            </h1>

            <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-md">
              {subtitle ||
                'You can find all of my research projects, music & theatre performances, debates, and service activities on this website!'}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={ctaLink || '#contact'}
                onClick={handleCta}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:shadow-[0_8px_40px_-8px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 relative overflow-hidden"
              >
                <span className="relative z-10">{ctaText || 'Get in Touch'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" />
              </a>
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#research')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500/50 font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:-translate-y-0.5"
              >
                Explore Work
              </a>
            </div>
          </div>

          {/* Right — BIG Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-pink-500/10 rounded-full blur-[100px] scale-75 animate-pulse-glow" />

            <div className="relative group">
              {/* Animated ring */}
              <div className="absolute -inset-4 rounded-[2.5rem] border border-blue-500/[0.08] group-hover:border-blue-500/20 transition-all duration-1000" />
              <div className="absolute -inset-8 rounded-[3rem] border border-purple-500/[0.04] group-hover:border-purple-500/10 transition-all duration-1000" style={{ animationDelay: '0.2s' }} />

              {/* Main image — BIG */}
              <div className="relative w-[340px] sm:w-[440px] lg:w-[540px] rounded-3xl overflow-hidden shadow-[0_25px_80px_-15px_rgba(59,130,246,0.2)]">
                <img
                  src={HERO_IMAGE}
                  alt="Ayaan Agarwal — Theatre, Music, Research, Film"
                  className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/[0.08]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] text-slate-600 font-medium tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown className="text-blue-500/50" size={16} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
