import React from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Sparkles } from 'lucide-react';

const AboutPage = () => {
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
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">About</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-red-500">
              Ayaan
            </span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Bio */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Who I Am</h2>
              <p className="text-gray-400 text-base leading-[1.8] mb-8">
                {aboutData.bio}
              </p>
              <p className="text-gray-400 text-base leading-[1.8]">
                From conducting computational biology research to performing on stage in musical
                theatre productions, I thrive at the intersection of science and the arts. My
                portfolio showcases the breadth of my experiences and my commitment to making a
                positive impact through diverse avenues.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">My Interests</h2>
              <div className="grid grid-cols-2 gap-3">
                {aboutData.interests.map((interest, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-4 bg-zinc-800/50 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-0.5"
                  >
                    <Sparkles size={14} className="text-amber-400/70 flex-shrink-0" />
                    <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-500">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-14 p-8 bg-zinc-800/30 rounded-2xl border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Get in Touch</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  I&rsquo;m always open to discussing new projects, creative ideas, or opportunities.
                </p>
                <a
                  href="mailto:ayaanagarwal209@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:shadow-[0_8px_40px_-8px_rgba(220,38,38,0.4)]"
                >
                  Contact Me
                </a>
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
