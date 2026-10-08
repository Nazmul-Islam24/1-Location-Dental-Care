import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Phone } from 'lucide-react';
import { faqData } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header per Blueprint Section 21 */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#5F6B6B]">
            Clear, honest answers regarding treatments, payment methods, dental anxiety, and your first appointment.
          </p>
        </div>

        {/* Accordion List with smooth height transition */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#DCE5E3] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors hover:bg-gray-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#172323] font-serif-display">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAFAF7] border border-[#DCE5E3] flex items-center justify-center text-[#0F5B5B] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#5F6B6B] leading-relaxed border-t border-[#DCE5E3]/60 font-sans-body">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-[#DCE5E3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-[#172323]">
              Have a specific question not covered here?
            </div>
            <div className="text-xs text-[#5F6B6B]">
              Our patient concierge team is available to chat or answer questions.
            </div>
          </div>
          <a
            href="tel:+12125550198"
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F5B5B] hover:text-[#0c4848] bg-[#DDF3EE] px-4 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>(212) 555-0198</span>
          </a>
        </div>
      </div>
    </section>
  );
};
