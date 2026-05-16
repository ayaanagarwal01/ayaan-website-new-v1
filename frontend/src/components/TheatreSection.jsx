import React from 'react';
import { Link } from 'react-router-dom';
import { theatreShows } from '../data/mockData';
import { Drama, ArrowUpRight } from 'lucide-react';

const TheatreSection = () => {
  return (
    <section id="theatre" className="py-28 bg-zinc-800 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end gap-4 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Drama size={18} className="text-amber-400" />
              </div>
              <span className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">Performances</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Theatre</h2>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-zinc-700/50 to-transparent mb-3" />
        </div>

        {/* Theatre Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {theatreShows.map((show) => (
            <Link
              key={show.id}
              to={show.link}
              className="group relative rounded-2xl overflow-hidden border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-72 sm:h-80 lg:h-[420px] overflow-hidden">
                <img
                  src={show.thumbnail}
                  alt={show.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors duration-500">
                    {show.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    {show.videos.length} performance{show.videos.length !== 1 ? 's' : ''} &middot; {show.gallery.length} photos
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheatreSection;
