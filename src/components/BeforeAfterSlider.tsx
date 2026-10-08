import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Shield, ArrowLeftRight, Check, Eye } from 'lucide-react';
import veneersBefore from '../assets/images/veneers-before.avif'
import veneersAfter from '../assets/images/veneers-after.avif'



interface CaseStudy {
  id: string;
  title: string;
  procedure: string;
  doctor: string;
  timeline: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

export const BeforeAfterSlider: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      id: 'veneers',
      title: 'Smile Harmonization & Micro-Thin Veneers',
      procedure: '6 Handcrafted Feldspathic Porcelain Veneers + Gentle Laser Gum Contouring',
      doctor: 'Dr. Sarah Williams, DDS',
      timeline: '2 visits over 14 days',
      description:
        'Patient presented with chipped edges, asymmetrical tooth lengths, and tetracycline staining. Rebuilt with high-translucency ceramic matching natural enamel gradients.',
      beforeImg: veneersBefore,
      afterImg: veneersAfter,
    },
    {
      id: 'implants',
      title: 'Single Incisor Replacement via 3D Guided Implant',
      procedure: '3D Computer-Guided Titanium Implant + Custom Zirconia Crown',
      doctor: 'Dr. Marcus Vance, DMD',
      timeline: '3 months full osseointegration',
      description:
        'Traumatic loss of upper central incisor restored without touching neighboring healthy teeth. Gum contour preserved seamlessly.',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
      afterImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'aligners',
      title: 'Discreet Clear Aligner Crowding Correction',
      procedure: 'Custom Orthodontic Clear Aligners + In-Office LED Brightening',
      doctor: 'Dr. Elena Rostova, DDS',
      timeline: '7 months active wear',
      description:
        'Severe lower arch crowding and crossbite corrected with 24 clear tray stages. No metal brackets, zero soft tissue abrasions.',
      beforeImg: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
      afterImg: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const activeCase = cases[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#DCE5E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
            Real Before & After Smile Results
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B6B] leading-relaxed">
            Drag the slider to compare original dental health presentations with completed aesthetic and restorative treatments.
          </p>
        </div>

        {/* Case Study Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCaseIndex(i);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCaseIndex === i
                  ? 'bg-[#0F5B5B] text-white shadow-xs'
                  : 'bg-[#FAFAF7] border border-[#DCE5E3] text-[#5F6B6B] hover:text-[#172323]'
              }`}
            >
              Case {i + 1}: {c.id.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Workspace */}
        <div className="bg-[#FAFAF7] rounded-3xl p-6 sm:p-10 border border-[#DCE5E3]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: The Interactive Slider per Blueprint Section 17 */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-md border border-[#DCE5E3]"
                onMouseDown={() => (isDragging.current = true)}
                onMouseUp={() => (isDragging.current = false)}
                onMouseLeave={() => (isDragging.current = false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* Background Image (AFTER) */}
                <img
                  src={activeCase.afterImg}
                  alt={`${activeCase.title} After treatment result`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <span className="absolute top-4 right-4 bg-[#0F5B5B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  AFTER
                </span>

                {/* Foreground Clipped Image (BEFORE) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeCase.beforeImg}
                    alt={`${activeCase.title} Before treatment representation`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{
                      width: containerRef.current
                        ? `${containerRef.current.clientWidth}px`
                        : '100%',
                      height: '100%',
                    }}
                  />
                  <span className="absolute top-4 left-4 bg-black/75 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    BEFORE
                  </span>
                </div>

                {/* Vertical Divider Line with Grab Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-xl pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-md border-2 border-[#0F5B5B] flex items-center justify-center text-[#0F5B5B]">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Slider Range helper */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#5F6B6B]">
                <span>← Slide left to reveal AFTER</span>
                <span className="font-semibold text-[#0F5B5B]">Drag handle or touch</span>
                <span>Slide right to reveal BEFORE →</span>
              </div>
            </div>

            {/* Right: Clinical Case Details */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0F5B5B] bg-[#DDF3EE] px-3 py-1 rounded-full">
                Documented Case Study
              </span>

              <h3 className="text-2xl font-bold text-[#172323] font-serif-display">
                {activeCase.title}
              </h3>

              <div className="p-3.5 bg-white rounded-xl border border-[#DCE5E3] text-xs space-y-1.5">
                <div className="text-[#5F6B6B]">
                  <strong>Clinical Protocol:</strong> {activeCase.procedure}
                </div>
                <div className="text-[#5F6B6B]">
                  <strong>Treating Clinician:</strong> {activeCase.doctor}
                </div>
                <div className="text-[#5F6B6B]">
                  <strong>Treatment Duration:</strong> {activeCase.timeline}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5F6B6B] leading-relaxed">
                {activeCase.description}
              </p>

              {/* Blueprint Consent & Ethics Notice */}
              <div className="flex items-start gap-2 text-[11px] text-[#5F6B6B] pt-2 border-t border-[#DCE5E3]">
                <Shield className="w-4 h-4 text-[#0F5B5B] shrink-0 mt-0.5" />
                <span>
                  <strong>Ethical disclosure:</strong> Individual anatomical responses vary. All clinical transformations are shown with explicit written patient consent under HIPAA compliance.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
