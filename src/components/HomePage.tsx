import React from 'react';
import { Hero } from './Hero';
import { HomeWhyUsSnippet } from './HomeWhyUsSnippet';
import { HomeFeaturedServices } from './HomeFeaturedServices';
import { HomeTransformations } from './HomeTransformations';
import { PatientStories } from './PatientStories';
import { ClinicPreset } from '../types/clinic';

interface HomePageProps {
  currentPreset: ClinicPreset;
  onOpenBooking: () => void;
  onNavigateToAbout: () => void;
  onNavigateToServices: () => void;
  onSelectServiceAndNavigate: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentPreset,
  onOpenBooking,
  onNavigateToAbout,
  onNavigateToServices,
  onSelectServiceAndNavigate,
}) => {
  return (
    <div className="w-full">
      {/* 01. Hero with integrated 4 animated counters */}
      <Hero
        currentPreset={currentPreset}
        onOpenBooking={onOpenBooking}
        onExploreTreatments={onNavigateToServices}
      />

      {/* 02. Why Patients Choose Verdant snippet with Read More About Us button */}
      <HomeWhyUsSnippet onReadMoreAboutUs={onNavigateToAbout} />

      {/* 03. Popular Dental Treatments clickable cards linking to Services */}
      <HomeFeaturedServices
        onSelectServiceAndNavigate={onSelectServiceAndNavigate}
        onViewAllServices={onNavigateToServices}
      />

      {/* 04. Clinical Transformations: exactly 2 items with concise notes & link to full gallery */}
      <HomeTransformations onViewFullGallery={onNavigateToServices} />

      {/* 05. Verified Patient Google Reviews with smooth single-line animation */}
      <PatientStories />

      {/* 06. Final Warm CTA before Find Our Practice section */}
      <section className="py-10 md:py-12 bg-[#0F5B5B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-display">
            Ready to Experience Stress-Free Dental Care?
          </h2>
          <p className="text-base text-gray-200 max-w-2xl mx-auto">
            Join thousands of Manhattan families who look forward to visiting the dentist.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-white text-[#0F5B5B] font-bold text-sm shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Book Your First Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
