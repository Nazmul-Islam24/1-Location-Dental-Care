import React, { useState } from 'react';
import { ShieldCheck, CreditCard, PiggyBank, HeartHandshake, Check, ChevronDown, Sparkles } from 'lucide-react';

export const InsuranceFinancing: React.FC = () => {
  const [selectedInsurer, setSelectedInsurer] = useState<string>('');
  const [verificationResult, setVerificationResult] = useState<string | null>(null);

  const insurers = [
    { name: 'Delta Dental (Premier & PPO)', status: 'In-Network · 100% Preventive Covered' },
    { name: 'MetLife Dental PPO', status: 'In-Network · 100% Preventive Covered' },
    { name: 'Cigna Total DPPO', status: 'In-Network · 100% Preventive Covered' },
    { name: 'Aetna Dental PPO', status: 'In-Network · 100% Preventive Covered' },
    { name: 'Guardian Direct PPO', status: 'In-Network · 100% Preventive Covered' },
    { name: 'Blue Cross Blue Shield (Empire / Anthem)', status: 'In-Network · 100% Preventive Covered' },
    { name: 'UnitedHealthcare Dental', status: 'In-Network · 100% Preventive Covered' },
    { name: 'Humana Dental PPO', status: 'Out-of-Network · We file direct claims on your behalf' },
  ];

  const handleVerify = (insurerName: string) => {
    setSelectedInsurer(insurerName);
    const match = insurers.find((i) => i.name === insurerName);
    if (match) {
      setVerificationResult(match.status);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#DCE5E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header per Blueprint Section 48 */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0F5B5B]">
            Transparent Affordability
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
            Flexible Ways to Pay
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B6B] leading-relaxed">
            We believe world-class dental care should be accessible and financially clear. We maximize your insurance benefits and offer structured 0% interest payment solutions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Insurance */}
          <div className="p-6 rounded-3xl bg-[#FAFAF7] border border-[#DCE5E3] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#DDF3EE] text-[#0F5B5B] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#172323] mb-2 font-serif-display">
                Dental Insurance
              </h3>
              <p className="text-xs text-[#5F6B6B] leading-relaxed mb-4">
                In-network with major PPOs. We file and verify all claims directly so you never deal with insurance paperwork headaches.
              </p>
            </div>
            <div className="text-xs font-semibold text-[#0F5B5B] flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Complimentary benefit check</span>
            </div>
          </div>

          {/* Card 2: 0% Financing */}
          <div className="p-6 rounded-3xl bg-[#FAFAF7] border border-[#DCE5E3] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#DDF3EE] text-[#0F5B5B] flex items-center justify-center mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#172323] mb-2 font-serif-display">
                Monthly Payment Plans
              </h3>
              <p className="text-xs text-[#5F6B6B] leading-relaxed mb-4">
                Split out-of-pocket balances or cosmetic treatments into predictable monthly payments with 0% APR via CareCredit & Sunbit.
              </p>
            </div>
            <div className="text-xs font-semibold text-[#0F5B5B] flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Zero impact on credit score to check</span>
            </div>
          </div>

          {/* Card 3: HSA & FSA */}
          <div className="p-6 rounded-3xl bg-[#FAFAF7] border border-[#DCE5E3] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#DDF3EE] text-[#0F5B5B] flex items-center justify-center mb-4">
                <PiggyBank className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#172323] mb-2 font-serif-display">
                HSA & FSA Accounts
              </h3>
              <p className="text-xs text-[#5F6B6B] leading-relaxed mb-4">
                Utilize your pre-tax Flexible Spending or Health Savings dollars for cleanings, crowns, implants, or clear aligner therapies.
              </p>
            </div>
            <div className="text-xs font-semibold text-[#0F5B5B] flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Use remaining yearly funds</span>
            </div>
          </div>

          {/* Card 4: In-House Membership */}
          <div className="p-6 rounded-3xl bg-[#0F5B5B] text-white border border-[#0F5B5B] flex flex-col justify-between relative shadow-md">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/20 text-[#DDF3EE] flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#F4B39A] font-bold mb-1">
                No Insurance?
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-serif-display">
                Verdant Wellness Plan
              </h3>
              <p className="text-xs text-teal-100 leading-relaxed mb-4">
                $32/month covers 2 cleanings, annual exams, all x-rays, plus 20% off all procedures. No wait periods or deductibles.
              </p>
            </div>
            <div className="text-xs font-semibold text-[#DDF3EE] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B39A]" />
              <span>Instant activation upon signup</span>
            </div>
          </div>
        </div>

        {/* Interactive Insurance Instant Checker */}
        <div className="bg-[#FAFAF7] rounded-3xl p-6 sm:p-8 border border-[#DCE5E3]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-[#172323] font-serif-display">
                Check Your Insurance Network Coverage
              </h4>
              <p className="text-xs text-[#5F6B6B]">
                Select your dental provider below for instant status:
              </p>
            </div>

            <div className="md:col-span-7 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <select
                  value={selectedInsurer}
                  onChange={(e) => handleVerify(e.target.value)}
                  className="w-full appearance-none bg-white border border-[#DCE5E3] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#172323] focus:outline-none focus:border-[#0F5B5B]"
                >
                  <option value="">-- Choose Dental Insurance Carrier --</option>
                  {insurers.map((ins) => (
                    <option key={ins.name} value={ins.name}>
                      {ins.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#5F6B6B] absolute right-3 top-3.5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Verification Result Banner */}
          {verificationResult && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between animate-in fade-in duration-150">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  <strong>{selectedInsurer}:</strong> {verificationResult}
                </span>
              </div>
              <span className="font-semibold text-emerald-800 text-[11px] hidden sm:inline">
                Zero claim paperwork for you
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
