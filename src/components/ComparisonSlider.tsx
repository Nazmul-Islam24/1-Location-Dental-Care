import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface ComparisonSliderProps {
  beforeImg: string;
  afterImg: string;
  title: string;
  heightClass?: string; // e.g. "h-56 sm:h-64" or "h-48 sm:h-56"
}

export const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImg,
  afterImg,
  title,
  heightClass = 'h-52 sm:h-60',
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignore if pointer capture already lost
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full ${heightClass} rounded-2xl overflow-hidden select-none cursor-ew-resize bg-gray-900 shadow-xs border border-[#DCE5E3] touch-none group`}
      aria-label={`Slide to compare before and after for ${title}`}
    >
      {/* Background Layer: AFTER IMAGE */}
      <img
        src={afterImg}
        alt={`${title} After Treatment`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <span className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-md bg-[#0F5B5B]/90 backdrop-blur-xs text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm pointer-events-none">
        After
      </span>

      {/* Foreground Layer: BEFORE IMAGE (clipped according to sliderPosition) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={beforeImg}
          alt={`${title} Before Treatment`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm pointer-events-none">
          Before
        </span>
      </div>

      {/* Vertical Slider Bar Divider with interactive Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-lg border-2 border-[#0F5B5B] flex items-center justify-center text-[#0F5B5B] group-hover:scale-105 active:scale-110 transition-transform">
          <ArrowLeftRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
      </div>

      {/* Subtle floating bottom hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none px-2.5 py-0.5 rounded-full bg-black/55 backdrop-blur-xs text-white/90 text-[10px] font-medium whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
        Slide ⟷ to compare
      </div>

      {/* Native Range Input for accessibility & keyboard support */}
      <input
        type="range"
        min={0}
        max={100}
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="sr-only"
        aria-label={`Slide left or right to compare ${title}`}
      />
    </div>
  );
};
