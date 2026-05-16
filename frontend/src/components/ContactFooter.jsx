import React from 'react';
import { contactInfo } from '../data/mockData';
import { Mail, MapPin, Globe, ArrowUp } from 'lucide-react';

const ContactFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-zinc-950 pt-20 pb-8">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Email */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors duration-300">
                <Mail size={18} className="text-red-500" />
              </div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email Address</h4>
            </div>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-white hover:text-amber-400 transition-colors duration-300 text-lg"
            >
              {contactInfo.email}
            </a>
          </div>

          {/* Address */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                <MapPin size={18} className="text-amber-500" />
              </div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Street Address</h4>
            </div>
            <p className="text-white text-lg">{contactInfo.address}</p>
          </div>

          {/* Website */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors duration-300">
                <Globe size={18} className="text-red-500" />
              </div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Website URL</h4>
            </div>
            <a
              href={`https://${contactInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors duration-300 text-lg"
            >
              {contactInfo.website}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ayaan Portfolio. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-zinc-800 border border-zinc-700 text-gray-400 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
