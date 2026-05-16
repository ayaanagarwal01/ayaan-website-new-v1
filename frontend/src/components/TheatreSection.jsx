import React from 'react';
import { Link } from 'react-router-dom';
import { theatreShows } from '../data/mockData';
import { Drama, ArrowUpRight } from 'lucide-react';

const TheatreSection = () => {
  return (
    <section id="theatre" className="py-28 bg-[#0a0a1a] relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-purple-600/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end gap-4 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Drama size={18} className="text-purple-400" />
              </div>
              <span className="text-xs font-semibold text-slate-500 tracking-[0.2em] uppercase">Performances</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Theatre</h2>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-purple-500/15 to-transparent mb-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {theatreShows.map((show) => (
            <Link key={show.id} to={show.link}
              className="group relative rounded-2xl overflow-hidden border border-slate-800/50 hover:border-purple-500/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(168,85,247,0.15)] card-glow gradient-border">
              <div className="relative h-72 sm:h-80 lg:h-[420px] overflow-hidden">
                <img src={show.thumbnail} alt={show.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-500">{show.title}</h3>
                  <p className="text-sm text-slate-500 mt-2">{show.videos.length} performance{show.videos.length !== 1 ? 's' : ''} &middot; {show.gallery.length} photos</p>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-purple-500/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
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
