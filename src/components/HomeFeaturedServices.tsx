import React from 'react';
import {
  ShieldCheck,
  Sparkles,
  Activity,
  AlertCircle,
  Sun,
  Zap,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { all14DentalServices, DentalServiceItem } from '../data/dentalServicesData';

interface HomeFeaturedServicesProps {
  onSelectServiceAndNavigate: (slug: string) => void;
  onViewAllServices: () => void;
}

export const HomeFeaturedServices: React.FC<HomeFeaturedServicesProps> = ({
  onSelectServiceAndNavigate,
  onViewAllServices,
}) => {
  // Common core dental services to feature on Home
  const featuredSlugs = [
    'general-checkup',
    'dental-cleaning-gum',
    'tooth-filling-cavity',
    'toothache-emergency',
    'teeth-whitening',
    'dental-implants',
    'orthodontics-aligners',
    'veneers-cosmetic',
  ];

  const featured = all14DentalServices.filter((s) => featuredSlugs.includes(s.slug));

  const getIcon = (slug: string) => {
    switch (slug) {
      case 'general-checkup':
        return <ShieldCheck className="w-5 h-5 text-[#0F5B5B]" />;
      case 'dental-cleaning-gum':
        return <Sparkles className="w-5 h-5 text-[#0F5B5B]" />;
      case 'tooth-filling-cavity':
        return <Activity className="w-5 h-5 text-[#0F5B5B]" />;
      case 'toothache-emergency':
        return <AlertCircle className="w-5 h-5 text-amber-600" />;
      case 'teeth-whitening':
        return <Sun className="w-5 h-5 text-[#0F5B5B]" />;
      case 'dental-implants':
        return <CheckCircle2 className="w-5 h-5 text-[#0F5B5B]" />;
      case 'orthodontics-aligners':
        return <Layers className="w-5 h-5 text-[#0F5B5B]" />;
      case 'veneers-cosmetic':
        return <Sparkles className="w-5 h-5 text-[#0F5B5B]" />;
      default:
        return <Activity className="w-5 h-5 text-[#0F5B5B]" />;
    }
  };

  return (
    <section className="py-10 md:py-16 bg-[#FAFAF7] border-b border-[#DCE5E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0F5B5B]">
              Specialized Dental Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
              Popular Dental Treatments
            </h2>
            <p className="text-sm sm:text-base text-[#5F6B6B] leading-relaxed">
              Explore our core dental treatments. Click any treatment to view procedure details, medical guidance, and advice.
            </p>
          </div>

          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F5B5B] hover:text-[#0c4848] transition-colors cursor-pointer shrink-0 self-start md:self-auto"
          >
            <span>View All 14 Comprehensive Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid of clickable service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectServiceAndNavigate(service.slug)}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#DCE5E3] hover:border-[#0F5B5B] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between space-y-2.5 sm:space-y-4"
            >
              <div className="space-y-2 sm:space-y-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#DDF3EE] group-hover:bg-[#0F5B5B] group-hover:text-white flex items-center justify-center transition-colors">
                  {getIcon(service.slug)}
                </div>

                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#0F5B5B] uppercase tracking-wider block">
                    {service.category}
                  </span>
                  <h3 className="text-sm sm:text-lg font-bold text-[#172323] group-hover:text-[#0F5B5B] transition-colors font-serif-display leading-tight mt-0.5">
                    {service.title}
                  </h3>
                </div>

                {/* Hide paragraph on mobile/small screen to auto-shrink card height */}
                <p className="hidden sm:block text-xs text-[#5F6B6B] leading-relaxed line-clamp-2">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-2 border-t border-[#DCE5E3]/60 flex items-center justify-between text-xs font-semibold text-[#0F5B5B] group-hover:translate-x-0.5 transition-transform">
                <span>View Details & Advice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button bottom */}
        <div className="mt-10 text-center">
          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white border border-[#0F5B5B]/30 hover:border-[#0F5B5B] text-[#0F5B5B] hover:bg-[#DDF3EE]/40 font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
          >
            <span>Explore All Dental Specialties & Treatments</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
