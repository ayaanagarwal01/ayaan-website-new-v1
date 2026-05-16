import React from 'react';
import { Link } from 'react-router-dom';
import { socialMediaHandles } from '../data/mockData';
import { Users, MessageCircle, Youtube, Instagram, Linkedin, Twitter, ArrowRight, ExternalLink } from 'lucide-react';

const platformIcons = {
  whatsapp: MessageCircle,
  youtube: Youtube,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
};

const platformColors = {
  whatsapp: 'from-green-500/20 to-green-600/10 border-green-500/20 hover:border-green-500/40',
  youtube: 'from-red-500/10 to-red-600/5 border-red-500/15 hover:border-red-500/30',
  instagram: 'from-pink-500/10 to-purple-600/5 border-pink-500/15 hover:border-pink-500/30',
  linkedin: 'from-blue-500/10 to-blue-600/5 border-blue-500/15 hover:border-blue-500/30',
  twitter: 'from-sky-500/10 to-sky-600/5 border-sky-500/15 hover:border-sky-500/30',
};

const iconColors = {
  whatsapp: 'text-green-400',
  youtube: 'text-red-400',
  instagram: 'text-pink-400',
  linkedin: 'text-blue-400',
  twitter: 'text-sky-400',
};

const CommunityQuickLinks = () => {
  return (
    <section id="community" className="py-28 bg-zinc-800 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Users size={18} className="text-green-400" />
              </div>
              <span className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">Connect</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">My Community</h2>
          </div>
          <Link
            to="/community"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-[0.1em] uppercase text-gray-400 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-full transition-all duration-500 hover:-translate-y-0.5"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialMediaHandles.map((social) => {
            const IconComp = platformIcons[social.id] || Users;
            const colorClass = platformColors[social.id] || 'from-zinc-500/10 to-zinc-600/5 border-zinc-500/15 hover:border-zinc-500/30';
            const iconColor = iconColors[social.id] || 'text-gray-400';

            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br ${colorClass} border transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20`}
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <IconComp size={20} className={iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white truncate">{social.platform}</h3>
                  <p className="text-xs text-gray-500 truncate">{social.handle}</p>
                </div>
                {social.followers && (
                  <span className="text-xs font-semibold text-gray-500 flex-shrink-0">{social.followers}</span>
                )}
                <ExternalLink size={14} className="text-gray-600 group-hover:text-gray-400 transition-colors flex-shrink-0" />
              </a>
            );
          })}
        </div>

        {/* Mobile view all */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-[0.1em] uppercase text-gray-400 hover:text-white border border-zinc-700 rounded-full transition-all duration-300"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityQuickLinks;
