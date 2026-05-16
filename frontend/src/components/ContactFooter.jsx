import React from 'react';
import { contactInfo } from '../data/mockData';
import { Mail, Globe, ArrowUp } from 'lucide-react';

const ContactFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-zinc-950 pt-24 pb-10">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 mb-20 max-w-3xl">
          {/* Email */}
          <div className="group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/15 transition-colors duration-300">
                <Mail size={16} className="text-red-400" />
              </div>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Email Address</h4>
            </div>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-white hover:text-amber-400 transition-colors duration-500 text-base font-medium"
            >
              {contactInfo.email}
            </a>
          </div>

          {/* Website */}
          <div className="group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/15 transition-colors duration-300">
                <Globe size={16} className="text-red-400" />
              </div>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Website URL</h4>
            </div>
            <a
              href={`https://${contactInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors duration-500 text-base font-medium"
            >
              {contactInfo.website}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Ayaan Portfolio. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-gray-500 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-0.5"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
