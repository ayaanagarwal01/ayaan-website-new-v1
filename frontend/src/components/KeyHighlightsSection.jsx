import React from 'react';
import { Sparkles, Microscope, Drama, Trophy, HeartHandshake, Newspaper, GraduationCap, ArrowUpRight } from 'lucide-react';

const stats = [
  { value: '3', label: 'Research Projects', sublabel: 'incl. TIFR collaboration', icon: Microscope, color: 'blue' },
  { value: '2', label: 'Musical Productions', sublabel: 'on stage & on screen', icon: Drama, color: 'purple' },
  { value: '3+', label: 'Debate Titles', sublabel: 'national & international', icon: Trophy, color: 'amber' },
  { value: '3', label: 'Service Initiatives', sublabel: 'YLAC · Service Yatra · ApniShala', icon: HeartHandshake, color: 'green' },
];

const accentByColor = {
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-300', border: 'border-blue-500/20', ring: 'group-hover:border-blue-400/40', glow: 'group-hover:shadow-[0_15px_45px_-10px_rgba(59,130,246,0.25)]' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-300', border: 'border-purple-500/20', ring: 'group-hover:border-purple-400/40', glow: 'group-hover:shadow-[0_15px_45px_-10px_rgba(168,85,247,0.25)]' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-300', border: 'border-amber-500/20', ring: 'group-hover:border-amber-400/40', glow: 'group-hover:shadow-[0_15px_45px_-10px_rgba(245,158,11,0.25)]' },
  green: { bg: 'bg-green-500/10', text: 'text-green-300', border: 'border-green-500/20', ring: 'group-hover:border-green-400/40', glow: 'group-hover:shadow-[0_15px_45px_-10px_rgba(34,197,94,0.25)]' },
};

const milestones = [
  {
    icon: Trophy,
    title: 'World Schools Debating League — Winner',
    description: 'Plus winner of the Welhams Boys School Oliphant Memorial Debate and selected for ISDS National Camp (2023 & 2024).',
    accent: 'amber',
  },
  {
    icon: GraduationCap,
    title: 'Hebbian STEM Excellence Fellowship — Spotlight',
    description: 'Featured alongside an MIT/Harvard peer for research exploring RNA therapeutics in neurodegenerative diseases.',
    accent: 'cyan',
  },
  {
    icon: Microscope,
    title: 'Research at Tata Institute of Fundamental Research',
    description: 'Unified RNA-seq meta-analysis uncovering conserved metabolic pathways behind mycobacterial tolerance to immune and antimicrobial stresses.',
    accent: 'blue',
  },
  {
    icon: Drama,
    title: 'Lead in two original musical productions',
    description: 'Performed across 8+ on-stage numbers including "If You Were Me" and a full staging of "Do You Hear the People Sing?".',
    accent: 'purple',
  },
  {
    icon: Newspaper,
    title: 'Immerse Essay Competition — 10% Scholarship',
    description: 'Recognised for an essay inspired by his RNA therapeutics research project.',
    accent: 'pink',
  },
  {
    icon: HeartHandshake,
    title: 'Community service across three programmes',
    description: 'Youth Leadership & Civic Engagement (YLAC), Service Yatra in rural India, and an education-focused internship with ApniShala.',
    accent: 'green',
  },
];

const milestoneAccent = {
  amber: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
  cyan: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
  blue: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
  purple: 'text-purple-300 bg-purple-500/10 border-purple-500/20',
  pink: 'text-pink-300 bg-pink-500/10 border-pink-500/20',
  green: 'text-green-300 bg-green-500/10 border-green-500/20',
};

const KeyHighlightsSection = () => {
  return (
    <section id="highlights" data-testid="key-highlights-section" className="relative py-28 bg-[#0a0a1a] z-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
      <div className="absolute -top-32 right-10 w-[500px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-purple-600/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end gap-4 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Sparkles size={18} className="text-blue-400" />
              </div>
              <span className="text-xs font-semibold text-slate-500 tracking-[0.2em] uppercase">Key Highlights</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">A snapshot of the journey</h2>
            <p className="mt-4 text-slate-400 max-w-2xl text-base leading-relaxed">
              From a research bench at TIFR to a musical theatre stage — a quick look at the milestones that
              define my work across science, performance, debate, and service.
            </p>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-blue-500/15 to-transparent mb-3" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14" data-testid="highlights-stats-grid">
          {stats.map((s) => {
            const Icon = s.icon;
            const a = accentByColor[s.color];
            return (
              <div key={s.label}
                data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`group relative p-6 rounded-2xl bg-[#0f1025]/80 border ${a.border} ${a.ring} ${a.glow} transition-all duration-500 hover:-translate-y-1 overflow-hidden`}>
                <div className={`absolute -top-6 -right-6 w-24 h-24 ${a.bg} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`relative w-10 h-10 rounded-xl ${a.bg} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={a.text} />
                </div>
                <div className={`relative text-4xl sm:text-5xl font-black tracking-tight ${a.text} mb-1`}>{s.value}</div>
                <div className="relative text-sm font-bold text-white">{s.label}</div>
                <div className="relative text-xs text-slate-500 mt-1">{s.sublabel}</div>
              </div>
            );
          })}
        </div>

        {/* Milestones list */}
        <div className="grid md:grid-cols-2 gap-4" data-testid="highlights-milestones">
          {milestones.map((m) => {
            const Icon = m.icon;
            const accent = milestoneAccent[m.accent];
            return (
              <div key={m.title}
                className="group relative p-6 rounded-2xl bg-[#0f1025]/60 border border-slate-800/50 hover:border-slate-700 transition-all duration-500 hover:-translate-y-0.5 shimmer-hover">
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl ${accent} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white leading-snug pr-6">{m.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">{m.description}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-700 group-hover:text-slate-400 transition-colors flex-shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* And much more */}
        <div className="mt-10 flex items-center justify-center gap-4" data-testid="highlights-much-more">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-blue-500/30" />
          <p className="text-sm sm:text-base text-slate-400 italic tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-bold">...and much more</span>
            <span className="ml-2">— explore the site to see the full story.</span>
          </p>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-pink-500/30" />
        </div>
      </div>
    </section>
  );
};

export default KeyHighlightsSection;
