import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Phone, CheckCircle2, Star, ShieldCheck, Heart, Award, Users, Stethoscope } from 'lucide-react';
import { ClinicPreset } from '../types/clinic';
import { presetConfig } from '../data/clinicData';
import homeHero from '../assets/images/home-hero.avif'




interface HeroProps {
  currentPreset?: ClinicPreset;
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentPreset = 'family', onOpenBooking, onExploreTreatments }) => {
  const preset = presetConfig[currentPreset];

  // Animated counters for the 4 stats
  const [hasAnimated, setHasAnimated] = useState(false);
  const [stat1, setStat1] = useState(0);
  const [stat2, setStat2] = useState(0);
  const [stat3, setStat3] = useState(0);
  const [stat4, setStat4] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2800; // ms - smoothly builds then slowly eases the final digits into place
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(1, elapsed / duration);
            
            // Two-stage easing: smooth steady climb to ~82%, then a prolonged, gentle deceleration crawl
            // so the final digits tick upwards slowly and settle naturally into the exact numbers
            let easeProgress = 0;
            if (progress < 0.7) {
              // Stage 1: smooth buildup (0 to 0.70)
              easeProgress = 0.82 * Math.sin((progress / 0.7) * (Math.PI / 2));
            } else {
              // Stage 2: slow, gentle deceleration into final targets (0.70 to 1.0)
              const stage2Progress = (progress - 0.7) / 0.3;
              easeProgress = 0.82 + 0.18 * Math.sin(stage2Progress * (Math.PI / 2));
            }

            setStat1(Math.round(easeProgress * 15));
            setStat2(Math.round(easeProgress * 10000));
            setStat3(Number((easeProgress * 4.9).toFixed(1)));
            setStat4(Math.round(easeProgress * 700));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setStat1(15);
              setStat2(10000);
              setStat3(4.9);
              setStat4(700);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="relative overflow-hidden pt-0 pb-10 md:pb-12 bg-[#FAFAF7]">
      {/* Background Image ONLY for small mobile screens (< lg) */}
      <div className="lg:hidden absolute top-0 inset-x-0 h-[440px] sm:h-[480px] overflow-hidden z-0 pointer-events-none">
        <img
          src={homeHero}
          alt="Modern dental consultation in calming clinic"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Soft top vignette so photo is vivid and clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 via-30% to-transparent pointer-events-none" />

        {/* Floating Google Rating Pill on Mobile over photo */}
        <div className="absolute top-4 left-4 sm:left-6 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-white/80 flex items-center gap-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
            ))}
          </div>
          <span className="text-[11px] font-bold text-[#172323]">4.9 Google Rating</span>
        </div>
      </div>

      {/* Subtle organic background tint for desktop screens */}
      <div className="hidden lg:block absolute top-0 right-0 -z-10 w-96 h-96 bg-[#DDF3EE]/60 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="hidden lg:block absolute bottom-0 left-10 -z-10 w-80 h-80 bg-[#F4B39A]/15 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: On mobile, begins at the vertical midpoint of the background image */}
          <div className="lg:col-span-7 pt-44 sm:pt-48 lg:pt-8">
            {/* 
              On mobile: Background starts completely transparent (0 opacity) at top, 
              and becomes progressively solid white/cream as it flows downwards.
            */}
            <div className="bg-gradient-to-b from-transparent via-[#FAFAF7]/70 via-20% via-[#FAFAF7]/95 via-40% to-[#FAFAF7] lg:bg-none p-4 sm:p-6 lg:p-0 space-y-5">
              {/* Eyebrow */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#0F5B5B] text-white shadow-md text-xs font-bold tracking-wider uppercase">
                <span>{preset.heroEyebrow}</span>
              </div>

              {/* H1 Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold sm:font-bold tracking-tight text-[#111C1C] leading-[1.15] font-serif-display drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] lg:drop-shadow-none">
                {preset.heroH1}
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg lg:text-xl text-[#1F2F2F] lg:text-[#5F6B6B] font-medium lg:font-normal leading-relaxed max-w-2xl font-sans-body">
                {preset.heroSupporting}
              </p>

              {/* Action Buttons (Dual CTA) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#0F5B5B] hover:bg-[#0c4848] text-white px-7 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-[0.98] cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-[#DDF3EE]" />
                  <span>Book an Appointment</span>
                </button>

                <a
                  href="tel:+12125550198"
                  className="bg-white/95 hover:bg-white border border-[#0F5B5B]/30 text-[#0F5B5B] px-6 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xs transition-colors flex items-center justify-center gap-2 hover:border-[#0F5B5B]"
                >
                  <Phone className="w-4.5 h-4.5 text-[#0F5B5B]" />
                  <span>Call Clinic (212) 555-0198</span>
                </a>
              </div>

              {/* Trust Badges */}
              {/* <div className="pt-3 border-t border-[#DCE5E3]/80 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-[#172323] font-semibold lg:font-normal lg:text-[#5F6B6B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>New Patients Welcome</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>Gentle, Anxiety-Free Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>Direct PPO & FSA Billing</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column: Hero Image (Desktop view) */}
          <div className="hidden lg:block lg:col-span-5 relative pt-4">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#DCE5E3] bg-white relative group">
                <img
                  src={homeHero}
                  alt="Dentist having a calm, friendly conversation with patient in modern clinic"
                  className="w-full h-[400px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-[#DDF3EE] font-medium">
                    Midtown Manhattan Suite
                  </div>
                  <div className="text-sm font-semibold">
                    Thoughtful, unhurried consultations with Dr. Sarah Williams
                  </div>
                </div>
              </div>

              {/* Floating Trust Card 1: Verified Google Reviews */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-[#DCE5E3] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DDF3EE] flex items-center justify-center text-[#0F5B5B] font-bold text-sm">
                  4.9
                </div>
                <div>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-[#5F6B6B] mt-0.5 font-medium">
                    Verified Patient Reviews on Google
                  </div>
                </div>
              </div>

              {/* Floating Trust Card 2: Comfort Guarantee */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#DCE5E3] items-center gap-3 max-w-xs">
                <div className="w-9 h-9 rounded-xl bg-[#0F5B5B] flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#DDF3EE]" />
                </div>
                <div className="text-xs leading-snug">
                  <span className="font-bold text-[#172323] block">100% Comfort Promise</span>
                  <span className="text-[#5F6B6B]">We pause anytime you raise your hand.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
          Integrated 4 Stats Section (Inside Hero):
          - 15+ Years Caring for Dental Patients (animated from 0 to 15+)
          - 5,000+ Healthy Smiles Treated (animated from 0 to 5,000+)
          - 4.9 / 5 Verified Patient Rating on Google & ZocDoc (animated from 0.0 to 4.9)
          - 150+ Comprehensive Treatments (animated from 0 to 150+)
          - All 4 start and stop simultaneously when scrolled into view.
          - Extra secondary descriptions removed.
          - Responsive on mobile in a clean line / compact grid.
        */}
        <div
          ref={statsRef}
          className="mt-6 sm:mt-8 pt-6 border-t border-[#DCE5E3] bg-white/80 rounded-2xl p-4 sm:p-6 shadow-xs border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#DCE5E3]/60">
            
            {/* Stat 1: 15+ Years */}
            <div className="flex flex-col items-start pt-2 md:pt-0 md:px-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-[#DDF3EE] flex items-center justify-center text-[#0F5B5B] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F5B5B] tracking-tight tabular-nums">
                  {stat1}+
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#172323] leading-snug">
                Years Caring for Dental Patients
              </h3>
            </div>

            {/* Stat 2: 5,000+ Healthy Smiles */}
            <div className="flex flex-col items-start pt-2 md:pt-0 md:px-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-[#DDF3EE] flex items-center justify-center text-[#0F5B5B] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F5B5B] tracking-tight tabular-nums">
                  {stat2.toLocaleString()}+
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#172323] leading-snug">
                Healthy Smiles Treated
              </h3>
            </div>

            {/* Stat 3: 4.9 / 5 Rating */}
            <div className="flex flex-col items-start pt-2 md:pt-0 md:px-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-[#DDF3EE] flex items-center justify-center text-[#0F5B5B] shrink-0">
                  <Star className="w-4 h-4 fill-current text-amber-400" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F5B5B] tracking-tight tabular-nums">
                  {stat3.toFixed(1)} / 5
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#172323] leading-snug">
                Verified Patient Rating on Google & ZocDoc
              </h3>
            </div>

            {/* Stat 4: 150+ Comprehensive Treatments */}
            <div className="flex flex-col items-start pt-2 md:pt-0 md:px-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-[#DDF3EE] flex items-center justify-center text-[#0F5B5B] shrink-0">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F5B5B] tracking-tight tabular-nums">
                  {stat4}+
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#172323] leading-snug">
                Comprehensive Treatments
              </h3>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
