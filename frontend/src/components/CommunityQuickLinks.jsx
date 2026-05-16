import React from 'react';
import { Link } from 'react-router-dom';
import { socialMediaHandles } from '../data/mockData';
import { Users, MessageCircle, Youtube, Instagram, Linkedin, Twitter, Facebook, Ghost, Camera, Bookmark, PenLine, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';

const platformIcons = {
  whatsapp: MessageCircle,
  youtube: Youtube,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  pinterest: Bookmark,
  medium: PenLine,
  quora: HelpCircle,
  threads: Ghost,
  snapchat: Camera,
};

const platformColors = {
  whatsapp: 'from-green-500/15 to-green-600/5 border-green-500/15 hover:border-green-500/40',
  youtube: 'from-red-500/10 to-red-600/5 border-red-500/10 hover:border-red-500/30',
  instagram: 'from-pink-500/10 to-purple-600/5 border-pink-500/10 hover:border-pink-500/30',
  linkedin: 'from-blue-500/10 to-blue-600/5 border-blue-500/10 hover:border-blue-500/30',
  twitter: 'from-sky-500/10 to-sky-600/5 border-sky-500/10 hover:border-sky-500/30',
  facebook: 'from-blue-600/10 to-blue-700/5 border-blue-600/10 hover:border-blue-600/30',
  pinterest: 'from-red-600/10 to-red-700/5 border-red-600/10 hover:border-red-600/30',
  medium: 'from-slate-400/10 to-slate-500/5 border-slate-400/10 hover:border-slate-400/30',
  quora: 'from-red-500/10 to-orange-600/5 border-red-500/10 hover:border-red-500/30',
  threads: 'from-slate-400/10 to-slate-500/5 border-slate-400/10 hover:border-slate-400/30',
  snapchat: 'from-yellow-500/10 to-yellow-600/5 border-yellow-500/10 hover:border-yellow-500/30',
};

const iconColors = {
  whatsapp: 'text-green-400',
  youtube: 'text-red-400',
  instagram: 'text-pink-400',
  linkedin: 'text-blue-400',
  twitter: 'text-sky-400',
  facebook: 'text-blue-400',
  pinterest: 'text-red-400',
  medium: 'text-slate-300',
  quora: 'text-orange-400',
  threads: 'text-slate-300',
  snapchat: 'text-yellow-400',
};

const CommunityQuickLinks = () => {
  const displayHandles = socialMediaHandles.filter(s => !s.isHighlight).slice(0, 6);

  return (
    <section id="community" className="py-28 bg-[#0c0c20] relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-cyan-500/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Users size={18} className="text-cyan-400" />
              </div>
              <span className="text-xs font-semibold text-slate-500 tracking-[0.2em] uppercase">Connect</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">My Community</h2>
          </div>
          <Link to="/community"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-[0.1em] uppercase text-slate-400 hover:text-white border border-slate-700 hover:border-blue-500/50 rounded-full transition-all duration-500 hover:-translate-y-0.5">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayHandles.map((social) => {
            const IconComp = platformIcons[social.id] || Users;
            const colorClass = platformColors[social.id] || 'from-slate-500/10 to-slate-600/5 border-slate-500/10';
            const iconColor = iconColors[social.id] || 'text-slate-400';

            return (
              <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer"
                className={`group relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br ${colorClass} border transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 shimmer-hover`}>
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <IconComp size={20} className={iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white truncate">{social.platform}</h3>
                  <p className="text-xs text-slate-500 truncate">{social.handle}</p>
                </div>
                {social.followers && <span className="text-xs font-semibold text-slate-500 flex-shrink-0">{social.followers}</span>}
                <ExternalLink size={14} className="text-slate-700 group-hover:text-slate-400 transition-colors flex-shrink-0" />
              </a>
            );
          })}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link to="/community" className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-[0.1em] uppercase text-slate-400 border border-slate-700 rounded-full transition-all duration-300">
            View All <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityQuickLinks;
