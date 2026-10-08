import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import { weeklyOperatingHours, getTodaySchedule } from '../data/operatingHours';

interface FooterProps {
  onNavigate?: (page: string) => void;
  onOpenBooking: () => void;
  onSelectServiceSlug?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking, onSelectServiceSlug }) => {
  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Doctors', page: 'doctors' },
    { label: 'About Us', page: 'about' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Book Appointment', page: 'book' },
  ];

  const popularTreatments = [
    { name: 'General Checkup', slug: 'general-checkup' },
    { name: 'Dental Cleaning / Gum Treatment', slug: 'dental-cleaning-gum' },
    { name: 'Tooth Filling / Cavity Treatment', slug: 'tooth-filling-cavity' },
    { name: 'Emergency Dental Care', slug: 'toothache-emergency' },
    { name: 'Teeth Whitening', slug: 'teeth-whitening' },
    { name: 'Dental Implants', slug: 'dental-implants' },
    { name: 'Clear Aligners & Orthodontics', slug: 'orthodontics-aligners' },
    { name: 'Veneers & Cosmetic Care', slug: 'veneers-cosmetic' },
  ];

  return (
    <footer className="bg-[#172323] text-white pt-16 pb-16 border-t border-white/10" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F5B5B] flex items-center justify-center text-white shadow-xs">
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
              <span className="text-xl font-bold tracking-tight text-white font-serif-display">
                Verdant Dental Care
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans-body">
              Warm, modern, and patient-first dentistry in Midtown Manhattan. We pair gentle clinical excellence with transparent pricing and compassionate care.
            </p>

            {/* Social Icons: Instagram, Facebook, LinkedIn, AND Yelp */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0F5B5B] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0F5B5B] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0F5B5B] flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {/* Yelp Icon */}
              <a
                href="https://www.yelp.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#d32323] flex items-center justify-center text-white transition-colors"
                aria-label="Yelp Reviews"
                title="Verdant Dental on Yelp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.19 12.37l2.84 2.89a.86.86 0 0 1-.22 1.39l-4.7 2.45a.86.86 0 0 1-1.22-.72l-.12-5.3a.86.86 0 0 1 .86-.88l2.56.17zm1.18-1.58l3.77-1.39a.86.86 0 0 1 1.07.94l-.79 5.24a.86.86 0 0 1-1.12.7l-4.7-2.45a.86.86 0 0 1-.16-1.42l1.93-1.62zm-2.05-1.17l-1.4-3.76a.86.86 0 0 1 .94-1.07l5.24.79a.86.86 0 0 1 .7 1.12l-2.45 4.7a.86.86 0 0 1-1.42.16l-1.61-1.94zm-1.58 1.18l-3.77 1.39a.86.86 0 0 1-1.07-.94l.79-5.24a.86.86 0 0 1 1.12-.7l4.7 2.45a.86.86 0 0 1 .16 1.42l-1.93 1.62zm-.12 2.65l-2.84 2.89a.86.86 0 0 1-1.39-.22l-2.45-4.7a.86.86 0 0 1 .72-1.22l5.3-.12a.86.86 0 0 1 .88.86l-.22 2.51z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#DDF3EE]">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate?.(link.page)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#DDF3EE]">
              Dental Treatments
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              {popularTreatments.map((t) => (
                <li key={t.slug}>
                  <button
                    onClick={() => {
                      onNavigate?.('services');
                      onSelectServiceSlug?.(t.slug);
                    }}
                    className="hover:text-white transition-colors text-left cursor-pointer truncate max-w-full block"
                  >
                    {t.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#DDF3EE]">
              Contact & Hours
            </h3>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4B39A] shrink-0 mt-0.5" />
                <span>420 Lexington Ave, Suite 1400, New York, NY 10170</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F4B39A] shrink-0" />
                <a href="tel:+12125550198" className="hover:text-white font-medium">
                  (212) 555-0198
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F4B39A] shrink-0" />
                <a href="mailto:hello@verdantdentalcare.com" className="hover:text-white">
                  hello@verdantdentalcare.com
                </a>
              </div>
              <div className="pt-2 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#DDF3EE] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F4B39A]" />
                    <span>Operating Hours</span>
                  </span>
                  <span className="text-[11px] font-bold text-[#F4B39A]">
                    {getTodaySchedule().statusText}
                  </span>
                </div>
                <div className="space-y-1 text-xs">
                  {weeklyOperatingHours.map((sched) => {
                    const isToday = sched.dayIndex === getTodaySchedule().dayIndex;
                    return (
                      <div
                        key={sched.dayName}
                        className={`flex items-center justify-between py-1 px-2 rounded-lg transition-colors ${
                          isToday ? 'bg-white/10 font-bold text-[#DDF3EE]' : 'font-semibold text-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold">{sched.dayName}</span>
                          {isToday && (
                            <span className="text-[9px] uppercase font-extrabold bg-[#0F5B5B] text-white px-1.5 py-0.2 rounded tracking-wider">
                              Today
                            </span>
                          )}
                        </div>
                        <span className={`font-bold flex items-center justify-end gap-1 flex-wrap ${sched.isOpen ? (isToday ? 'text-white' : 'text-gray-100') : 'text-red-400'}`}>
                          {sched.prefixNote && (
                            <span className="text-[10px] font-medium opacity-80">
                              {sched.prefixNote}
                            </span>
                          )}
                          <span>{sched.hours}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 
          Bottom Bar: Privacy Policy, Accessibility, and HTML Sitemap are hidden.
          Copyright is centered horizontally.
        */}
        <div className="pt-8 text-center text-xs text-gray-400">
          <p className="mx-auto">
            © 2026 Verdant Dental Care LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
