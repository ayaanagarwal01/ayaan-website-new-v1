import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { theatreShows } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Play, X, Image } from 'lucide-react';

const TheatreDetailPage = () => {
  const { id } = useParams();
  const show = theatreShows.find((s) => s.id === id);
  const [activeVideo, setActiveVideo] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  if (!show) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Show Not Found</h1>
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

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-sm font-medium">Theatre</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl">
            {show.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery */}
          {show.gallery.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Image size={24} className="text-amber-400" />
                <h2 className="text-2xl font-bold text-white">Gallery</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {show.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/50 hover:border-amber-500/30 cursor-pointer transition-all duration-300"
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

          {/* Videos */}
          {show.videos.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">Performances</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {show.videos.map((video) => (
                  <div
                    key={video.id}
                    className="group relative aspect-video rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/50 hover:border-amber-500/30 cursor-pointer transition-all duration-300"
                    onClick={() => setActiveVideo(video)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-300">
                        <Play size={28} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-white font-semibold mt-4">{activeVideo.title}</p>
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

export default TheatreDetailPage;
