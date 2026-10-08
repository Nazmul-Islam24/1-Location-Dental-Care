import React from 'react';
import { ArrowRight, Heart, ShieldCheck } from 'lucide-react';
import whyVerdantChoose from '../assets/images/why-verdant-choose.avif'


interface HomeWhyUsSnippetProps {
  onReadMoreAboutUs: () => void;
}

export const HomeWhyUsSnippet: React.FC<HomeWhyUsSnippetProps> = ({ onReadMoreAboutUs }) => {
  return (
    <section className="py-10 md:py-16 bg-[#FAFAF7] border-b border-[#DCE5E3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DESKTOP LAYOUT (md and up): Left image of Verdant Dental hospital, Right texts & button */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Verdant Dental Hospital Image */}
          <div className="md:col-span-5 lg:col-span-6 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#DCE5E3] aspect-[4/3] lg:aspect-[16/11]">
              <img
                src={whyVerdantChoose}
                alt="Verdant Dental Hospital & Clinic Practice"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/60 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#172323] block">Verdant Dental Hospital</span>
                  <span className="text-[11px] text-[#5F6B6B]">Grand Central Manhattan Suite</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-[#0F5B5B]" />
                  <span>Accredited</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Philosophy Text Content */}
          <div className="md:col-span-7 lg:col-span-6 space-y-4 lg:space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" />
              <span>Patient-First Philosophy</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
              Why Patients Choose Verdant
            </h2>

            <p className="text-lg lg:text-xl font-medium text-[#0F5B5B] font-serif-display">
              A dental experience that puts your comfort and trust first.
            </p>

            <p className="text-base lg:text-lg text-[#5F6B6B] leading-relaxed font-sans-body">
              We built our practice on a simple belief: high-quality clinical dentistry should never feel intimidating, rushed, or confusing. Every visit is designed with gentle touch, clear communication, and modern technology.
            </p>

            <div className="pt-2">
              <button
                onClick={onReadMoreAboutUs}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-semibold text-sm shadow-xs hover:shadow-md transition-all cursor-pointer group"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#DDF3EE] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE / SMALL SCREEN LAYOUT (< md):
            Image on top, and text starts from 60% of the image's height towards the bottom with
            background color starting light/transparent and transitioning down to 60% solidity.
        */}
        <div className="md:hidden relative rounded-3xl overflow-hidden border border-[#DCE5E3] shadow-md bg-[#172323]">
          {/* Top image */}
          <div className="relative w-full h-72">
            <img
              src={whyVerdantChoose}
              alt="Verdant Dental Hospital"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/60 shadow-xs flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#172323]">Verdant Dental Hospital</span>
            </div>
          </div>

          {/* Overlapping text container starting from 60% height mark of image with gradient starting at 0% solidity and smoothly increasing to 100% full solidity at the bottom */}
          <div
            className="-mt-32 relative z-10 p-5 pt-10 sm:p-6 sm:pt-12 space-y-4 text-left"
            style={{
              background: 'linear-gradient(to bottom, rgba(23, 35, 35, 0) 0%, rgba(23, 35, 35, 0.4) 18%, rgba(23, 35, 35, 0.8) 45%, rgba(23, 35, 35, 1) 75%, rgba(23, 35, 35, 1) 100%)'
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F5B5B]/90 text-[#DDF3EE] text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Heart className="w-3.5 h-3.5" />
              <span>Patient-First Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-serif-display drop-shadow-md">
              Why Patients Choose Verdant
            </h2>

            <p className="text-base sm:text-lg font-medium text-[#DDF3EE] font-serif-display drop-shadow-sm">
              A dental experience that puts your comfort and trust first.
            </p>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans-body">
              We built our practice on a simple belief: high-quality clinical dentistry should never feel intimidating, rushed, or confusing. Every visit is designed with gentle touch, clear communication, and modern technology.
            </p>

            <div className="pt-2">
              <button
                onClick={onReadMoreAboutUs}
                className="w-full justify-center inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-semibold text-sm shadow-md transition-all cursor-pointer group"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#DDF3EE] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
