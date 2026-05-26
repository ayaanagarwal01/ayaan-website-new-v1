import React, { useState, useRef, useEffect } from 'react';
import { musicVideos } from '../data/mockData';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const MusicCarousel = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef(null);

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    return () => {
      el.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="music" className="py-12 sm:py-16 bg-[#0c0c20] relative z-10">
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-pink-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header row with title + arrows on same line */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] sm:text-xs font-bold text-pink-400/80 tracking-[0.2em] uppercase mb-2">Performances</p>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Watch the band live</h2>
          </div>
          <div className="flex gap-2" data-testid="music-carousel-controls">
            <button onClick={() => scroll('left')} disabled={!canScrollLeft} aria-label="Previous"
              data-testid="music-prev"
              className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/40 text-slate-300 hover:text-white hover:bg-pink-500/20 hover:border-pink-500/40 transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} disabled={!canScrollRight} aria-label="Next"
              data-testid="music-next"
              className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/40 text-slate-300 hover:text-white hover:bg-pink-500/20 hover:border-pink-500/40 transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div ref={scrollRef}
            data-testid="music-carousel-track"
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {musicVideos.map((video) => (
              <div key={video.id} className="flex-shrink-0 w-[260px] sm:w-[320px] lg:w-[360px] snap-start">
                <button
                  type="button"
                  data-testid={`music-card-${video.id}`}
                  className="group relative w-full text-left rounded-2xl overflow-hidden bg-[#0f1025]/80 border border-slate-800/50 hover:border-pink-500/40 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setActiveVideo(video)}
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-pink-500/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-pink-900/40 group-hover:scale-110 transition-transform duration-500">
                        <Play size={20} className="text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-sm group-hover:text-pink-400 transition-colors duration-500 truncate">{video.title}</h3>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} aria-label="Close"
              className="absolute -top-14 right-0 p-2.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300">
              <X size={22} />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-white font-semibold mt-5 text-lg">{activeVideo.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MusicCarousel;
