import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface MobileStickyCtaProps {
  onOpenBooking: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onOpenBooking }) => {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#DCE5E3] p-3 shadow-2xl pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      aria-label="Quick mobile booking actions"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href="tel:+12125550198"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-[#0F5B5B] text-[#0F5B5B] bg-white font-bold text-xs hover:bg-[#DDF3EE]/40 active:scale-[0.98] transition-all shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#0F5B5B]" />
          <span>Call Clinic</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#0F5B5B] text-white font-bold text-xs hover:bg-[#0c4848] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#DDF3EE]" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
