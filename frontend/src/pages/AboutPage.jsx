import React from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Sparkles } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="bg-[#0a0a1a] min-h-screen relative z-10">
      <section className="relative pt-28 pb-20 bg-[#0c0c20] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors duration-300 mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/15 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">About</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-shift">Ayaan</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Who I Am</h2>
              <p className="text-slate-400 text-base leading-[1.8] mb-8">{aboutData.bio}</p>
              <p className="text-slate-400 text-base leading-[1.8]">From conducting computational biology research to performing on stage in musical theatre productions, I thrive at the intersection of science and the arts. My portfolio showcases the breadth of my experiences and my commitment to making a positive impact through diverse avenues.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">My Interests</h2>
              <div className="grid grid-cols-2 gap-3">
                {aboutData.interests.map((interest, index) => (
                  <div key={index} className="group flex items-center gap-3 p-4 bg-[#0f1025]/60 rounded-xl border border-slate-800/50 hover:border-blue-500/20 transition-all duration-500 hover:-translate-y-0.5 shimmer-hover">
                    <Sparkles size={14} className="text-blue-400/70 flex-shrink-0" />
                    <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors duration-500">{interest}</span>
                  </div>
                ))}
              </div>
              <div className="mt-14 p-8 bg-gradient-to-br from-blue-500/[0.08] to-purple-500/[0.05] rounded-2xl border border-blue-500/15">
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Get in Touch</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">I&rsquo;m always open to discussing new projects, creative ideas, or opportunities.</p>
                <a href="mailto:ayaanagarwal209@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:shadow-[0_8px_40px_-8px_rgba(59,130,246,0.5)]">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </main>
  );
};

export default AboutPage;
