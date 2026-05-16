import React, { useState, useEffect, useCallback } from 'react';
import { servicesData } from '../data/mockData';
import { Drama, Music, Heart, Microscope, ChevronLeft, ChevronRight } from 'lucide-react';

const iconMap = { drama: Drama, music: Music, heart: Heart, microscope: Microscope };

const cardGradients = [
  'from-blue-600/80 to-indigo-900/90 border-blue-500/20',
  'from-purple-600/80 to-violet-900/90 border-purple-500/20',
  'from-emerald-600/80 to-teal-900/90 border-emerald-500/20',
  'from-pink-600/80 to-rose-900/90 border-pink-500/20',
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % servicesData.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleNavClick = (link) => {
    const el = document.querySelector(link);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#0a0a1a] relative z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-[1fr_1fr] gap-5 items-stretch">
          {/* Left: 2x2 cards */}
          <div className="grid grid-cols-2 gap-5">
            {servicesData.map((service, index) => {
              const IconComp = iconMap[service.icon];
              return (
                <button
                  key={service.id}
                  onClick={() => handleNavClick(service.link)}
                  className={`group relative bg-gradient-to-br ${cardGradients[index]} rounded-2xl p-7 text-left overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_-15px_rgba(59,130,246,0.25)] border shimmer-hover min-h-[260px]`}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="absolute inset-0 opacity-[0.06]" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-white/[0.1] backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/[0.15] group-hover:scale-110 transition-all duration-500">
                      {IconComp && <IconComp size={24} className="text-white/90" />}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-white/[0.03] rounded-full group-hover:scale-125 transition-transform duration-700" />
                </button>
              );
            })}
          </div>

          {/* Right: stage image */}
          <div
            data-testid="services-stage-image"
            className="relative rounded-2xl overflow-hidden border border-slate-800/60 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.7)] group min-h-[260px]"
          >
            <img
              src="/images/ayaan-stage.jpg"
              alt="Ayaan on stage under purple lights"
              className="absolute inset-0 w-full h-full object-cover object-[60%_30%] transition-transform duration-[1500ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {servicesData.map((service, index) => {
              const IconComp = iconMap[service.icon];
              return (
                <div key={service.id} className={`transition-all duration-500 ${index === currentIndex ? 'block' : 'hidden'}`}>
                  <button onClick={() => handleNavClick(service.link)}
                    className={`w-full group relative bg-gradient-to-br ${cardGradients[index]} rounded-2xl p-8 text-left overflow-hidden border`}>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-white/[0.1] flex items-center justify-center mb-6">
                        {IconComp && <IconComp size={24} className="text-white/90" />}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </button>
                </div>
              );
            })}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prevSlide} className="p-2 rounded-full bg-slate-800 border border-slate-700/50 text-slate-500 hover:text-white transition-all">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {servicesData.map((_, i) => (
                  <button key={i} onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-blue-500 w-8' : 'bg-slate-700 w-1.5'}`} />
                ))}
              </div>
              <button onClick={nextSlide} className="p-2 rounded-full bg-slate-800 border border-slate-700/50 text-slate-500 hover:text-white transition-all">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
