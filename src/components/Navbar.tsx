import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Calendar,
  Phone,
  ChevronDown,
  ChevronRight,
  Layers,
  Sparkles,
  Award,
  ArrowRight,
} from 'lucide-react';
import { ClinicPreset } from '../types/clinic';
import { all14DentalServices } from '../data/dentalServicesData';
import { doctorsData } from '../data/clinicData';

export type AppPage = 'home' | 'services' | 'service-detail' | 'doctors' | 'about' | 'faq' | 'book';

interface NavbarProps {
  currentPreset?: ClinicPreset;
  activePage: AppPage;
  onNavigate: (page: AppPage) => void;
  onSelectServiceSlug?: (slug: string) => void;
  onSelectDoctorId?: (doctorId: string) => void;
  onNavigateToPatientGallery?: () => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onSelectServiceSlug,
  onSelectDoctorId,
  onNavigateToPatientGallery,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop hover states with soft debounce
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [allServicesSubmenuOpen, setAllServicesSubmenuOpen] = useState(false);
  const [doctorsDropdownOpen, setDoctorsDropdownOpen] = useState(false);

  // Mobile accordion states
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileDoctorsExpanded, setMobileDoctorsExpanded] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const allServicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const doctorsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (allServicesTimeoutRef.current) clearTimeout(allServicesTimeoutRef.current);
      if (doctorsTimeoutRef.current) clearTimeout(doctorsTimeoutRef.current);
    };
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
      setAllServicesSubmenuOpen(false);
    }, 200);
  };

  const handleAllServicesEnter = () => {
    if (allServicesTimeoutRef.current) clearTimeout(allServicesTimeoutRef.current);
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setAllServicesSubmenuOpen(true);
  };

  const handleAllServicesLeave = () => {
    allServicesTimeoutRef.current = setTimeout(() => {
      setAllServicesSubmenuOpen(false);
    }, 220);
  };

  const handleDoctorsEnter = () => {
    if (doctorsTimeoutRef.current) clearTimeout(doctorsTimeoutRef.current);
    setDoctorsDropdownOpen(true);
  };

  const handleDoctorsLeave = () => {
    doctorsTimeoutRef.current = setTimeout(() => {
      setDoctorsDropdownOpen(false);
    }, 180);
  };

  const handleNavClick = (page: AppPage) => {
    onNavigate(page);
    setServicesDropdownOpen(false);
    setAllServicesSubmenuOpen(false);
    setDoctorsDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (slug: string) => {
    onSelectServiceSlug?.(slug);
    setServicesDropdownOpen(false);
    setAllServicesSubmenuOpen(false);
    setMobileMenuOpen(false);
  };

  const handleSelectDoctor = (doctorId: string) => {
    onSelectDoctorId?.(doctorId);
    setDoctorsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handlePatientGalleryClick = () => {
    onNavigateToPatientGallery?.();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAF7]/98 backdrop-blur-md shadow-md border-b border-[#DCE5E3]'
          : 'bg-[#FAFAF7] border-b border-[#DCE5E3]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20 gap-3 w-full">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group shrink-0 text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0F5B5B] flex items-center justify-center text-white shadow-xs group-hover:bg-[#0c4848] transition-colors shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-[#DDF3EE]"
              >
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6.5 2.5 10 .5 2 1.5 4 3.5 4s3-2 3.5-4c1-3.5 2.5-6.5 2.5-10 0-3.5-2.5-6-6-6z" />
                <path d="M10 8c1-1 3-1 4 0" />
              </svg>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F5B5B] font-serif-display whitespace-nowrap block leading-tight">
                Verdant Dental
              </span>
              <span className="text-[10px] text-[#5F6B6B] font-medium tracking-wide uppercase hidden sm:block">
                Midtown & Brooklyn
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-nowrap shrink-0">
            {/* 1. Home Link */}
            <button
              onClick={() => handleNavClick('home')}
              className={`whitespace-nowrap text-sm font-semibold px-3 xl:px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activePage === 'home'
                  ? 'bg-[#0F5B5B] text-white shadow-xs'
                  : 'text-[#2D3F3F] hover:text-[#0F5B5B] hover:bg-[#DDF3EE]/60'
              }`}
            >
              Home
            </button>

            {/* 2. Services Link with Hover Dropdown (All Services -> Service Items, & Patient Gallery) */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`whitespace-nowrap text-sm font-semibold px-3 xl:px-4 py-2 rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                  activePage === 'services'
                    ? 'bg-[#0F5B5B] text-white shadow-xs'
                    : 'text-[#2D3F3F] hover:text-[#0F5B5B] hover:bg-[#DDF3EE]/60'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-current' : 'opacity-70'
                  }`}
                />
              </button>

              {/* Services Dropdown Panel: ONLY 2 Items (All Services & Patient Gallery) */}
              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1.5 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-[#DCE5E3] p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  {/* Item 1: All Services with Right-Side Flyout Submenu */}
                  <div
                    className="relative"
                    onMouseEnter={handleAllServicesEnter}
                    onMouseLeave={handleAllServicesLeave}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`w-full p-3 rounded-xl transition-all flex items-center justify-between group/all cursor-pointer ${
                        allServicesSubmenuOpen
                          ? 'bg-[#DDF3EE] text-[#0F5B5B]'
                          : 'bg-white hover:bg-[#FAFAF7] text-[#172323]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            allServicesSubmenuOpen
                              ? 'bg-[#0F5B5B] text-white'
                              : 'bg-[#DDF3EE] text-[#0F5B5B]'
                          }`}
                        >
                          <Layers className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <span className="text-xs font-bold block leading-tight">
                            All Services
                          </span>
                          <span className="text-[10px] text-[#5F6B6B]">
                            14 Comprehensive Specialties
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          allServicesSubmenuOpen
                            ? 'text-[#0F5B5B] translate-x-1'
                            : 'text-gray-400 group-hover/all:translate-x-0.5'
                        }`}
                      />
                    </button>

                    {/* Desktop Right-Side Flyout Submenu */}
                    {allServicesSubmenuOpen && (
                      <div
                        className="absolute left-full top-0 ml-1.5 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-[#DCE5E3] p-2.5 z-50 animate-in fade-in slide-in-from-left-2 duration-150"
                        onMouseEnter={handleAllServicesEnter}
                        onMouseLeave={handleAllServicesLeave}
                      >
                        <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-[#DCE5E3] mb-1.5">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-[#0F5B5B]">
                            Dental Specialties
                          </span>
                          <button
                            onClick={() => handleNavClick('services')}
                            className="text-[10px] font-semibold text-[#5F6B6B] hover:text-[#0F5B5B] hover:underline cursor-pointer"
                          >
                            All Services Page →
                          </button>
                        </div>

                        {/* Vertical list of all individual service names */}
                        <div className="max-h-[380px] overflow-y-auto space-y-0.5 pr-1">
                          {all14DentalServices.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => handleSelectService(service.slug)}
                              className="w-full text-left px-2.5 py-2 rounded-xl text-xs font-medium text-[#2D3F3F] hover:bg-[#DDF3EE] hover:text-[#0F5B5B] transition-colors flex items-center justify-between group/sub cursor-pointer"
                            >
                              <div className="flex items-center gap-2 truncate">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0F5B5B]/40 group-hover/sub:bg-[#0F5B5B] shrink-0" />
                                <span className="truncate group-hover/sub:font-bold">{service.title}</span>
                              </div>
                              <span className="text-[9px] text-[#5F6B6B] group-hover/sub:text-[#0F5B5B] ml-2 shrink-0 font-medium">
                                {service.category}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Item 2: Patient Gallery */}
                  <button
                    onClick={handlePatientGalleryClick}
                    className="w-full mt-1.5 p-3 rounded-xl bg-white hover:bg-[#FAFAF7] hover:border-[#0F5B5B]/30 border border-transparent transition-all flex items-center justify-between group/gal cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0F5B5B] text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Sparkles className="w-4 h-4 text-[#DDF3EE]" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-bold text-[#172323] group-hover/gal:text-[#0F5B5B] transition-colors block leading-tight">
                          Patient Gallery
                        </span>
                        <span className="text-[10px] text-[#5F6B6B]">
                          Real Before & After Case Results
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#0F5B5B] group-hover/gal:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>

            {/* 3. Doctors Link with Hover Dropdown (All Doctors & Individual Profiles) */}
            <div
              className="relative"
              onMouseEnter={handleDoctorsEnter}
              onMouseLeave={handleDoctorsLeave}
            >
              <button
                onClick={() => handleNavClick('doctors')}
                className={`whitespace-nowrap text-sm font-semibold px-3 xl:px-4 py-2 rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                  activePage === 'doctors'
                    ? 'bg-[#0F5B5B] text-white shadow-xs'
                    : 'text-[#2D3F3F] hover:text-[#0F5B5B] hover:bg-[#DDF3EE]/60'
                }`}
              >
                <span>Doctors</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    doctorsDropdownOpen ? 'rotate-180 text-current' : 'opacity-70'
                  }`}
                />
              </button>

              {/* Doctors Dropdown Panel */}
              {doctorsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-84 sm:w-96 bg-white rounded-2xl shadow-xl border border-[#DCE5E3] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('doctors')}
                    className="w-full text-left px-3 py-2 rounded-xl bg-[#FAFAF7] hover:bg-[#DDF3EE]/70 text-xs font-bold text-[#0F5B5B] flex items-center justify-between cursor-pointer border border-[#DCE5E3] mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#0F5B5B]" />
                      <span>Meet All Board-Certified Doctors</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* List of each doctor dynamically rendered */}
                  <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
                    {doctorsData.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => handleSelectDoctor(doc.id)}
                        className="w-full text-left p-2 rounded-xl hover:bg-[#DDF3EE]/70 transition-colors flex items-center gap-2.5 group/doc cursor-pointer"
                      >
                        <img
                          src={doc.photo}
                          alt={doc.name}
                          className="w-9 h-9 rounded-full object-cover border border-[#0F5B5B]/30 group-hover/doc:border-[#0F5B5B] shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="text-xs font-bold text-[#172323] group-hover/doc:text-[#0F5B5B] transition-colors truncate">
                              {doc.name}
                            </h4>
                            <span className="text-[9px] font-bold text-[#0F5B5B] bg-[#DDF3EE] px-1.5 py-0.5 rounded shrink-0">
                              {doc.credentials}
                            </span>
                          </div>
                          <p className="text-[10px] text-[#5F6B6B] truncate">
                            {doc.specialty}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. About Us Link */}
            <button
              onClick={() => handleNavClick('about')}
              className={`whitespace-nowrap text-sm font-semibold px-3 xl:px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activePage === 'about'
                  ? 'bg-[#0F5B5B] text-white shadow-xs'
                  : 'text-[#2D3F3F] hover:text-[#0F5B5B] hover:bg-[#DDF3EE]/60'
              }`}
            >
              About Us
            </button>

            {/* 5. FAQ Link */}
            <button
              onClick={() => handleNavClick('faq')}
              className={`whitespace-nowrap text-sm font-semibold px-3 xl:px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activePage === 'faq'
                  ? 'bg-[#0F5B5B] text-white shadow-xs'
                  : 'text-[#2D3F3F] hover:text-[#0F5B5B] hover:bg-[#DDF3EE]/60'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* Right Action: Book Appointment CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone link on desktop */}
            <a
              href="tel:+12125550198"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-[#0F5B5B] bg-[#DDF3EE]/70 px-3 py-2 rounded-xl hover:bg-[#DDF3EE] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(212) 555-0198</span>
            </a>

            {/* Book Appointment Button - Prominent & within screen */}
            <button
              onClick={() => handleNavClick('book')}
              className={`inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer whitespace-nowrap ${
                activePage === 'book'
                  ? 'bg-[#0c4848] text-white ring-2 ring-[#0F5B5B]/30'
                  : 'bg-[#0F5B5B] hover:bg-[#0c4848] text-white hover:shadow-md'
              }`}
            >
              <Calendar className="w-4 h-4 text-[#DDF3EE] shrink-0" />
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book Visit</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#172323] hover:bg-[#DDF3EE] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFAF7] border-b border-[#DCE5E3] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                activePage === 'home'
                  ? 'bg-[#0F5B5B] text-white'
                  : 'text-[#172323] hover:bg-[#DDF3EE]/70'
              }`}
            >
              <span>Home</span>
              {activePage === 'home' && <span className="w-2 h-2 rounded-full bg-[#DDF3EE]" />}
            </button>

            {/* Services (Expandable) */}
            <div className="rounded-xl border border-[#DCE5E3] overflow-hidden bg-white/70">
              <div className="flex items-center justify-between px-4 py-2.5">
                <button
                  onClick={() => handleNavClick('services')}
                  className={`text-sm font-semibold text-left flex-1 cursor-pointer ${
                    activePage === 'services' || activePage === 'service-detail'
                      ? 'text-[#0F5B5B] font-bold'
                      : 'text-[#172323]'
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className="p-1 rounded-lg hover:bg-[#DDF3EE] text-[#0F5B5B] cursor-pointer"
                  aria-label="Toggle services list"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileServicesExpanded && (
                <div className="px-3 pb-3 pt-1 space-y-2.5 border-t border-[#DCE5E3]/60 bg-[#FAFAF7]">
                  {/* All Services & its vertical list */}
                  <div className="bg-white rounded-xl p-2.5 border border-[#DCE5E3] space-y-2">
                    <div className="flex items-center justify-between pb-1.5 border-b border-[#DCE5E3]/60">
                      <button
                        onClick={() => handleNavClick('services')}
                        className="text-xs font-bold text-[#0F5B5B] hover:underline flex items-center gap-1.5 cursor-pointer"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>All Services (Catalog)</span>
                      </button>
                      <span className="text-[10px] text-[#5F6B6B] font-semibold">14 Specialties</span>
                    </div>

                    {/* Vertical list of all individual service names on mobile */}
                    <div className="max-h-56 overflow-y-auto space-y-1 pr-1">
                      {all14DentalServices.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleSelectService(service.slug)}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs text-[#2D3F3F] hover:bg-[#DDF3EE] hover:text-[#0F5B5B] transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span className="truncate font-medium">{service.title}</span>
                          <span className="text-[9px] text-[#5F6B6B] ml-2 shrink-0">{service.category}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Patient Gallery */}
                  <button
                    onClick={handlePatientGalleryClick}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#DDF3EE] border border-[#DCE5E3] text-xs font-bold text-[#0F5B5B] flex items-center justify-between cursor-pointer shadow-2xs"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Patient Gallery</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Doctors (Expandable) */}
            <div className="rounded-xl border border-[#DCE5E3] overflow-hidden bg-white/70">
              <div className="flex items-center justify-between px-4 py-2.5">
                <button
                  onClick={() => handleNavClick('doctors')}
                  className={`text-sm font-semibold text-left flex-1 cursor-pointer ${
                    activePage === 'doctors' ? 'text-[#0F5B5B] font-bold' : 'text-[#172323]'
                  }`}
                >
                  Doctors Page
                </button>
                <button
                  onClick={() => setMobileDoctorsExpanded(!mobileDoctorsExpanded)}
                  className="p-1 rounded-lg hover:bg-[#DDF3EE] text-[#0F5B5B] cursor-pointer"
                  aria-label="Toggle doctors list"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileDoctorsExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileDoctorsExpanded && (
                <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-[#DCE5E3]/60 bg-[#FAFAF7]">
                  <div className="text-[11px] font-bold text-[#0F5B5B] uppercase tracking-wider px-2 pt-1">
                    Select Doctor Profile
                  </div>
                  <div className="max-h-48 overflow-y-auto space-y-1">
                    {doctorsData.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => handleSelectDoctor(doc.id)}
                        className="w-full text-left p-2 rounded-lg hover:bg-[#DDF3EE] transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        <img
                          src={doc.photo}
                          alt={doc.name}
                          className="w-7 h-7 rounded-full object-cover shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="text-xs font-semibold text-[#172323] truncate block">
                            {doc.name}
                          </span>
                          <span className="text-[10px] text-[#5F6B6B] truncate block">
                            {doc.specialty}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                activePage === 'about'
                  ? 'bg-[#0F5B5B] text-white'
                  : 'text-[#172323] hover:bg-[#DDF3EE]/70'
              }`}
            >
              <span>About Us</span>
              {activePage === 'about' && <span className="w-2 h-2 rounded-full bg-[#DDF3EE]" />}
            </button>

            {/* FAQ */}
            <button
              onClick={() => handleNavClick('faq')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                activePage === 'faq'
                  ? 'bg-[#0F5B5B] text-white'
                  : 'text-[#172323] hover:bg-[#DDF3EE]/70'
              }`}
            >
              <span>FAQ</span>
              {activePage === 'faq' && <span className="w-2 h-2 rounded-full bg-[#DDF3EE]" />}
            </button>

            {/* Book Appointment CTA in mobile drawer */}
            <button
              onClick={() => handleNavClick('book')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer mt-2 ${
                activePage === 'book'
                  ? 'bg-[#0F5B5B] text-white'
                  : 'bg-[#DDF3EE] text-[#0F5B5B]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </span>
              <span className="text-xs uppercase tracking-wider font-bold">Now</span>
            </button>
          </div>

          <div className="pt-3 border-t border-[#DCE5E3] flex items-center justify-between text-xs text-[#5F6B6B] px-2">
            <span>Call us directly:</span>
            <a href="tel:+12125550198" className="font-bold text-[#0F5B5B] flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>(212) 555-0198</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
