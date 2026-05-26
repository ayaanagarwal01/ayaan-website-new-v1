import React from 'react';
import { contactInfo, socialMediaHandles } from '../data/mockData';
import { Mail, Globe, ArrowUp, Youtube, Instagram, Linkedin } from 'lucide-react';

const socialIcons = {
  youtube: Youtube,
  instagram: Instagram,
  linkedin: Linkedin,
};

const ContactFooter = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const featured = ['youtube', 'instagram', 'linkedin']
    .map((id) => socialMediaHandles.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <footer id="contact" className="relative bg-[#060612] pt-24 pb-10 z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 mb-12 max-w-3xl">
          <div className="group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/15 transition-colors duration-300">
                <Mail size={16} className="text-blue-400" />
              </div>
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Email Address</h4>
            </div>
            <a href={`mailto:${contactInfo.email}`} data-testid="footer-email" className="text-white hover:text-blue-400 transition-colors duration-500 text-base font-medium">{contactInfo.email}</a>
          </div>
          <div className="group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/15 transition-colors duration-300">
                <Globe size={16} className="text-purple-400" />
              </div>
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Website</h4>
            </div>
            <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" data-testid="footer-website" className="text-white hover:text-purple-400 transition-colors duration-500 text-base font-medium">{contactInfo.website}</a>
          </div>
        </div>

        {/* Social icons row */}
        <div className="flex items-center gap-3 mb-10" data-testid="footer-social-icons">
          {featured.map((s) => {
            const Icon = socialIcons[s.id];
            if (!Icon) return null;
            return (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`footer-social-${s.id}`}
                aria-label={s.platform}
                title={s.platform}
                className="w-11 h-11 rounded-xl bg-[#0f1025] border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs tracking-wide">&copy; {new Date().getFullYear()} Ayaan Agarwal. All rights reserved.</p>
          <button onClick={scrollToTop} aria-label="Back to top"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
