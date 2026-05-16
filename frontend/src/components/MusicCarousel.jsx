import React, { useState, useRef } from 'react';
import { musicVideos } from '../data/mockData';
import { Music2, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const MusicCarousel = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="music" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
              <Music2 size={24} className="text-red-500" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Music</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-full mt-2" />
            </div>
          </div>

          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-zinc-800 border border-zinc-700 text-gray-400 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-zinc-800 border border-zinc-700 text-gray-400 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Video Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {musicVideos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
            >
              <div
                className="group relative rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/50 hover:border-red-600/30 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm group-hover:text-amber-400 transition-colors duration-300 truncate">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll buttons */}
        <div className="flex sm:hidden justify-center gap-2 mt-4">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-zinc-800 text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-zinc-800 text-gray-400 hover:text-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-900">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-white font-semibold mt-4">{activeVideo.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MusicCarousel;
