import React from 'react';
import {
  HeartHandshake,
  Cpu,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Clock,
  Heart,
  Calendar,
  Smile,
  Zap,
  ArrowRight
} from 'lucide-react';
import { TechnologySection } from './TechnologySection';
import { ClinicGallery } from './ClinicGallery';
import { FirstVisitProcess } from './FirstVisitProcess';
import homeHero from '../assets/images/home-hero.avif'




interface AboutUsPageProps {
  onOpenBooking: () => void;
  onNavigateToServices?: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onOpenBooking, onNavigateToServices }) => {
  return (
    <div className="w-full bg-[#FAFAF7]">
      
      {/* 
        Hero Header with Serene Hospital / Clinic Practice Background Image:
        The background image is clearly visible behind, with an overlay layer that starts 
        at 0 opacity (completely transparent) at the top, and gradually transitions downwards
        to full solid dark slate #172323 at the bottom.
      */}
      <section className="relative overflow-hidden bg-[#172323] text-white py-12 md:py-20">
        {/* Serene Medical/Clinic Atmosphere Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={homeHero}
            alt="Modern serene dental clinic interior and patient care lounge"
            className="w-full h-full object-cover object-center opacity-75 filter brightness-95 contrast-105"
          />
          {/* Top is 0% opacity (completely transparent), gradually becoming 100% solid #172323 downwards */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#172323]/55 via-35% via-[#172323]/90 via-75% to-[#172323] pointer-events-none" />
        </div>

        {/* 
          Upper layer: Total content under "Why Patients Choose Verdant"
          with background layer gradient going from 0 transparency at top to solid at bottom
        */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl p-6 sm:p-10 text-center space-y-5 bg-gradient-to-b from-transparent via-[#172323]/60 via-30% via-[#172323]/95 via-70% to-[#172323] backdrop-blur-[2px] border-b border-[#0F5B5B]/40 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F5B5B]/85 text-[#DDF3EE] border border-[#DDF3EE]/25 text-xs font-bold uppercase tracking-wider mx-auto shadow-md">
              <Heart className="w-3.5 h-3.5" />
              <span>Our Foundation & Clinical Values</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif-display leading-tight drop-shadow-md">
              Why Patients Choose Verdant
            </h1>

            <p className="text-xl sm:text-2xl font-serif-display text-[#DDF3EE] font-medium max-w-2xl mx-auto drop-shadow-sm">
              A dental experience that puts your comfort and trust first.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans-body">
              We built our practice on a simple belief: high-quality clinical dentistry should never feel intimidating, rushed, or confusing. We pair unhurried one-on-one doctor consultations with hospital-grade sterilization and genuine empathy.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-2xl bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center gap-2 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-[#DDF3EE]" />
                <span>Schedule a New Patient Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 
        The Verdant Pillars:
        Presented with elegant editorial typography, distinctive iconography,
        and clean structural layout rather than generic repetitive cards!
      */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Core Principles Header */}
        <div className="border-b border-[#DCE5E3] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F5B5B]">
              Clinical Standard of Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#172323] font-serif-display">
              Built Entirely Around The Patient Experience
            </h2>
          </div>
          <p className="text-sm text-[#5F6B6B] max-w-md">
            Every clinical protocol, operatory setup, and team member reflects our commitment to human-centered dentistry.
          </p>
        </div>

        {/* 3 Pillars: Asymmetric Editorial Layout with Rich Visual Icons */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Pillar 1: Comfort-First Care */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border border-[#DCE5E3] shadow-xs">
            <div className="lg:col-span-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#DDF3EE] text-[#0F5B5B] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#0F5B5B]">
                  Pillar 01
                </span>
                <h3 className="text-2xl font-bold text-[#172323] font-serif-display">
                  Comfort-First Care
                </h3>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-base text-[#4A5555] leading-relaxed">
                We take the time to explain every treatment in plain language and answer your questions before anything starts. Warm neck pillows, ceiling entertainment with headphones, and gentle sedation options make every visit serene.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#172323]">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>Pause-anytime hand signals</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#172323]">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>Noise-canceling headphones</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#172323]">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>Painless micro-anesthesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Modern Technology */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border border-[#DCE5E3] shadow-xs">
            <div className="lg:col-span-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#DDF3EE] text-[#0F5B5B] flex items-center justify-center shrink-0">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#0F5B5B]">
                  Pillar 02
                </span>
                <h3 className="text-2xl font-bold text-[#172323] font-serif-display">
                  Sub-Millimeter Tech
                </h3>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-base text-[#4A5555] leading-relaxed">
                We use modern tools and techniques where appropriate to make treatment clearer, faster, and significantly more comfortable. Say goodbye to gooey putty impression trays and high-radiation film.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#172323]">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>3D optical color scanners</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#172323]">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>Ultra-low radiation scans</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#172323]">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>Same-day CEREC crowns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Transparent & Honest */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border border-[#DCE5E3] shadow-xs">
            <div className="lg:col-span-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#DDF3EE] text-[#0F5B5B] flex items-center justify-center shrink-0">
                <DollarSign className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#0F5B5B]">
                  Pillar 03
                </span>
                <h3 className="text-2xl font-bold text-[#172323] font-serif-display">
                  Upfront Transparency
                </h3>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-base text-[#4A5555] leading-relaxed">
                Your care plan is built around your individual health goals and timeline. We provide written, itemized cost estimates before any treatment begins, coordinate directly with your insurance, and offer flexible 0% APR plans.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#172323]">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>100% itemized estimates up front</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#172323]">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>Direct in-network PPO claims</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#172323]">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                  <span>Zero-interest financing options</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* The Verdant Difference Side-by-Side Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE5E3] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F5B5B] bg-[#DDF3EE] px-3 py-1 rounded-full inline-block">
              Side-by-Side Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#172323] font-serif-display">
              Traditional Dental Clinic vs. Verdant Modern Care
            </h3>
            <p className="text-sm text-[#5F6B6B]">
              Noticeable differences from the moment you step through our doors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Typical Clinic */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-4">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-xs">✕</span>
                <span>The Typical Dental Experience</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#5F6B6B]">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Rushed 15-minute appointments with doctors running late between multiple chairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Surprise bills weeks later because insurance coverage wasn't confirmed in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Choking on goopy impression material and enduring painful manual scrapers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Feeling judged, lectured, or pushed into aggressive unnecessary treatments</span>
                </li>
              </ul>
            </div>

            {/* Verdant Care */}
            <div className="p-6 rounded-2xl bg-[#DDF3EE]/50 border border-[#0F5B5B]/30 space-y-4">
              <div className="flex items-center gap-2 text-[#0F5B5B] font-bold text-sm">
                <CheckCircle2 className="w-6 h-6 text-[#0F5B5B]" />
                <span>The Verdant Modern Difference</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#172323]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0 mt-0.5" />
                  <span>Dedicated 60-minute unhurried visits where you have our full attention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0 mt-0.5" />
                  <span>100% itemized cost estimates provided in writing before treatment starts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0 mt-0.5" />
                  <span>3D optical digital scans and warm ultrasonic hygiene for total physical comfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5B5B] shrink-0 mt-0.5" />
                  <span>A safe, supportive atmosphere with gentle language and zero shaming</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* Your First Visit Process */}
      <FirstVisitProcess onOpenBooking={onOpenBooking} />

      {/* Modern Dental Technology */}
      <TechnologySection />

      {/* Clinic Practice Tour & Gallery */}
      <ClinicGallery />

      {/* Final Warm CTA on About page */}
      <section className="py-10 md:py-12 bg-[#0F5B5B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-display">
            Ready to Experience Stress-Free Dental Care?
          </h2>
          <p className="text-base text-gray-200 max-w-2xl mx-auto">
            Join thousands of Manhattan families who look forward to visiting the dentist.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-white text-[#0F5B5B] font-bold text-sm shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Book Your First Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
