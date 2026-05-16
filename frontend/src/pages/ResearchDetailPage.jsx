import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { researchProjects } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Play, X, ExternalLink, Images, Building2, FileText, Award } from 'lucide-react';

const ResearchDetailPage = () => {
  const { id } = useParams();
  const project = researchProjects.find((p) => p.id === id);
  const [activeVideo, setActiveVideo] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#0a0a1a] min-h-screen relative z-10">
      <section className="relative pt-28 pb-20 bg-[#0c0c20] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors duration-300 mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/15 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">Research</span>
          </div>
          {project.organization && (
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold">{project.organization}</span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] max-w-4xl tracking-tight">{project.title}</h1>
          {project.subtitle && project.subtitle !== project.title && <p className="mt-4 text-lg text-slate-400 max-w-3xl">{project.subtitle}</p>}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {project.paperLabel && (
            <div>
              {project.paperLink ? (
                <a href={project.paperLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-4 bg-[#0f1025] border border-slate-800/50 rounded-2xl text-white hover:border-blue-500/30 transition-all duration-300 group shimmer-hover">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center"><FileText size={18} className="text-blue-400" /></div>
                  <span className="font-semibold">{project.paperLabel}</span>
                  <ExternalLink size={16} className="text-slate-500 ml-2" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#0f1025] border border-slate-800/50 rounded-2xl text-white">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center"><FileText size={18} className="text-blue-400" /></div>
                  <span className="font-semibold">{project.paperLabel}</span>
                </div>
              )}
            </div>
          )}

          {project.videoId && (
            <div>
              <h2 className="text-xl font-bold text-white mb-2">{project.videoLabel}</h2>
              <p className="text-slate-500 mb-8 text-sm">{project.videoTitle}</p>
              <div className="relative aspect-video max-w-4xl rounded-2xl overflow-hidden bg-[#0f1025] border border-slate-800/30 cursor-pointer group shadow-2xl shadow-black/30" onClick={() => setActiveVideo(project.videoId)}>
                <img src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`} alt={project.videoTitle} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-blue-900/50 group-hover:scale-110 transition-transform duration-500"><Play size={26} className="text-white ml-1" fill="white" /></div>
                </div>
              </div>
            </div>
          )}

          {project.extras && project.extras.length > 0 && (
            <div className="space-y-6">
              {project.extras.map((extra, idx) => (
                <div key={idx} className="p-6 bg-[#0f1025]/50 border border-slate-800/30 rounded-2xl">
                  {extra.type === 'text' && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Award size={18} className="text-purple-400" /></div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{extra.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{extra.description}</p>
                      </div>
                    </div>
                  )}
                  {extra.type === 'link' && (
                    <div className="flex items-center gap-3"><FileText size={18} className="text-cyan-400" /><span className="text-white font-semibold">{extra.label}</span></div>
                  )}
                </div>
              ))}
            </div>
          )}

          {project.gallery.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center"><Images size={18} className="text-cyan-400" /></div>
                <h2 className="text-2xl font-bold text-white">Gallery</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.gallery.map((img, index) => (
                  <div key={index} className="group relative aspect-video rounded-xl overflow-hidden bg-[#0f1025] border border-slate-800/30 hover:border-blue-500/20 cursor-pointer transition-all duration-500" onClick={() => setLightboxImage(img)}>
                    <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.additionalVideoId && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">{project.additionalVideoTitle}</h2>
              <div className="relative aspect-video max-w-4xl rounded-2xl overflow-hidden bg-[#0f1025] border border-slate-800/30 cursor-pointer group shadow-2xl shadow-black/30" onClick={() => setActiveVideo(project.additionalVideoId)}>
                <img src={`https://img.youtube.com/vi/${project.additionalVideoId}/hqdefault.jpg`} alt={project.additionalVideoTitle} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-blue-900/50 group-hover:scale-110 transition-transform duration-500"><Play size={26} className="text-white ml-1" fill="white" /></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {activeVideo && (
        <div className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} className="absolute -top-14 right-0 p-2.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300"><X size={22} /></button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
              <iframe src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} title="Video" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      )}

      {lightboxImage && (
        <div className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightboxImage(null)} className="absolute -top-14 right-0 p-2.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300"><X size={22} /></button>
            <img src={lightboxImage} alt="Gallery" className="w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
          </div>
        </div>
      )}
      <ContactFooter />
    </main>
  );
};

export default ResearchDetailPage;
