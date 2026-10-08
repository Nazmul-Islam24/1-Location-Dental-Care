import React, { useState } from 'react';
import {
  ShieldCheck,
  Sparkles,
  Anchor,
  RotateCcw,
  Smile,
  AlertCircle,
  ArrowRight,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { ServiceDetail } from '../types/clinic';
import { servicesData } from '../data/clinicData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail) => void;
  onBookService: (serviceTitle: string) => void;
  activeFilter?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'general', label: 'Preventive & Hygiene' },
    { id: 'cosmetic', label: 'Cosmetic & Veneers' },
    { id: 'implants', label: 'Implants & 3D' },
    { id: 'restorative', label: 'Ceramic Crowns' },
    { id: 'ortho', label: 'Clear Aligners' },
    { id: 'emergency', label: 'Emergency Relief' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#0F5B5B]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0F5B5B]" />;
      case 'Anchor':
        return <Anchor className="w-6 h-6 text-[#0F5B5B]" />;
      case 'RotateCcw':
        return <RotateCcw className="w-6 h-6 text-[#0F5B5B]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#0F5B5B]" />;
      case 'AlertCircle':
        return <AlertCircle className="w-6 h-6 text-[#0F5B5B]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#0F5B5B]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Formula per Blueprint Section 12 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0F5B5B]">
              Comprehensive Care
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
              Dental Care Designed Around You.
            </h2>
            <p className="text-base sm:text-lg text-[#5F6B6B] leading-relaxed">
              From gentle routine checkups to state-of-the-art 3D restorations, our multidisciplinary team is here to support your lifelong oral health.
            </p>
          </div>

          <div className="text-xs text-[#5F6B6B] flex items-center gap-1.5">
            <span>Click any service for procedure steps & timeline</span>
          </div>
        </div>

        {/* Filter Tabs (Interactive Segmented Control adhering to Frontend Design constitution) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#0F5B5B] text-white shadow-xs'
                    : 'bg-white border border-[#DCE5E3] text-[#5F6B6B] hover:text-[#172323] hover:border-[#0F5B5B]/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 2-column or 3-column responsive grid per Blueprint Section 42 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-3xl border border-[#DCE5E3] overflow-hidden hover:border-[#0F5B5B]/40 hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Card Photo Preview */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#0F5B5B] px-3 py-1 rounded-full text-xs font-semibold border border-[#DCE5E3]">
                  {service.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#DDF3EE] flex items-center justify-center shrink-0">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#5F6B6B] block">
                        {service.category.toUpperCase()}
                      </span>
                      <h3 className="text-lg font-bold text-[#172323] leading-snug group-hover:text-[#0F5B5B] transition-colors font-serif-display">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5F6B6B] leading-relaxed font-sans-body mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  <div className="border-t border-[#DCE5E3]/60 pt-3">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5F6B6B] block mb-1">
                      Key Technology:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologyUsed.slice(0, 2).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-[#FAFAF7] text-[#172323] px-2 py-0.5 rounded-md border border-[#DCE5E3]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#DCE5E3]/60">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs sm:text-sm font-bold text-[#0F5B5B] hover:text-[#0c4848] flex items-center gap-1 group-hover:underline"
                  >
                    <span>View Treatment Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onBookService(service.title)}
                    className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-[#DDF3EE] hover:bg-[#0F5B5B] text-[#0F5B5B] hover:text-white transition-colors text-xs font-semibold"
                    title={`Book ${service.title}`}
                  >
                    Book
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Helper Banner */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE5E3] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#172323] font-serif-display">
              Need advice on a complex dental restoration?
            </h4>
            <p className="text-xs sm:text-sm text-[#5F6B6B]">
              We offer comprehensive examinations with zero obligation or pressured sales pitches.
            </p>
          </div>
          <button
            onClick={() => onBookService('Comprehensive Exam & Consultation')}
            className="bg-[#0F5B5B] hover:bg-[#0c4848] text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>Schedule New Patient Exam</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
