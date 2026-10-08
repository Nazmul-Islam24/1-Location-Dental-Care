import React, { useState } from 'react';
import { ClinicPreset } from './types/clinic';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar, AppPage } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { DoctorsPage } from './components/DoctorsPage';
import { AboutUsPage } from './components/AboutUsPage';
import { FaqPage } from './components/FaqPage';
import { BookAppointmentPage } from './components/BookAppointmentPage';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileStickyCta } from './components/MobileStickyCta';
import { presetConfig } from './data/clinicData';

export default function App() {
  const [currentPreset, setCurrentPreset] = useState<ClinicPreset>('family');
  const [activePage, setActivePage] = useState<AppPage>('home');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingServicePrefill, setBookingServicePrefill] = useState<string>('');
  const [bookingDoctorPrefill, setBookingDoctorPrefill] = useState<string>('');

  const handleNavigate = (page: AppPage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (slug: string) => {
    setSelectedServiceSlug(slug);
    setActivePage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDoctorFromNavbar = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
    setActivePage('doctors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToPatientGallery = () => {
    setActivePage('services');
    setTimeout(() => {
      const el = document.getElementById('patient-gallery');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const openBookingWithService = (serviceName: string) => {
    setBookingServicePrefill(serviceName);
    setBookingDoctorPrefill('');
    setActivePage('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBookingWithDoctor = (doctorName: string) => {
    setBookingDoctorPrefill(doctorName);
    setBookingServicePrefill('');
    setActivePage('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openGeneralBooking = () => {
    setActivePage('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const preset = presetConfig[currentPreset];

  return (
    <div
      className={`min-h-screen w-full text-[#172323] transition-colors duration-300 ${
        preset.themeMode === 'premium' ? 'bg-[#F7F3EC]' : 'bg-[#FAFAF7]'
      }`}
    >
      {/* 01. Static Announcement Bar */}
      <AnnouncementBar
        currentPreset={currentPreset}
        onOpenBooking={openGeneralBooking}
      />

      {/* 02. Static Navigation Bar on all screens (stays pinned at top during scroll) */}
      <Navbar
        currentPreset={currentPreset}
        activePage={activePage}
        onNavigate={(page) => {
          setSelectedServiceSlug(null);
          setSelectedDoctorId(null);
          handleNavigate(page);
        }}
        onSelectServiceSlug={handleSelectService}
        onSelectDoctorId={handleSelectDoctorFromNavbar}
        onNavigateToPatientGallery={handleNavigateToPatientGallery}
        onOpenBookingModal={() => setBookingModalOpen(true)}
      />

      {/* Main Content: Switches depending on active page */}
      <main className="w-full pb-16 md:pb-0">
        {activePage === 'home' && (
          <HomePage
            currentPreset={currentPreset}
            onOpenBooking={openGeneralBooking}
            onNavigateToAbout={() => handleNavigate('about')}
            onNavigateToServices={() => handleNavigate('services')}
            onSelectServiceAndNavigate={handleSelectService}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onSelectService={handleSelectService}
            onOpenBookingWithService={openBookingWithService}
          />
        )}

        {/* Dedicated Individual Service Detail Page (Direct redirect, NO modal) */}
        {activePage === 'service-detail' && (
          <ServiceDetailPage
            serviceSlug={selectedServiceSlug || 'general-checkup'}
            onBackToServices={() => {
              setSelectedServiceSlug(null);
              handleNavigate('services');
            }}
            onBookThisService={(serviceName) => openBookingWithService(serviceName)}
            onSelectOtherService={(slug) => {
              setSelectedServiceSlug(slug);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'doctors' && (
          <DoctorsPage
            onBookWithDoctor={openBookingWithDoctor}
            initialSelectedDoctorId={selectedDoctorId}
          />
        )}

        {activePage === 'about' && (
          <AboutUsPage
            onOpenBooking={openGeneralBooking}
            onNavigateToServices={() => handleNavigate('services')}
          />
        )}

        {activePage === 'faq' && (
          <FaqPage
            onOpenBooking={openGeneralBooking}
          />
        )}

        {activePage === 'book' && (
          <BookAppointmentPage
            initialService={bookingServicePrefill}
            initialDoctor={bookingDoctorPrefill}
          />
        )}

        {/* 
          03. LocationSection: Automatically rendered at the bottom of EVERY page!
          - Phone in button.
          - Email link.
          - Book Now button.
          - Small screen responsive order: Map on TOP, details & hours on BOTTOM.
        */}
        <LocationSection
          onNavigateToBooking={() => handleNavigate('book')}
        />
      </main>

      {/* 
        04. Footer: Automatically rendered at the bottom of EVERY page!
        - Social icons include Yelp alongside Instagram, Facebook, LinkedIn.
        - Privacy policy, accessibility, and HTML sitemap are hidden.
        - Copyright text is centered.
      */}
      <Footer
        onNavigate={(p) => handleNavigate(p as AppPage)}
        onOpenBooking={openGeneralBooking}
        onSelectServiceSlug={handleSelectService}
      />

      {/* Floating Call Clinic & Book Visit Dual CTA for small screens */}
      <MobileStickyCta onOpenBooking={openGeneralBooking} />

      {/* Quick Booking Modal available if triggered from popups */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={bookingServicePrefill}
        preselectedDoctor={bookingDoctorPrefill}
      />
    </div>
  );
}
