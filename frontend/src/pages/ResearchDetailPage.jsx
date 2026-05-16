import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { researchProjects } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Play, X, ExternalLink, Image } from 'lucide-react';

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
      <section className="relative pt-28 pb-16 bg-zinc-800">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-sm font-medium">Research</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Video */}
          {project.videoId && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-white">{project.videoLabel}</h2>
              </div>
              <p className="text-gray-400 mb-6">{project.videoTitle}</p>
              <div
                className="relative aspect-video max-w-3xl rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/50 cursor-pointer group"
                onClick={() => setActiveVideo(project.videoId)}
              >
                <img
                  src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
                  alt={project.videoTitle}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-300">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Image size={24} className="text-amber-400" />
                <h2 className="text-2xl font-bold text-white">Gallery</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="group relative aspect-video rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/50 hover:border-amber-500/30 cursor-pointer transition-all duration-300"
                    onClick={() => setLightboxImage(img)}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Video */}
          {project.additionalVideoId && (
            <div className="mb-16">
              <h2 className="text-xl font-bold text-white mb-6">{project.additionalVideoTitle}</h2>
              <div
                className="relative aspect-video max-w-3xl rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/50 cursor-pointer group"
                onClick={() => setActiveVideo(project.additionalVideoId)}
              >
                <img
                  src={`https://img.youtube.com/vi/${project.additionalVideoId}/hqdefault.jpg`}
                  alt={project.additionalVideoTitle}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-300">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Research Paper Link */}
          <a
            href="https://www.ayaanportfolio.com/meeting-details.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-red-600/10 border border-red-600/20 rounded-xl text-red-400 hover:bg-red-600/20 hover:text-red-300 transition-all duration-300"
          >
            <ExternalLink size={18} />
            <span className="font-semibold">View Research Paper</span>
          </a>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-900">
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
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
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
