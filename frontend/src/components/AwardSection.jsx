import React from 'react';
import { Award } from 'lucide-react';

const AwardSection = () => {
  return (
    <section
      id="award"
      data-testid="award-section"
      className="relative py-20 bg-[#0c0c20] overflow-hidden z-10"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-amber-500/[0.05] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-[0_25px_70px_-20px_rgba(245,158,11,0.35)]">
              <img
                src="/images/ayaan-award.jpg"
                alt="Ayaan Agarwal receiving the National Humanitarian Excellence Award 2026"
                className="w-full h-auto block transition-transform duration-[1500ms] group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Caption */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <Award size={14} className="text-amber-300" />
              <span className="text-amber-300 text-xs font-bold tracking-[0.18em] uppercase">Recognition</span>
            </div>

            <h2
              data-testid="award-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight"
            >
              Awarded the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 animate-gradient-shift">
                National Humanitarian Excellence Award 2026
              </span>
            </h2>

            <p
              data-testid="award-subtitle"
              className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg"
            >
              Awarded by the <span className="text-white font-semibold">ICAN Foundation</span> under the category of
              <br />
              <span className="text-white font-semibold">&ldquo;Digital Transformation In Social Work&rdquo;</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
