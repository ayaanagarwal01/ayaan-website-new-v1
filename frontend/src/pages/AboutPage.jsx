import React from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Sparkles, MapPin, FlaskConical, Music2, Drama, MessageSquare, Megaphone } from 'lucide-react';

const sectionIcons = {
  Research: FlaskConical,
  Music: Music2,
  Theatre: Drama,
  Debate: MessageSquare,
  'Science Communication': Megaphone,
};

const sectionAccent = {
  Research: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
  Music: 'text-pink-300 bg-pink-500/10 border-pink-500/20',
  Theatre: 'text-purple-300 bg-purple-500/10 border-purple-500/20',
  Debate: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
  'Science Communication': 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
};

const AboutPage = () => {
  return (
    <main className="bg-[#0a0a1a] min-h-screen relative z-10">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#0c0c20] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" data-testid="about-back-home" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors duration-300 mb-8 group">
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

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <div className="inline-flex items-center gap-2 text-slate-400">
              <MapPin size={14} className="text-blue-400" />
              <span>{aboutData.location}</span>
            </div>
            <span className="text-slate-700">·</span>
            <span className="text-slate-500">{aboutData.tagline}</span>
          </div>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p data-testid="about-intro" className="text-slate-300 text-lg sm:text-xl leading-[1.8] tracking-tight">
            {aboutData.intro}
          </p>
        </div>
      </section>

      {/* Themed sections */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" data-testid="about-paragraphs">
          {aboutData.paragraphs.map((p) => {
            const Icon = sectionIcons[p.heading] || Sparkles;
            const accent = sectionAccent[p.heading] || sectionAccent.Research;
            return (
              <div key={p.heading}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#0f1025]/60 border border-slate-800/50 hover:border-slate-700 transition-all duration-500 hover:-translate-y-0.5 shimmer-hover">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className={`w-11 h-11 rounded-xl ${accent} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">{p.heading}</h3>
                    <p className="text-slate-400 text-base leading-[1.8]">{p.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interests + Contact CTA */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Interests</h2>
            <div className="grid grid-cols-2 gap-3">
              {aboutData.interests.map((interest, index) => (
                <div key={index} className="group flex items-center gap-3 p-4 bg-[#0f1025]/60 rounded-xl border border-slate-800/50 hover:border-blue-500/20 transition-all duration-500 hover:-translate-y-0.5 shimmer-hover">
                  <Sparkles size={14} className="text-blue-400/70 flex-shrink-0" />
                  <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors duration-500">{interest}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-500/[0.08] to-purple-500/[0.05] rounded-2xl border border-blue-500/15">
            <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Get in Touch</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">I&rsquo;m always open to discussing new projects, creative ideas, or opportunities.</p>
            <a href="mailto:ayaanagarwal209@gmail.com" data-testid="about-contact-cta" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:shadow-[0_8px_40px_-8px_rgba(59,130,246,0.5)]">Contact Me</a>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
};

export default AboutPage;
