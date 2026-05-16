import React from 'react';
import { Link } from 'react-router-dom';
import { socialMediaHandles } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Users, MessageCircle, Youtube, Instagram, Linkedin, Twitter, Mail, ExternalLink, Star, Bell } from 'lucide-react';

const platformIcons = {
  whatsapp: MessageCircle,
  youtube: Youtube,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

const iconColors = {
  whatsapp: 'text-green-400',
  youtube: 'text-red-400',
  instagram: 'text-pink-400',
  linkedin: 'text-blue-400',
  twitter: 'text-sky-400',
  email: 'text-amber-400',
};

const bgColors = {
  whatsapp: 'bg-green-500/10',
  youtube: 'bg-red-500/10',
  instagram: 'bg-pink-500/10',
  linkedin: 'bg-blue-500/10',
  twitter: 'bg-sky-500/10',
  email: 'bg-amber-500/10',
};

const CommunityPage = () => {
  const whatsappChannel = socialMediaHandles.find((s) => s.isHighlight);
  const otherPlatforms = socialMediaHandles.filter((s) => !s.isHighlight);

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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors duration-300 mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/15 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs font-semibold tracking-wider uppercase">Connect</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-emerald-500">
              Community
            </span>
          </h1>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl">
            Connect with me across platforms. Follow along for updates on research, performances, service, and more.
          </p>
        </div>
      </section>

      {/* WhatsApp Channel - The Highlight */}
      {whatsappChannel && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <Star size={18} className="text-green-400" />
              <h2 className="text-sm font-bold text-green-400 tracking-[0.2em] uppercase">The Highlight</h2>
            </div>

            <a
              href={whatsappChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-3xl overflow-hidden border border-green-500/20 hover:border-green-500/40 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_25px_80px_-20px_rgba(34,197,94,0.15)]"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.08] via-zinc-900 to-emerald-600/[0.05]" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-green-400/[0.04] rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/[0.04] rounded-full blur-[60px]" />

              <div className="relative p-8 sm:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-3xl bg-green-500/15 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                      <MessageCircle size={44} className="text-green-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {whatsappChannel.platform}
                      </h3>
                      {whatsappChannel.followers && (
                        <span className="px-3 py-1 text-xs font-bold text-green-400 bg-green-500/10 rounded-full">
                          {whatsappChannel.followers} members
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed max-w-2xl mb-8">
                      {whatsappChannel.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-500 group-hover:shadow-[0_8px_40px_-8px_rgba(34,197,94,0.4)]">
                      <Bell size={14} />
                      Join the Channel
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* Other Platforms */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-10 tracking-tight">All Platforms</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherPlatforms.map((social) => {
              const IconComp = platformIcons[social.id] || Users;
              const iconColor = iconColors[social.id] || 'text-gray-400';
              const bgColor = bgColors[social.id] || 'bg-gray-500/10';

              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl bg-zinc-800/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500`}>
                      <IconComp size={22} className={iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-500">{social.platform}</h3>
                      <p className="text-sm text-gray-500">{social.handle}</p>
                    </div>
                    <ExternalLink size={16} className="text-gray-700 group-hover:text-gray-400 transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {social.description}
                  </p>
                  {social.followers && (
                    <div className="mt-4 pt-4 border-t border-zinc-800">
                      <span className="text-xs font-semibold text-gray-500">{social.followers} followers</span>
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
};

export default CommunityPage;
