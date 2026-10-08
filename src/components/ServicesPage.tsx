import React, { useState } from 'react';
import {
  ShieldCheck,
  Sparkles,
  Activity,
  AlertCircle,
  Sun,
  Zap,
  Scissors,
  ShieldAlert,
  Award,
  CheckCircle2,
  Smile,
  Heart,
  Layers,
  Star,
  ArrowRight,
  Info,
  Calendar
} from 'lucide-react';
import { all14DentalServices } from '../data/dentalServicesData';
import { clinicalTransformationsData } from '../data/beforeAfterData';
import { TreatmentFinder } from './TreatmentFinder';
import { ComparisonSlider } from './ComparisonSlider';
import { ServiceDetail } from '../types/clinic';
import servicesPages from '../assets/images/servicespage.avif'



interface ServicesPageProps {
  onOpenBookingWithService: (serviceName: string) => void;
  onSelectService: (slug: string) => void;
  onSelectLegacyService?: (service: ServiceDetail) => void;
  initialSelectedSlug?: string | null;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenBookingWithService,
  onSelectService,
  onSelectLegacyService,
}) => {

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'general-checkup':
        return <ShieldCheck className="w-5 h-5 text-[#0F5B5B]" />;
      case 'dental-cleaning-gum':
        return <Sparkles className="w-5 h-5 text-[#0F5B5B]" />;
      case 'tooth-filling-cavity':
        return <Activity className="w-5 h-5 text-[#0F5B5B]" />;
      case 'toothache-emergency':
        return <AlertCircle className="w-5 h-5 text-amber-600" />;
      case 'teeth-whitening':
        return <Sun className="w-5 h-5 text-[#0F5B5B]" />;
      case 'root-canal-treatment':
        return <Zap className="w-5 h-5 text-[#0F5B5B]" />;
      case 'tooth-extraction':
        return <Scissors className="w-5 h-5 text-[#0F5B5B]" />;
      case 'wisdom-tooth-treatment':
        return <ShieldAlert className="w-5 h-5 text-[#0F5B5B]" />;
      case 'crowns-bridges':
        return <Award className="w-5 h-5 text-[#0F5B5B]" />;
      case 'dental-implants':
        return <CheckCircle2 className="w-5 h-5 text-[#0F5B5B]" />;
      case 'dentures':
        return <Smile className="w-5 h-5 text-[#0F5B5B]" />;
      case 'childrens-dentistry':
        return <Heart className="w-5 h-5 text-[#0F5B5B]" />;
      case 'orthodontics-aligners':
        return <Layers className="w-5 h-5 text-[#0F5B5B]" />;
      case 'veneers-cosmetic':
        return <Star className="w-5 h-5 text-[#0F5B5B]" />;
      default:
        return <Activity className="w-5 h-5 text-[#0F5B5B]" />;
    }
  };

  return (
    <div className="w-full bg-[#FAFAF7] py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Page Hero Header with Oral Surgery / Teeth Operation Background Image & 0% to 40% Gradient Overlay */}
        <div className="relative rounded-3xl overflow-hidden border border-[#DCE5E3] shadow-md">
          {/* Lower Level / Layer: Teeth operation & oral surgery background image */}
          <div className="absolute inset-0 z-0">
            <img
              src={servicesPages}
              alt="Oral surgery and precision dental operation"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay: starting at 0% at the top and adjusting to 40% solidity at the bottom */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.0) 0%, rgba(15, 23, 42, 0.15) 35%, rgba(15, 23, 42, 0.40) 100%)'
              }}
            />
          </div>

          {/* Upper Level / Layer: The texts with 0 to 40% solid backdrop for maximum clarity */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-3xl space-y-4 text-left">
            <div
              className="rounded-2xl p-4 sm:p-6 space-y-4"
              style={{
                background: 'linear-gradient(to bottom, rgba(15, 91, 91, 0.0) 0%, rgba(15, 91, 91, 0.20) 45%, rgba(15, 91, 91, 0.40) 100%)'
              }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 text-[#0F5B5B] text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Comprehensive Dental Practice</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-serif-display drop-shadow-md">
                Comprehensive Dental Services
              </h1>
              <p className="text-base sm:text-lg text-white/95 leading-relaxed font-sans-body drop-shadow-sm font-medium">
                From routine preventive checkups to complex smile rehabilitations. Click any service card below to view clinical details, doctor advice, what to do, and schedule an appointment.
              </p>
            </div>
          </div>
        </div>

        {/* Dental Services Grid */}
        <section id="services-grid" className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#DCE5E3] pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172323] font-serif-display">
                Dental Specialties & Treatments
              </h2>
              <p className="text-xs sm:text-sm text-[#5F6B6B] mt-1">
                Select any treatment to open procedure details and medical guidance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {all14DentalServices.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service.slug)}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#DCE5E3] hover:border-[#0F5B5B] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group space-y-4 relative"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#DDF3EE] group-hover:bg-[#0F5B5B] group-hover:text-white flex items-center justify-center transition-colors">
                    {getServiceIcon(service.slug)}
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F5B5B] block mb-0.5">
                      {service.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#172323] group-hover:text-[#0F5B5B] font-serif-display leading-tight transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5F6B6B] leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DCE5E3]/60 flex items-center justify-between text-xs font-semibold text-[#0F5B5B]">
                  <span className="flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" />
                    <span>View Care & Advice</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Treatment Finder Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCE5E3] shadow-xs">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F5B5B] block mb-1">
              Interactive Care Navigation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172323] font-serif-display">
              Not Sure What You Need? Find The Right Care
            </h2>
            <p className="text-sm text-[#5F6B6B] mt-1">
              Answer a few quick questions to identify the best treatment and specialist for your situation.
            </p>
          </div>
          <TreatmentFinder
            onSelectService={(s) => onSelectLegacyService?.(s)}
            onOpenBookingWithService={onOpenBookingWithService}
          />
        </section>

        {/* 
          Patient Gallery: Full Clinical Transformations (12+ Real Cases)
          Responsive grid: 2 items per row on small screens, 3 per row on large screens!
          Concise problem & outcome notes. No case study switcher buttons.
        */}
        <section id="patient-gallery" className="space-y-8 pt-6">
          <div className="border-b border-[#DCE5E3] pb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Smile Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#172323] tracking-tight font-serif-display">
              Patient Gallery & Clinical Transformations
            </h2>
            <p className="text-sm sm:text-base text-[#5F6B6B] max-w-3xl leading-relaxed">
              Real before-and-after results achieved by our dental team. Compare the initial presentation with completed restorations and the lasting benefits our patients enjoy.
            </p>
          </div>

          {/* Responsive Grid with Interactive Draggable Slidebar Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clinicalTransformationsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#DCE5E3] overflow-hidden p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-[#0F5B5B]/50 transition-colors shadow-xs"
              >
                {/* Visual Before & After comparison with draggable slidebar */}
                <ComparisonSlider
                  beforeImg={item.beforeImg}
                  afterImg={item.afterImg}
                  title={item.title}
                  heightClass="h-48 sm:h-56"
                />

                {/* Title & Category (Initial Problem & Result/Benefits removed per user request) */}
                <div>
                  <span className="text-[11px] font-bold text-[#0F5B5B] uppercase tracking-wider block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#172323] font-serif-display leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenBookingWithService(item.category)}
                    className="w-full py-2.5 rounded-xl bg-[#FAFAF7] hover:bg-[#DDF3EE] text-[#0F5B5B] font-bold text-xs border border-[#DCE5E3] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Consult for This Treatment</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
};
