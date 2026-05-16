import React from 'react';
import { Link } from 'react-router-dom';
import { researchProjects } from '../data/mockData';
import { ArrowUpRight, Beaker } from 'lucide-react';

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
            <Beaker size={24} className="text-red-500" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Research</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-full mt-2" />
          </div>
        </div>

        {/* Research Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchProjects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="group relative bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-red-600/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.shortTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-800 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-900/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-amber-400 transition-colors duration-300">
                  {project.shortTitle}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
