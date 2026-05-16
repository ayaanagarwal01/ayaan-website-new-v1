import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { researchProjects } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Play, X, ExternalLink, Images, Building2, FileText, Award, Beaker } from 'lucide-react';

const ResearchPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <main className="bg-[#0a0a1a] min-h-screen relative z-10">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-[#0c0c20] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors duration-300 mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/15 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">Academic Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-gradient-shift">Research</span>
          </h1>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl">All my research projects in computational biology, microbiology, and RNA therapeutics.</p>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {researchProjects.map((project, projIndex) => (
            <div key={project.id}>
              {/* Project Header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Beaker size={20} className="text-blue-400" />
                  </div>
                  {project.organization && (
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-semibold">{project.organization}</span>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug max-w-4xl">{project.title}</h2>
                {project.subtitle && project.subtitle !== project.title && (
                  <p className="mt-3 text-slate-400 max-w-3xl">{project.subtitle}</p>
                )}
              </div>

              {/* Paper Link */}
              {project.paperLabel && (
                <div className="mb-10">
                  {project.paperLink ? (
                    <a href={project.paperLink} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-4 bg-[#0f1025] border border-slate-800/50 rounded-2xl text-white hover:border-blue-500/30 transition-all duration-300 group shimmer-hover">
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

              {/* Video */}
              {project.videoId && (
                <div className="mb-14">
                  <h3 className="text-lg font-bold text-slate-300 mb-2">{project.videoLabel}</h3>
                  <p className="text-slate-500 mb-6 text-sm">{project.videoTitle}</p>
                  <div className="relative aspect-video max-w-4xl rounded-2xl overflow-hidden bg-[#0f1025] border border-slate-800/30 cursor-pointer group shadow-2xl shadow-black/30"
                    onClick={() => setActiveVideo(project.videoId)}>
                    <img src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`} alt={project.videoTitle}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-600/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-blue-900/50 group-hover:scale-110 transition-transform duration-500">
                        <Play size={26} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Extras */}
              {project.extras && project.extras.length > 0 && (
                <div className="mb-14 space-y-4">
                  {project.extras.map((extra, idx) => (
                    <div key={idx} className="p-6 bg-[#0f1025]/50 border border-slate-800/30 rounded-2xl">
                      {extra.type === 'text' && (
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Award size={18} className="text-purple-400" /></div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-2">{extra.title}</h4>
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

              {/* Gallery */}
              {project.gallery.length > 0 && (
                <div className="mb-14">
                  <div className="flex items-center gap-3 mb-6">
                    <Images size={18} className="text-cyan-400" />
                    <h3 className="text-lg font-bold text-slate-300">Gallery</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.gallery.map((img, index) => (
                      <div key={index}
                        className="group relative aspect-video rounded-xl overflow-hidden bg-[#0f1025] border border-slate-800/30 hover:border-blue-500/20 cursor-pointer transition-all duration-500"
                        onClick={() => setLightboxImage(img)}>
                        <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Video */}
              {project.additionalVideoId && (
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-slate-300 mb-6">{project.additionalVideoTitle}</h3>
                  <div className="relative aspect-video max-w-4xl rounded-2xl overflow-hidden bg-[#0f1025] border border-slate-800/30 cursor-pointer group shadow-2xl shadow-black/30"
                    onClick={() => setActiveVideo(project.additionalVideoId)}>
                    <img src={`https://img.youtube.com/vi/${project.additionalVideoId}/hqdefault.jpg`} alt={project.additionalVideoTitle}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-600/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-blue-900/50 group-hover:scale-110 transition-transform duration-500">
                        <Play size={26} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Divider */}
              {projIndex < researchProjects.length - 1 && (
                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} className="absolute -top-14 right-0 p-2.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"><X size={22} /></button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
              <iframe src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} title="Video" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightboxImage(null)} className="absolute -top-14 right-0 p-2.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"><X size={22} /></button>
            <img src={lightboxImage} alt="Gallery" className="w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
          </div>
        </div>
      )}

      <ContactFooter />
    </main>
  );
};

export default ResearchPage;
