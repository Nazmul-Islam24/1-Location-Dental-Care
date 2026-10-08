import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { clinicGallery } from '../data/clinicData';

export const ClinicGallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % clinicGallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + clinicGallery.length) % clinicGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-10 md:py-16 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0F5B5B]">
            Clinic Environment
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
            A Space Designed Around Your Comfort
          </h2>
          <p className="text-base sm:text-lg text-[#5F6B6B] leading-relaxed">
            Step inside our light-filled Manhattan suite. Natural wood finishes, soundproof suites, and calming botanical accents replace clinical coldness.
          </p>
        </div>

        {/* Gallery Grid showing all spaces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicGallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#DCE5E3] shadow-xs cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="h-64 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <div className="flex items-center gap-2 text-xs font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <ZoomIn className="w-4 h-4" />
                  <span>Enlarge View</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 bg-white">
                <span className="text-[10px] uppercase font-bold text-[#0F5B5B] tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-[#172323] leading-snug font-serif-display">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5F6B6B] mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
              <img
                src={clinicGallery[selectedImageIndex].image}
                alt={clinicGallery[selectedImageIndex].title}
                className="max-h-[65vh] w-auto rounded-2xl object-contain border border-white/10 shadow-2xl"
              />
              <div className="text-center mt-4 text-white space-y-1">
                <h3 className="text-lg font-bold font-serif-display">
                  {clinicGallery[selectedImageIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {clinicGallery[selectedImageIndex].caption}
                </p>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
