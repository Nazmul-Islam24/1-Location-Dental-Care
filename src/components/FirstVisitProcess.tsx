import React from 'react';
import { CalendarCheck, MessageSquare, Stethoscope, FileText, Smile, CheckCircle, ArrowRight } from 'lucide-react';

interface FirstVisitProcessProps {
  onOpenBooking: () => void;
}

export const FirstVisitProcess: React.FC<FirstVisitProcessProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Book Your Visit',
      subtitle: 'Effortless 2-minute scheduling',
      description:
        'Select your convenient time online or give our Manhattan team a call. We send a quick digital check-in to your phone—no clipboards or paper forms.',
      icon: CalendarCheck,
    },
    {
      num: '02',
      title: 'Meet Your Doctor',
      subtitle: 'Warm, unhurried conversation',
      description:
        'You will sit down in a relaxed consultation setting. We review your dental history and ask how we can make you feel completely at ease.',
      icon: MessageSquare,
    },
    {
      num: '03',
      title: 'Discuss Your Concerns',
      subtitle: 'Gentle 3D digital imaging',
      description:
        'Using pen-sized optical scanners, we show you your teeth on a large monitor in real-time. You see exactly what the doctor sees—complete clarity.',
      icon: Stethoscope,
    },
    {
      num: '04',
      title: 'Receive Your Plan',
      subtitle: 'Transparent, written pricing',
      description:
        'We outline conservative options and provide itemized costs upfront. No hidden fees, no pressure, and full insurance coordination.',
      icon: FileText,
    },
    {
      num: '05',
      title: 'Begin Your Care',
      subtitle: 'Calm, pain-free treatment',
      description:
        'Treatment moves at your pace. Put on noise-canceling headphones, lean back into memory-foam comfort, and experience stress-free dentistry.',
      icon: Smile,
    },
  ];

  return (
    <section id="first-visit" className="py-10 md:py-16 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0F5B5B]">
            Your First Visit Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
            A step-by-step path designed to remove dental anxiety.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B6B] leading-relaxed">
            Wondering what to expect? Here is exactly how your first appointment unfolds from the moment you reserve your visit.
          </p>
        </div>

        {/* 5-Step Process Flow per Blueprint Section 20 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-3xl p-6 border border-[#DCE5E3] hover:border-[#0F5B5B]/40 hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#0F5B5B] font-serif-display">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#DDF3EE] flex items-center justify-center text-[#0F5B5B] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#172323] mb-1 font-serif-display">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-bold text-[#0F5B5B] uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-[#5F6B6B] leading-relaxed font-sans-body">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#DCE5E3]/60 flex items-center text-[11px] text-[#0F5B5B] font-medium">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                  <span>Always at your pace</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comfort Amenities Card */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-[#DCE5E3]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#FAFAF7]">
              <span className="text-xl block mb-1">🎧</span>
              <span className="text-xs font-bold text-[#172323] block">Bose Noise Cancellation</span>
              <span className="text-[11px] text-[#5F6B6B]">Stream podcasts, music, or films</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAFAF7]">
              <span className="text-xl block mb-1">🛋️</span>
              <span className="text-xs font-bold text-[#172323] block">Heated Neck & Body Pillows</span>
              <span className="text-[11px] text-[#5F6B6B]">Ergonomic plush memory foam</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAFAF7]">
              <span className="text-xl block mb-1">🍵</span>
              <span className="text-xs font-bold text-[#172323] block">Organic Wellness Bar</span>
              <span className="text-[11px] text-[#5F6B6B]">Herbal teas, sparkling water & coffee</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAFAF7]">
              <span className="text-xl block mb-1">✋</span>
              <span className="text-xs font-bold text-[#172323] block">Pause-Anytime Control</span>
              <span className="text-[11px] text-[#5F6B6B]">You control the speed of care</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#DCE5E3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-[#5F6B6B] text-center sm:text-left">
              Ready to take the first step? Most new patient exams can be booked within 48 hours.
            </div>
            <button
              onClick={onOpenBooking}
              className="bg-[#0F5B5B] hover:bg-[#0c4848] text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-xs"
            >
              <span>Schedule Your First Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
