import React, { useState, useRef } from 'react';
import { musicVideos } from '../data/mockData';
import { Music2, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const MusicCarousel = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -360 : 360, behavior: 'smooth' });
    }
  };

  return (
    <section id="music" className="py-28 bg-[#0c0c20] relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/15 to-transparent" />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-pink-500/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-pink-500/10 flex items-center justify-center">
                <Music2 size={18} className="text-pink-400" />
              </div>
              <span className="text-xs font-semibold text-slate-500 tracking-[0.2em] uppercase">Live Performances</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Music</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll('left')} className="p-2.5 rounded-full bg-slate-800/80 border border-slate-700/40 text-slate-500 hover:text-white hover:bg-pink-500/20 hover:border-pink-500/30 transition-all duration-300">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll('right')} className="p-2.5 rounded-full bg-slate-800/80 border border-slate-700/40 text-slate-500 hover:text-white hover:bg-pink-500/20 hover:border-pink-500/30 transition-all duration-300">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
          {musicVideos.map((video) => (
            <div key={video.id} className="flex-shrink-0 w-[280px] sm:w-[340px] snap-start">
              <div className="group relative rounded-2xl overflow-hidden bg-[#0f1025]/80 border border-slate-800/50 hover:border-pink-500/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer card-glow gradient-border"
                onClick={() => setActiveVideo(video)}>
                <div className="relative aspect-video">
                  <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-pink-500/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-pink-900/40 group-hover:scale-125 transition-transform duration-500">
                      <Play size={20} className="text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm group-hover:text-pink-400 transition-colors duration-500 truncate">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex sm:hidden justify-center gap-2 mt-6">
          <button onClick={() => scroll('left')} className="p-2 rounded-full bg-slate-800 border border-slate-700/50 text-slate-500 hover:text-white transition-colors"><ChevronLeft size={16} /></button>
          <button onClick={() => scroll('right')} className="p-2 rounded-full bg-slate-800 border border-slate-700/50 text-slate-500 hover:text-white transition-colors"><ChevronRight size={16} /></button>
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} className="absolute -top-14 right-0 p-2.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300"><X size={22} /></button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
              <iframe src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`} title={activeVideo.title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="text-center text-white font-semibold mt-5 text-lg">{activeVideo.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MusicCarousel;
