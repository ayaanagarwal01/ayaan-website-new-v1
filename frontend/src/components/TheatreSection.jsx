import React from 'react';
import { Link } from 'react-router-dom';
import { theatreShows } from '../data/mockData';
import { Drama, ArrowUpRight } from 'lucide-react';

const TheatreSection = () => {
  return (
    <section id="theatre" className="py-24 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <Drama size={24} className="text-amber-500" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Theatre</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-red-500 rounded-full mt-2" />
          </div>
        </div>

        {/* Theatre Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {theatreShows.map((show) => (
            <Link
              key={show.id}
              to={show.link}
              className="group relative rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/10"
            >
              <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={show.thumbnail}
                  alt={show.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {show.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-900/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={18} className="text-white" />
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
