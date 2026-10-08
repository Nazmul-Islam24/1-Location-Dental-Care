import React, { useState, useRef } from 'react';
import { Star, CheckCircle, Quote, ExternalLink } from 'lucide-react';
import { patientStories } from '../data/clinicData';
import { Testimonial } from '../types/clinic';

export const PatientStories: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Official 4-color Google G Icon
  const GoogleGIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.98 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );

  const renderReviewCard = (story: Testimonial, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${story.id}`}
      className="w-[330px] sm:w-[380px] shrink-0 bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE5E3] hover:border-[#0F5B5B]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between select-none group"
    >
      <div>
        {/* Top Header: Google Logo + 5 Stars + Date */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1.5 bg-[#FAFAF7] px-2.5 py-1.5 rounded-xl border border-[#DCE5E3]/80">
            {/* Google Logo */}
            <GoogleGIcon className="w-4 h-4" />
            
            {/* 5 Golden Stars */}
            <div className="flex text-amber-400 gap-0.5">
              {[...Array(story.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-amber-400" />
              ))}
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider ml-1">
              Google
            </span>
          </div>

          <span className="text-xs text-[#5F6B6B] font-semibold whitespace-nowrap">
            {story.date}
          </span>
        </div>

        {/* Review Quote */}
        <p className="text-sm sm:text-[15px] text-[#172323] leading-relaxed font-sans-body mb-6 italic line-clamp-5">
          "{story.quote}"
        </p>
      </div>

      {/* Patient Meta Footer */}
      <div className="pt-4 border-t border-[#DCE5E3]/80 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-[#0F5B5B] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
            {story.patientName.charAt(0)}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold text-[#172323] flex items-center gap-1.5 truncate">
              <span>{story.patientName}</span>
              <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                <CheckCircle className="w-2.5 h-2.5" />
                Verified
              </span>
            </div>
            <div className="text-xs text-[#5F6B6B] truncate font-medium mt-0.5">
              {story.location} · <span className="text-[#0F5B5B] font-semibold">{story.treatment}</span>
            </div>
          </div>
        </div>

        <Quote className="w-6 h-6 text-[#0F5B5B]/20 shrink-0 group-hover:text-[#0F5B5B]/50 transition-colors" />
      </div>
    </div>
  );

  return (
    <section id="reviews" className="py-10 md:py-16 bg-[#FAFAF7] border-b border-[#DCE5E3] overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold tracking-wider uppercase">
              <GoogleGIcon className="w-3.5 h-3.5" />
              <span>Verified Google Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
              Real Experiences From Our Patients
            </h2>
            <p className="text-base sm:text-lg text-[#5F6B6B] leading-relaxed">
              Read authentic patient stories from our community. Hover or touch any review to pause the flow and read at your own pace.
            </p>
          </div>

          {/* Google 5-Star Summary Badge */}
          <div className="flex flex-wrap items-center gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-[#DCE5E3] shadow-xs shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#FAFAF7] border border-[#DCE5E3] flex items-center justify-center shrink-0">
              <GoogleGIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-[#172323]">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-[#5F6B6B] font-medium flex items-center gap-1.5 mt-0.5">
                <span>Reviews on Google Maps</span>
                <span className="text-emerald-700 font-bold">· 100% Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SINGLE LINE ANIMATED REVIEWS TRACK (Continuous & Seamless, zero jerk) */}
      <div
        ref={scrollContainerRef}
        className="relative w-full max-w-full overflow-hidden py-3 select-none group/reviews cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onTouchCancel={() => setIsPaused(false)}
      >
        {/* Two identical tracks translating in perfect lockstep for seamless 60fps flow */}
        <div className="flex w-max">
          <div
            className="flex shrink-0 gap-6 pr-6 animate-marquee-smooth"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {patientStories.map((story) => renderReviewCard(story, 't1-a'))}
          </div>
          <div
            className="flex shrink-0 gap-6 pr-6 animate-marquee-smooth"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            aria-hidden="true"
          >
            {patientStories.map((story) => renderReviewCard(story, 't1-b'))}
          </div>
        </div>
      </div>

      {/* Bottom Trust Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <p className="text-xs sm:text-sm text-[#5F6B6B] flex items-center justify-center gap-2 flex-wrap">
          <GoogleGIcon className="w-4 h-4 inline" />
          <span>All testimonials are from verified patients on Google Maps.</span>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0F5B5B] font-bold hover:underline inline-flex items-center gap-1 ml-1"
          >
            <span>Read all reviews on Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </p>
      </div>
    </section>
  );
};
