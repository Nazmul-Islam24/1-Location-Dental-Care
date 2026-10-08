import React from 'react';
import { HeartHandshake, Cpu, DollarSign, Sparkles, Check, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      num: '01',
      title: 'Comfort-First Care',
      subtitle: 'Gentle dentistry designed around your peace of mind',
      description:
        'We take the time to explain every treatment in plain language and answer your questions before anything starts. Warm neck pillows, ceiling entertainment with headphones, and gentle sedation options make every visit serene.',
      features: [
        'Pause-anytime hand signal system',
        'Noise-canceling headphones & Netflix/Spotify',
        'Topical pre-numbing gels for painless injections',
      ],
      icon: HeartHandshake,
    },
    {
      num: '02',
      title: 'Modern Technology',
      subtitle: 'Predictable results with sub-millimeter precision',
      description:
        'We use modern tools and techniques where appropriate to make treatment clearer, faster, and significantly more comfortable. Say goodbye to gooey putty impression trays and high-radiation film.',
      features: [
        '3D optical scans instead of gag-inducing goop',
        'Ultra-low radiation digital x-rays',
        'Same-day ceramic crown CAD/CAM milling',
      ],
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Personalized & Transparent',
      subtitle: 'Zero sales pressure, 100% honest pricing',
      description:
        'Your care plan is built around your individual health goals and timeline. We provide written, itemized cost estimates before any treatment begins, coordinate directly with your insurance, and offer flexible 0% APR plans.',
      features: [
        'Itemized out-of-pocket estimates up front',
        'Direct in-network PPO insurance claims submission',
        'In-house wellness plan for uninsured patients',
      ],
      icon: DollarSign,
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0F5B5B]">
            Why Patients Choose Verdant
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
            A dental experience that puts your comfort and trust first.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B6B] leading-relaxed">
            We built our practice on a simple belief: high-quality clinical dentistry should never feel intimidating, rushed, or confusing.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-white rounded-3xl p-8 border border-[#DCE5E3] hover:border-[#0F5B5B]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-[#0F5B5B]/30 font-serif-display">
                      {pillar.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#DDF3EE] flex items-center justify-center text-[#0F5B5B]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#172323] mb-2 font-serif-display">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#0F5B5B] uppercase tracking-wider mb-4">
                    {pillar.subtitle}
                  </div>
                  <p className="text-sm text-[#5F6B6B] leading-relaxed mb-6 font-sans-body">
                    {pillar.description}
                  </p>
                </div>

                <div className="border-t border-[#DCE5E3]/60 pt-4 space-y-2.5">
                  {pillar.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#172323] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0F5B5B] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Side-by-side Experience Comparison */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE5E3]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F5B5B] bg-[#DDF3EE] px-3 py-1 rounded-full">
                The Verdant Difference
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#172323] font-serif-display">
                Traditional Dental Clinic vs. Verdant Modern Care
              </h3>
              <p className="text-sm text-[#5F6B6B] leading-relaxed">
                Noticeable differences from the moment you step through our doors. We redesigned every touchpoint to eliminate anxiety and confusion.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0F5B5B] hover:text-[#0c4848] transition-colors group"
                >
                  <span>Experience gentle dental care today</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✕
                </div>
                <div className="text-xs">
                  <span className="font-bold text-red-900 block">The Typical Dental Visit</span>
                  <span className="text-red-700">Cold waiting room, clipboards of paper forms, rushed dentists, mysterious bills weeks later.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#DDF3EE]/60 border border-[#0F5B5B]/20 flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0F5B5B] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#0F5B5B] block">The Verdant Care Approach</span>
                  <span className="text-[#172323]">Organic tea lounge, phone check-in, 60 uninterrupted minutes with your doctor, 100% upfront pricing.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
