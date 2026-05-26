import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PageHeader = ({ eyebrow, title, subtitle, accent = 'blue' }) => {
  const accentMap = {
    blue: { pill: 'bg-blue-500/10 border-blue-500/15', text: 'text-blue-400', grad: 'from-blue-400 via-cyan-400 to-blue-400' },
    purple: { pill: 'bg-purple-500/10 border-purple-500/15', text: 'text-purple-400', grad: 'from-purple-400 via-pink-400 to-purple-400' },
    pink: { pill: 'bg-pink-500/10 border-pink-500/15', text: 'text-pink-400', grad: 'from-pink-400 via-rose-400 to-pink-400' },
    emerald: { pill: 'bg-emerald-500/10 border-emerald-500/15', text: 'text-emerald-400', grad: 'from-emerald-400 via-teal-400 to-emerald-400' },
    amber: { pill: 'bg-amber-500/10 border-amber-500/15', text: 'text-amber-400', grad: 'from-amber-400 via-orange-400 to-amber-400' },
    violet: { pill: 'bg-violet-500/10 border-violet-500/15', text: 'text-violet-400', grad: 'from-violet-400 via-purple-400 to-violet-400' },
  };
  const a = accentMap[accent] || accentMap.blue;

  return (
    <section className="relative pt-28 pb-12 bg-[#0c0c20] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" data-testid="page-back-home" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors duration-300 mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 ${a.pill} border rounded-full mb-5`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${a.text.replace('text', 'bg')}`} />
          <span className={`${a.text} text-xs font-semibold tracking-wider uppercase`}>{eyebrow}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${a.grad} animate-gradient-shift`}>{title}</span>
        </h1>
        {subtitle && <p className="mt-4 text-slate-500 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeader;
