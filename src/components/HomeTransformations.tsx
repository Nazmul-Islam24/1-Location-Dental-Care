import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { clinicalTransformationsData, TransformationItem } from '../data/beforeAfterData';
import { ComparisonSlider } from './ComparisonSlider';

interface HomeTransformationsProps {
  onViewFullGallery: () => void;
}

export const HomeTransformations: React.FC<HomeTransformationsProps> = ({ onViewFullGallery }) => {
  // Exactly 2 featured cases for Home
  const featuredCases: TransformationItem[] = clinicalTransformationsData.slice(0, 2);

  return (
    <section className="py-10 md:py-16 bg-white border-b border-[#DCE5E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clinical Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
              Real Patient Smile Results
            </h2>
            <p className="text-sm sm:text-base text-[#5F6B6B] leading-relaxed">
              Explore how personalized, conservative dentistry transforms everyday confidence. Drag the slidebar to compare before and after.
            </p>
          </div>

          <button
            onClick={onViewFullGallery}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F5B5B] hover:text-[#0c4848] transition-colors cursor-pointer shrink-0 self-start md:self-auto"
          >
            <span>View Full Patient Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2 Featured Transformation Cards with Interactive Slidebar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredCases.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFAF7] rounded-3xl border border-[#DCE5E3] overflow-hidden p-5 sm:p-6 space-y-4 shadow-xs hover:border-[#0F5B5B]/50 transition-colors flex flex-col justify-between"
            >
              {/* Interactive Draggable Slidebar Image Comparison */}
              <ComparisonSlider
                beforeImg={item.beforeImg}
                afterImg={item.afterImg}
                title={item.title}
                heightClass="h-60 sm:h-72"
              />

              {/* Title & Category (Initial Problem & Result/Benefits removed per user request) */}
              <div className="pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F5B5B] block mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172323] font-serif-display leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Full Gallery */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewFullGallery}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
          >
            <span>Explore Full Patient Transformations Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#DDF3EE]" />
          </button>
        </div>

      </div>
    </section>
  );
};
