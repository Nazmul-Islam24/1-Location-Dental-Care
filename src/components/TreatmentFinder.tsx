import React, { useState } from 'react';
import { HelpCircle, ArrowRight, CheckCircle2, Sparkles, AlertCircle, Clock, Calendar } from 'lucide-react';
import { ServiceDetail } from '../types/clinic';
import { servicesData } from '../data/clinicData';

interface TreatmentFinderProps {
  onSelectService: (service: ServiceDetail) => void;
  onOpenBookingWithService: (serviceName: string) => void;
}

export const TreatmentFinder: React.FC<TreatmentFinderProps> = ({
  onSelectService,
  onOpenBookingWithService,
}) => {
  const [selectedGoal, setSelectedGoal] = useState<string>('routine');

  const options = [
    {
      id: 'routine',
      label: 'Routine Wellness & Cleaning',
      desc: 'Annual checkup, hygiene cleaning, sensitive gums, cavity prevention',
      matchedServiceId: 'general-dentistry',
      urgency: 'Standard (Schedule this week or month)',
      duration: '45–60 mins',
    },
    {
      id: 'cosmetic',
      label: 'Enhance & Brighten My Smile',
      desc: 'Chipped front teeth, gaps, deep yellowing, cosmetic smile makeover',
      matchedServiceId: 'cosmetic-dentistry',
      urgency: 'Elective Consultation (Flexible)',
      duration: '45 mins initial consultation',
    },
    {
      id: 'missing-teeth',
      label: 'Replace One or Multiple Missing Teeth',
      desc: 'Missing tooth, failing bridge, looking for permanent implant solution',
      matchedServiceId: 'dental-implants',
      urgency: 'Comprehensive 3D Scan Visit',
      duration: '45 mins 3D evaluation',
    },
    {
      id: 'pain',
      label: 'I Have Severe Tooth Pain or Broken Tooth',
      desc: 'Acute toothache, broken crown, swelling, urgent relief needed',
      matchedServiceId: 'emergency-dentistry',
      urgency: 'Urgent Same-Day Priority Slot',
      duration: '30–45 mins immediate triage',
    },
    {
      id: 'straightening',
      label: 'Straighten Crooked Teeth or Crowding',
      desc: 'Discreet orthodontic alignment without visible metal wires',
      matchedServiceId: 'orthodontics-aligners',
      urgency: 'Digital 3D Simulation Session',
      duration: '30 mins scan & smile preview',
    },
    {
      id: 'broken-restoration',
      label: 'Damaged Molar or Old Metal Filling',
      desc: 'Need a strong ceramic crown without two-week temporary tooth',
      matchedServiceId: 'restorative-dentistry',
      urgency: 'Same-day CEREC restoration',
      duration: 'Single 90-minute visit',
    },
  ];

  const currentOption = options.find((opt) => opt.id === selectedGoal) || options[0];
  const matchedService =
    servicesData.find((s) => s.id === currentOption.matchedServiceId) || servicesData[0];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#DCE5E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAFAF7] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#DCE5E3]">
          {/* Header */}
          <div className="max-w-3xl mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Interactive Care Navigation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172323] font-serif-display">
              Not sure what treatment you need?
            </h2>
            <p className="text-sm sm:text-base text-[#5F6B6B]">
              Select your primary goal below and we will outline the recommended care pathway and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options Selection */}
            <div className="lg:col-span-6 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#5F6B6B] block mb-2">
                What brings you in today?
              </label>
              {options.map((opt) => {
                const isSelected = selectedGoal === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedGoal(opt.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all text-left flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-white border-[#0F5B5B] ring-2 ring-[#0F5B5B]/15 shadow-sm'
                        : 'bg-white/70 border-[#DCE5E3] hover:bg-white hover:border-[#0F5B5B]/30'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full mt-0.5 flex items-center justify-center border shrink-0 transition-colors ${
                        isSelected
                          ? 'border-[#0F5B5B] bg-[#0F5B5B] text-white'
                          : 'border-[#5F6B6B]/40 bg-white'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#172323]">{opt.label}</div>
                      <div className="text-xs text-[#5F6B6B] mt-0.5 leading-relaxed">{opt.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Recommendation Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE5E3] shadow-xs space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#DCE5E3]">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#0F5B5B] font-bold block">
                      Recommended Service Pathway
                    </span>
                    <h3 className="text-xl font-bold text-[#172323] font-serif-display mt-0.5">
                      {matchedService.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold shrink-0">
                    {matchedService.category.toUpperCase()}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5F6B6B] leading-relaxed">
                  {matchedService.shortDescription}
                </p>

                <div className="grid grid-cols-2 gap-3 py-2 text-xs">
                  <div className="p-3 bg-[#FAFAF7] rounded-xl border border-[#DCE5E3]/60">
                    <span className="text-[#5F6B6B] block mb-0.5">Visit Duration:</span>
                    <span className="font-bold text-[#172323] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0F5B5B]" />
                      {currentOption.duration}
                    </span>
                  </div>
                  <div className="p-3 bg-[#FAFAF7] rounded-xl border border-[#DCE5E3]/60">
                    <span className="text-[#5F6B6B] block mb-0.5">Recommended Timeline:</span>
                    <span className="font-bold text-[#172323] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#0F5B5B]" />
                      {currentOption.urgency.split(' ')[0]}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#172323]">Key Highlights:</span>
                  <ul className="text-xs text-[#5F6B6B] space-y-1.5">
                    {matchedService.whoBenefits.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F5B5B] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <button
                    onClick={() => onOpenBookingWithService(matchedService.title)}
                    className="flex-1 py-3 px-4 bg-[#0F5B5B] hover:bg-[#0c4848] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Book This Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onSelectService(matchedService)}
                    className="py-3 px-4 border border-[#DCE5E3] hover:border-[#0F5B5B] rounded-xl text-xs sm:text-sm font-semibold text-[#172323] hover:bg-[#FAFAF7] transition-colors"
                  >
                    View Procedure Details
                  </button>
                </div>

                {/* Blueprint Section 61 Disclaimer */}
                <div className="flex items-start gap-2 text-[11px] text-[#5F6B6B] bg-[#FAFAF7] p-3 rounded-xl border border-dashed border-[#DCE5E3]">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Informational note:</strong> This tool assists navigation to relevant services. It does not replace a clinical examination by our licensed dental surgeons.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
