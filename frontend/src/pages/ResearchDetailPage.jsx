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
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-amber-400 hover:text-amber-300 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-zinc-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-zinc-800 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors duration-300 mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/15 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
            <span className="text-red-400 text-xs font-semibold tracking-wider uppercase">Research</span>
          </div>

          {project.organization && (
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={16} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-wide">{project.organization}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] max-w-4xl tracking-tight">
            {project.title}
          </h1>

          {project.subtitle && project.subtitle !== project.title && (
            <p className="mt-4 text-lg text-gray-400 max-w-3xl">{project.subtitle}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Paper link */}
          {project.paperLabel && (
            <div>
              {project.paperLink ? (
                <a
                  href={project.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-zinc-800 border border-zinc-700/50 rounded-2xl text-white hover:border-amber-500/30 hover:bg-zinc-800/80 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <FileText size={18} className="text-red-400" />
                  </div>
                  <span className="font-semibold">{project.paperLabel}</span>
                  <ExternalLink size={16} className="text-gray-500 ml-2" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-3 px-6 py-4 bg-zinc-800 border border-zinc-700/50 rounded-2xl text-white">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <FileText size={18} className="text-red-400" />
                  </div>
                  <span className="font-semibold">{project.paperLabel}</span>
                </div>
              )}
            </div>
          )}

          {/* Main Video */}
          {project.videoId && (
            <div>
              <h2 className="text-xl font-bold text-white mb-2">{project.videoLabel}</h2>
              <p className="text-gray-500 mb-8 text-sm">{project.videoTitle}</p>
              <div
                className="relative aspect-video max-w-4xl rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/30 cursor-pointer group shadow-2xl shadow-black/30"
                onClick={() => setActiveVideo(project.videoId)}
              >
                <img
                  src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
                  alt={project.videoTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-red-900/50 group-hover:scale-110 transition-transform duration-500">
                    <Play size={26} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Extras (Immerse Essay, etc) */}
          {project.extras && project.extras.length > 0 && (
            <div className="space-y-6">
              {project.extras.map((extra, idx) => (
                <div key={idx} className="p-6 bg-zinc-800/50 border border-zinc-700/30 rounded-2xl">
                  {extra.type === 'text' && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award size={18} className="text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{extra.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{extra.description}</p>
                      </div>
                    </div>
                  )}
                  {extra.type === 'link' && (
                    <div className="flex items-center gap-3">
                      <FileText size={18} className="text-amber-400" />
                      <span className="text-white font-semibold">{extra.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Images size={18} className="text-amber-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Gallery</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="group relative aspect-video rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/30 hover:border-amber-500/20 cursor-pointer transition-all duration-500"
                    onClick={() => setLightboxImage(img)}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Video */}
          {project.additionalVideoId && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">{project.additionalVideoTitle}</h2>
              <div
                className="relative aspect-video max-w-4xl rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/30 cursor-pointer group shadow-2xl shadow-black/30"
                onClick={() => setActiveVideo(project.additionalVideoId)}
              >
                <img
                  src={`https://img.youtube.com/vi/${project.additionalVideoId}/hqdefault.jpg`}
                  alt={project.additionalVideoTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-red-900/50 group-hover:scale-110 transition-transform duration-500">
                    <Play size={26} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-14 right-0 p-2.5 rounded-full bg-zinc-800/80 text-gray-400 hover:text-white hover:bg-zinc-700 transition-all duration-300"
            >
              <X size={22} />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-14 right-0 p-2.5 rounded-full bg-zinc-800/80 text-gray-400 hover:text-white hover:bg-zinc-700 transition-all duration-300"
            >
              <X size={22} />
            </button>
            <img
              src={lightboxImage}
              alt="Gallery"
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}

      <ContactFooter />
    </main>
  );
};

export default ResearchDetailPage;
