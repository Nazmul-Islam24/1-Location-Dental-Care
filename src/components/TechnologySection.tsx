import React from 'react';
import { Scan, Activity, Cpu, Zap, CheckCircle2 } from 'lucide-react';
import { technologyData } from '../data/clinicData';

export const TechnologySection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Scan':
        return <Scan className="w-6 h-6 text-[#0F5B5B]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#0F5B5B]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#0F5B5B]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#0F5B5B]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#0F5B5B]" />;
    }
  };

  return (
    <section className="py-10 md:py-16 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header per Blueprint Section 49 */}
        <div className="max-w-3xl mb-8 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0F5B5B]">
            Clinical Innovation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
            Modern Technology, Thoughtful Care.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B6B] leading-relaxed">
            We invest in advanced digital dental systems that genuinely elevate your clinical comfort, eliminate messy impressions, and speed up recovery times.
          </p>
        </div>

        {/* 4 Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologyData.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE5E3] hover:border-[#0F5B5B]/40 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#DDF3EE] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(tech.icon)}
                </div>

                <div className="text-[11px] font-bold text-[#0F5B5B] uppercase tracking-wider mb-1">
                  {tech.subtitle}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#172323] mb-3 font-serif-display leading-snug">
                  {tech.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6B6B] leading-relaxed font-sans-body">
                  {tech.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE5E3]/60 flex items-center gap-1.5 text-[11px] text-[#0F5B5B] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero extra charge</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
