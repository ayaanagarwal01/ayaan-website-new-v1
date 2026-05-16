import React from 'react';
import { Link } from 'react-router-dom';
import { researchProjects } from '../data/mockData';
import { ArrowUpRight, Beaker } from 'lucide-react';

const ResearchSection = () => {
  return (
    <section id="research" className="py-28 bg-[#0c0c20] relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end gap-4 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Beaker size={18} className="text-blue-400" />
              </div>
              <span className="text-xs font-semibold text-slate-500 tracking-[0.2em] uppercase">Academic Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Research</h2>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-blue-500/15 to-transparent mb-3" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchProjects.map((project) => (
            <Link key={project.id} to={project.link}
              className="group relative bg-[#0f1025]/80 rounded-2xl overflow-hidden border border-slate-800/50 hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(59,130,246,0.15)] card-glow gradient-border">
              <div className="relative h-52 overflow-hidden">
                <img src={project.thumbnail} alt={project.shortTitle} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1025] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-blue-500/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-200 leading-snug group-hover:text-blue-400 transition-colors duration-500">{project.shortTitle}</h3>
                {project.organization && <p className="mt-2 text-xs text-slate-500 font-medium">{project.organization}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
