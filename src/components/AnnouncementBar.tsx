import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { ClinicPreset } from '../types/clinic';
import { presetConfig } from '../data/clinicData';
import { getTodaySchedule } from '../data/operatingHours';

interface AnnouncementBarProps {
  currentPreset: ClinicPreset;
  onOpenBooking: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ currentPreset, onOpenBooking }) => {
  const preset = presetConfig[currentPreset];
  const todaySchedule = getTodaySchedule();

  return (
    <aside aria-label="Clinic Announcements" className="bg-[#0F5B5B] text-white text-xs md:text-sm py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="hidden md:inline font-medium text-emerald-100">{preset.badge}</span>
          <span className="hidden md:inline text-teal-300/80">·</span>
          <span className="font-medium text-teal-100">
            {todaySchedule.statusText}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href="tel:+12125550198"
            className="flex items-center gap-1.5 text-white hover:text-[#F4B39A] transition-colors font-medium"
            title="Call Verdant Dental"
          >
            <Phone className="w-3.5 h-3.5 text-[#F4B39A]" />
            <span>(212) 555-0198</span>
          </a>

          <span className="text-teal-400/60">|</span>

          <button
            onClick={onOpenBooking}
            className="text-[#F4B39A] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Reserve Today</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
