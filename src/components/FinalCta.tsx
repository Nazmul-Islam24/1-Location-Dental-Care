import React from 'react';
import { Calendar, Phone, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 md:py-28 bg-[#0F5B5B] text-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#DDF3EE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F4B39A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#DDF3EE] text-xs font-bold uppercase tracking-wider border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-[#F4B39A]" />
          <span>Comfort-First Modern Dentistry</span>
        </div>

        {/* Blueprint Section 24 Copy */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-serif-display leading-tight">
          Ready to Feel Better About Your Smile?
        </h2>

        <p className="text-base sm:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed font-sans-body">
          Book your visit and take the next step toward comfortable, personalized dental care. No judgment, no anxiety, and transparent pricing.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#FAFAF7] hover:bg-white text-[#0F5B5B] px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 active:scale-95"
          >
            <Calendar className="w-5 h-5 text-[#0F5B5B]" />
            <span>Book Your Appointment</span>
          </button>

          <a
            href="tel:+12125550198"
            className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white px-7 py-4 rounded-2xl font-semibold text-base transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 text-[#F4B39A]" />
            <span>Call (212) 555-0198</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-teal-200">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#F4B39A]" />
            Direct Insurance Claims
          </span>
          <span>·</span>
          <span>Flexible 0% APR Financing</span>
          <span>·</span>
          <span>New Patients Always Welcome</span>
        </div>
      </div>
    </section>
  );
};
