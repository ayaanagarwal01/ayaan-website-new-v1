import React, { useState, useRef } from 'react';
import { musicVideos } from '../data/mockData';
import { Music2, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const MusicCarousel = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="music" className="py-28 bg-zinc-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                <Music2 size={18} className="text-red-400" />
              </div>
              <span className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">Live Performances</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Music</h2>
          </div>

          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full bg-zinc-800/80 border border-zinc-700/40 text-gray-500 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full bg-zinc-800/80 border border-zinc-700/40 text-gray-500 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Video Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {musicVideos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-[280px] sm:w-[340px] snap-start"
            >
              <div
                className="group relative rounded-2xl overflow-hidden bg-zinc-800/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-red-900/40 group-hover:scale-110 transition-transform duration-500">
                      <Play size={20} className="text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm group-hover:text-amber-400 transition-colors duration-500 truncate">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll buttons */}
        <div className="flex sm:hidden justify-center gap-2 mt-6">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-zinc-800 border border-zinc-700/50 text-gray-500 hover:text-white transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-zinc-800 border border-zinc-700/50 text-gray-500 hover:text-white transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-14 right-0 p-2.5 rounded-full bg-zinc-800/80 text-gray-400 hover:text-white hover:bg-zinc-700 transition-all duration-300"
            >
              <X size={22} />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl">
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
