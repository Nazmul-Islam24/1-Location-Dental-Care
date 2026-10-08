import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Calendar, ExternalLink } from 'lucide-react';
import { clinicLocations } from '../data/clinicData';
import { weeklyOperatingHours, getTodaySchedule } from '../data/operatingHours';

interface LocationSectionProps {
  onNavigateToBooking?: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onNavigateToBooking }) => {
  const activeLoc = clinicLocations.find((l) => l.id === 'manhattan') || clinicLocations[0];

  return (
    <section id="location" className="py-10 md:py-16 bg-white border-b border-[#DCE5E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="max-w-2xl space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0F5B5B]">
              Convenient Accessibility
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
              Find Our Practice
            </h2>
            <p className="text-sm sm:text-base text-[#5F6B6B] leading-relaxed">
              Centrally located in Midtown Manhattan with convenient appointments throughout the week.
            </p>
          </div>
        </div>

        {/* 
          Smart Location Card:
          On mobile (< lg): Map is rendered on TOP (order-1), Details & Hours on BOTTOM (order-2).
          On desktop (>= lg): Details & Hours on Left (order-1), Map on Right (order-2).
        */}
        <div className="bg-[#FAFAF7] rounded-3xl border border-[#DCE5E3] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs">
          
          {/* Map Column: on small mobile it is order-1 (TOP), on lg it is order-2 (RIGHT) */}
          <div className="order-1 lg:order-2 lg:col-span-6 border-b lg:border-b-0 lg:border-l border-[#DCE5E3] relative min-h-[300px] sm:min-h-[360px] lg:min-h-full bg-gray-100 flex flex-col">
            <div className="w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[500px] relative">
              <iframe
                title={`Map location for ${activeLoc.name}`}
                src={activeLoc.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
            </div>
            {/* Quick floating address badge on map */}
            <div className="p-3 bg-white/95 backdrop-blur-xs border-t border-[#DCE5E3] flex items-center justify-between text-xs text-[#172323]">
              <div className="flex items-center gap-1.5 font-medium truncate">
                <MapPin className="w-3.5 h-3.5 text-[#0F5B5B] shrink-0" />
                <span className="truncate">{activeLoc.address}, {activeLoc.city}</span>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${activeLoc.address}, ${activeLoc.city}, ${activeLoc.state}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F5B5B] font-bold hover:underline shrink-0 ml-2 flex items-center gap-1"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Details & Schedule Column: on mobile it is order-2 (BOTTOM), on lg it is order-1 (LEFT) */}
          <div className="order-2 lg:order-1 lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-7">
            {/* Address & Practice Info */}
            <div>
              <span className="text-xs font-bold text-[#0F5B5B] uppercase tracking-wider block mb-1">
                {activeLoc.name}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#172323] font-serif-display mb-1.5">
                {activeLoc.address}
              </h3>
              <p className="text-sm font-medium text-[#5F6B6B]">
                {activeLoc.suite} · {activeLoc.city}, {activeLoc.state} {activeLoc.zip}
              </p>
            </div>

            {/* Action Buttons: Phone in button, Email, and Book Now button */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Phone inside a dedicated button */}
              <a
                href={`tel:${activeLoc.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#DDF3EE]" />
                <span>Call {activeLoc.phone}</span>
              </a>

              {/* Book Now button linking directly to Book Appointment page */}
              <button
                onClick={onNavigateToBooking}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#DDF3EE] hover:bg-[#cbebe4] text-[#0F5B5B] font-bold text-xs sm:text-sm border border-[#0F5B5B]/20 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0F5B5B]" />
                <span>Book Appointment Now</span>
              </button>

              {/* Email contact */}
              <a
                href={`mailto:${activeLoc.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-[#DCE5E3] hover:border-[#0F5B5B] text-[#5F6B6B] hover:text-[#172323] text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0F5B5B]" />
                <span>{activeLoc.email}</span>
              </a>
            </div>

            {/* Operating Hours Table */}
            <div className="border-t border-[#DCE5E3] pt-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold uppercase tracking-wider text-[#172323] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0F5B5B]" />
                  <span>Weekly Operating Hours</span>
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#DDF3EE] text-[#0F5B5B]">
                  {getTodaySchedule().fullStatusText}
                </span>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm">
                {weeklyOperatingHours.map((sched) => {
                  const isCurrentDay = sched.dayIndex === getTodaySchedule().dayIndex;
                  return (
                    <div
                      key={sched.dayName}
                      className={`flex items-center justify-between py-1.5 px-3 rounded-xl transition-colors ${
                        isCurrentDay
                          ? 'bg-[#DDF3EE]/90 border border-[#0F5B5B]/30 font-bold text-[#0F5B5B]'
                          : 'border-b border-gray-100 last:border-0 font-semibold text-[#172323]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs sm:text-sm">{sched.dayName}</span>
                        {isCurrentDay && (
                          <span className="text-[10px] uppercase font-extrabold bg-[#0F5B5B] text-white px-2 py-0.5 rounded-md tracking-wider">
                            Today
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-bold flex items-center justify-end flex-wrap gap-1.5 ${
                          sched.isOpen ? (isCurrentDay ? 'text-[#0F5B5B]' : 'text-[#172323]') : 'text-red-600'
                        }`}
                      >
                        {sched.prefixNote && (
                          <span className="text-[11px] sm:text-xs font-medium opacity-85">
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

            {/* Turn-by-Turn Directions Button */}
            <div className="pt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${activeLoc.address}, ${activeLoc.city}, ${activeLoc.state}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0F5B5B] hover:text-[#0c4848] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Turn-by-Turn Directions in Google Maps →</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
