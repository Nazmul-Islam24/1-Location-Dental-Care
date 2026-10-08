import React from 'react';
import { HelpCircle, Phone, Calendar } from 'lucide-react';
import { FaqSection } from './FaqSection';
import { InsuranceFinancing } from './InsuranceFinancing';

interface FaqPageProps {
  onOpenBooking: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-[#FAFAF7] py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Patient Resources & FAQ</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#172323] tracking-tight font-serif-display">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#5F6B6B] leading-relaxed font-sans-body">
            Get transparent answers about dental visits, anxiety relief, insurance coverage, out-of-pocket costs, and scheduling.
          </p>
        </div>

        {/* FAQs Accordion Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCE5E3] shadow-xs">
          <FaqSection />
        </div>

        {/* Insurance & Flexible Financing Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCE5E3] shadow-xs">
          <InsuranceFinancing />
        </div>

        {/* Have More Questions Callout */}
        <div className="rounded-3xl bg-[#0F5B5B] text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-serif-display">
              Have a specific question about your dental situation?
            </h3>
            <p className="text-sm text-[#DDF3EE] max-w-xl">
              Our patient care coordinator is always happy to explain your options, verify insurance benefits, or find a comfortable time slot.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+12125550198"
              className="px-5 py-3 rounded-xl bg-white text-[#0F5B5B] font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0F5B5B]" />
              <span>Call (212) 555-0198</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-3 rounded-xl bg-[#DDF3EE] text-[#0F5B5B] font-bold text-xs sm:text-sm hover:bg-[#c6ebe3] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#0F5B5B]" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
