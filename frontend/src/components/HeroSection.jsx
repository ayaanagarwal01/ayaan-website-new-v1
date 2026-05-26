import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Microscope, Drama, Trophy, HeartHandshake } from 'lucide-react';

const HERO_IMAGE = '/images/ayaan-stage.jpg';

const stats = [
  { value: '3', label: 'Research Projects', sublabel: 'incl. TIFR collaboration', icon: Microscope, color: 'blue' },
  { value: '2', label: 'Musical Productions', sublabel: 'on stage & on screen', icon: Drama, color: 'purple' },
  { value: '3+', label: 'Debate Titles', sublabel: 'national & international', icon: Trophy, color: 'amber' },
  { value: '3', label: 'Service Initiatives', sublabel: 'YLAC · Service Yatra · ApniShala', icon: HeartHandshake, color: 'green' },
];

const accentByColor = {
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-300', border: 'border-blue-500/20', ring: 'group-hover:border-blue-400/40' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-300', border: 'border-purple-500/20', ring: 'group-hover:border-purple-400/40' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-300', border: 'border-amber-500/20', ring: 'group-hover:border-amber-400/40' },
  green: { bg: 'bg-green-500/10', text: 'text-green-300', border: 'border-green-500/20', ring: 'group-hover:border-green-400/40' },
};

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

      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a1a] to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
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
                data-testid="hero-cta-contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:shadow-[0_8px_40px_-8px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 relative overflow-hidden"
              >
                <span className="relative z-10">{ctaText || 'Get in Touch'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" />
              </a>
              <Link
                to="/research"
                data-testid="hero-cta-explore"
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500/50 font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:-translate-y-0.5"
              >
                Explore Work
              </Link>
            </div>
          </div>

          {/* Right — Stage image */}
          <div className="flex-1 flex justify-center lg:justify-end relative w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-pink-500/10 rounded-full blur-[100px] scale-75 animate-pulse-glow" />
            <div className="relative group w-full max-w-[540px]">
              <div className="absolute -inset-4 rounded-[2.5rem] border border-blue-500/[0.08] group-hover:border-blue-500/20 transition-all duration-1000" />
              <div className="absolute -inset-8 rounded-[3rem] border border-purple-500/[0.04] group-hover:border-purple-500/10 transition-all duration-1000" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_25px_80px_-15px_rgba(59,130,246,0.2)]">
                <img
                  src={HERO_IMAGE}
                  alt="Ayaan Agarwal on stage"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/30 via-transparent to-transparent" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/[0.08]" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats row — moved from KeyHighlights */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4" data-testid="hero-stats">
          {stats.map((s) => {
            const Icon = s.icon;
            const a = accentByColor[s.color];
            return (
              <div key={s.label}
                data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`group relative p-5 rounded-2xl bg-[#0f1025]/70 backdrop-blur-sm border ${a.border} ${a.ring} transition-all duration-500 hover:-translate-y-1 overflow-hidden`}>
                <div className={`absolute -top-6 -right-6 w-20 h-20 ${a.bg} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`relative w-9 h-9 rounded-xl ${a.bg} flex items-center justify-center mb-3`}>
                  <Icon size={16} className={a.text} />
                </div>
                <div className={`relative text-3xl sm:text-4xl font-black tracking-tight ${a.text} mb-0.5`}>{s.value}</div>
                <div className="relative text-xs sm:text-sm font-bold text-white">{s.label}</div>
                <div className="relative text-[10px] sm:text-xs text-slate-500 mt-0.5">{s.sublabel}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] text-slate-600 font-medium tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown className="text-blue-500/50" size={16} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
