import React, { useState, useEffect, useCallback } from 'react';
import { servicesData } from '../data/mockData';
import { Drama, Music, Heart, Microscope, ChevronLeft, ChevronRight } from 'lucide-react';

const iconMap = {
  drama: Drama,
  music: Music,
  heart: Heart,
  microscope: Microscope,
};

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
    <section className="py-24 bg-zinc-900 relative">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service) => {
            const IconComp = iconMap[service.icon];
            return (
              <button
                key={service.id}
                onClick={() => handleNavClick(service.link)}
                className="group relative bg-gradient-to-br from-red-800/80 to-red-950/90 rounded-2xl p-7 text-left overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(153,27,27,0.35)] border border-red-900/30 hover:border-red-700/40"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-[0.06]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/[0.08] backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/[0.12] transition-all duration-500 group-hover:scale-105">
                    {IconComp && <IconComp size={24} className="text-amber-300/90" />}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-red-200/50 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/[0.03] rounded-full" />
              </button>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {servicesData.map((service, index) => {
              const IconComp = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className={`transition-all duration-500 ${
                    index === currentIndex ? 'block' : 'hidden'
                  }`}
                >
                  <button
                    onClick={() => handleNavClick(service.link)}
                    className="w-full group relative bg-gradient-to-br from-red-800/80 to-red-950/90 rounded-2xl p-8 text-left overflow-hidden border border-red-900/30"
                  >
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-white/[0.08] flex items-center justify-center mb-6">
                        {IconComp && <IconComp size={24} className="text-amber-300/90" />}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-red-200/50 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </button>
                </div>
              );
            })}

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-zinc-800 border border-zinc-700/50 text-gray-500 hover:text-white hover:bg-zinc-700 transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {servicesData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === currentIndex ? 'bg-red-500 w-8' : 'bg-zinc-700 w-1.5'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-zinc-800 border border-zinc-700/50 text-gray-500 hover:text-white hover:bg-zinc-700 transition-all duration-300"
              >
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
