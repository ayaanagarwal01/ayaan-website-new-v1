import React from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Sparkles } from 'lucide-react';

const AboutPage = () => {
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

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
            <span className="text-amber-400 text-sm font-medium">About</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
              Ayaan
            </span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Bio */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Who I Am</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {aboutData.bio}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                From conducting computational biology research to performing on stage in musical
                theatre productions, I thrive at the intersection of science and the arts. My
                portfolio showcases the breadth of my experiences and my commitment to making a
                positive impact through diverse avenues.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">My Interests</h2>
              <div className="grid grid-cols-2 gap-4">
                {aboutData.interests.map((interest, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-4 bg-zinc-800 rounded-xl border border-zinc-700/50 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Sparkles size={16} className="text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-red-700/20 to-red-900/20 rounded-2xl border border-red-700/20">
                <h3 className="text-lg font-bold text-white mb-3">Get in Touch</h3>
                <p className="text-gray-400 mb-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities.
                </p>
                <a
                  href="mailto:ayaanagarwal209@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25"
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
