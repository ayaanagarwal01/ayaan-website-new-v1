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
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComp = iconMap[service.icon];
            return (
              <button
                key={service.id}
                onClick={() => handleNavClick(service.link)}
                className="group relative bg-gradient-to-br from-red-700 to-red-900 rounded-2xl p-8 text-left overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/30"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    {IconComp && <IconComp size={28} className="text-amber-300" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-red-100/80 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full" />
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
                    className="w-full group relative bg-gradient-to-br from-red-700 to-red-900 rounded-2xl p-8 text-left overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                        {IconComp && <IconComp size={28} className="text-amber-300" />}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-red-100/80 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </button>
                </div>
              );
            })}

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-zinc-800 text-gray-400 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {servicesData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'bg-red-500 w-6' : 'bg-zinc-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-zinc-800 text-gray-400 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
