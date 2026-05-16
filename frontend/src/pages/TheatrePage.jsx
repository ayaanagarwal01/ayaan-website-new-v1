import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theatreShows } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Play, X, Images, Drama } from 'lucide-react';

const TheatrePage = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <main className="bg-[#0a0a1a] min-h-screen relative z-10">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-[#0c0c20] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors duration-300 mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/15 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-400 text-xs font-semibold tracking-wider uppercase">Performances</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-shift">Theatre</span>
          </h1>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl">All my musical theatre productions, performances, and behind-the-scenes moments.</p>
        </div>
      </section>

      {/* All Shows */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {theatreShows.map((show, showIndex) => (
            <div key={show.id}>
              {/* Show Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Drama size={20} className="text-purple-400" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{show.title}</h2>
                  <p className="text-sm text-slate-500 mt-1">{show.videos.length} performance{show.videos.length !== 1 ? 's' : ''} &middot; {show.gallery.length} photos</p>
                </div>
              </div>

              {/* Performances */}
              {show.videos.length > 0 && (
                <div className="mb-14">
                  <h3 className="text-lg font-bold text-slate-300 mb-6">Performances</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {show.videos.map((video) => (
                      <div key={video.id}
                        className="group relative aspect-video rounded-2xl overflow-hidden bg-[#0f1025] border border-slate-800/30 hover:border-purple-500/30 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(168,85,247,0.15)] card-glow gradient-border"
                        onClick={() => setActiveVideo(video)}>
                        <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-purple-500/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-purple-900/40 group-hover:scale-125 transition-transform duration-500">
                            <Play size={22} className="text-white ml-0.5" fill="white" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <h4 className="text-white font-semibold text-sm drop-shadow-lg">{video.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {show.gallery.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Images size={18} className="text-cyan-400" />
                    <h3 className="text-lg font-bold text-slate-300">Gallery</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {show.gallery.map((img, index) => (
                      <div key={index}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0f1025] border border-slate-800/30 hover:border-purple-500/20 cursor-pointer transition-all duration-500"
                        onClick={() => setLightboxImage(img)}>
                        <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Divider between shows */}
              {showIndex < theatreShows.length - 1 && (
                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" />
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
              <iframe src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`} title={activeVideo.title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="text-center text-white font-semibold mt-5 text-lg">{activeVideo.title}</p>
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

export default TheatrePage;
