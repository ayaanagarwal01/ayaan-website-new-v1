import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { theatreShows } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Play, X, Images } from 'lucide-react';

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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors duration-300 mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/15 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">Theatre</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] max-w-4xl tracking-tight">
            {show.title}
          </h1>
          <p className="mt-4 text-gray-500 text-sm">
            {show.videos.length} performance{show.videos.length !== 1 ? 's' : ''} &middot; {show.gallery.length} photos
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Performances / Videos */}
          {show.videos.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Performances</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {show.videos.map((video) => (
                  <div
                    key={video.id}
                    className="group relative aspect-video rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/30 hover:border-zinc-600/50 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)]"
                    onClick={() => setActiveVideo(video)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-red-900/40 group-hover:scale-110 transition-transform duration-500">
                        <Play size={22} className="text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-semibold text-sm drop-shadow-lg">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {show.gallery.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Images size={18} className="text-amber-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Gallery</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {show.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/30 hover:border-amber-500/20 cursor-pointer transition-all duration-500"
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
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-white font-semibold mt-5 text-lg">{activeVideo.title}</p>
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

export default TheatreDetailPage;
