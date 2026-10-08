import React from 'react';
import { AlertCircle, Phone, ArrowRight, Clock } from 'lucide-react';

interface EmergencyBannerProps {
  onOpenBookingUrgent: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenBookingUrgent }) => {
  return (
    <section className="bg-red-50/80 border-y border-red-200 py-6" aria-label="Urgent Dental Care">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center text-red-700 shrink-0">
              <AlertCircle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-xs font-bold uppercase tracking-wider text-red-800">
                  Immediate Pain Relief Available
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span className="text-xs text-red-700 hidden sm:inline">
                  Daily reserved urgent slots open
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-red-950 font-serif-display">
                Need Urgent Dental Care Today?
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+12125550198"
              className="bg-red-700 hover:bg-red-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency Line: (212) 555-0198</span>
            </a>

            <button
              onClick={onOpenBookingUrgent}
              className="hidden sm:inline-flex items-center gap-1.5 bg-white border border-red-200 text-red-900 hover:bg-red-100/50 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Reserve Urgent Slot</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
