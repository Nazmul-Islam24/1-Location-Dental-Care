import React, { useEffect } from 'react';
import {
  Calendar,
  Phone,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Heart,
  Sparkles,
  Info,
  DollarSign,
  HelpCircle,
  Award,
  ChevronRight,
  Layers,
  Zap,
  Activity,
  AlertCircle,
  Sun,
  Scissors,
  ShieldAlert,
  Smile,
  Star
} from 'lucide-react';
import { all14DentalServices, DentalServiceItem } from '../data/dentalServicesData';

interface ServiceDetailPageProps {
  serviceSlug: string;
  onBackToServices: () => void;
  onBookThisService: (serviceName: string) => void;
  onSelectOtherService: (slug: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceSlug,
  onBackToServices,
  onBookThisService,
  onSelectOtherService,
}) => {
  const service: DentalServiceItem =
    all14DentalServices.find((s) => s.slug === serviceSlug) || all14DentalServices[0];

  // Dynamic SEO metadata & Schema.org JSON-LD
  useEffect(() => {
    const originalTitle = document.title;
    const pageTitle = `${service.title} in Manhattan, NY | Verdant Dental Care`;
    document.title = pageTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        `${service.shortDescription} Learn about ${service.title} at Verdant Dental Care in Midtown Manhattan. Gentle, unhurried care with transparent pricing.`
      );
    }

    // Update og:title & og:description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', service.shortDescription);

    // Schema.org MedicalProcedure JSON-LD structured data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'medical-procedure-schema';
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: service.title,
      description: service.shortDescription,
      procedureType: 'NoninvasiveProcedure',
      bodyLocation: 'Mouth / Teeth',
      provider: {
        '@type': 'Dentist',
        name: 'Verdant Dental Care',
        telephone: '+1-212-555-0198',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '420 Lexington Ave, Suite 1400',
          addressLocality: 'New York',
          addressRegion: 'NY',
          postalCode: '10170',
          addressCountry: 'US',
        },
      },
    });
    document.head.appendChild(schemaScript);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) metaDesc.setAttribute('content', originalDesc);
      const existingSchema = document.getElementById('medical-procedure-schema');
      if (existingSchema) existingSchema.remove();
    };
  }, [service]);

  // Icon helper
  const getCategoryIcon = (slug: string) => {
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
      case 'root-canal-treatment':
        return <Zap className="w-5 h-5 text-[#0F5B5B]" />;
      case 'tooth-extraction':
        return <Scissors className="w-5 h-5 text-[#0F5B5B]" />;
      case 'wisdom-tooth-treatment':
        return <ShieldAlert className="w-5 h-5 text-[#0F5B5B]" />;
      case 'crowns-bridges':
        return <Award className="w-5 h-5 text-[#0F5B5B]" />;
      case 'dental-implants':
        return <CheckCircle2 className="w-5 h-5 text-[#0F5B5B]" />;
      case 'dentures':
        return <Smile className="w-5 h-5 text-[#0F5B5B]" />;
      case 'childrens-dentistry':
        return <Heart className="w-5 h-5 text-[#0F5B5B]" />;
      case 'orthodontics-aligners':
        return <Layers className="w-5 h-5 text-[#0F5B5B]" />;
      case 'veneers-cosmetic':
        return <Star className="w-5 h-5 text-[#0F5B5B]" />;
      default:
        return <Activity className="w-5 h-5 text-[#0F5B5B]" />;
    }
  };

  // Other related services for quick switching
  const otherServices = all14DentalServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);

  return (
    <article className="w-full bg-[#FAFAF7] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Top Breadcrumb & Back Navigation */}
        <div className="flex items-center justify-between gap-4 border-b border-[#DCE5E3] pb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-[#5F6B6B]">
            <button
              onClick={onBackToServices}
              className="hover:text-[#0F5B5B] transition-colors cursor-pointer"
            >
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0F5B5B] font-bold">{service.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#172323] font-bold truncate max-w-[180px] sm:max-w-none">
              {service.title}
            </span>
          </nav>

          <button
            onClick={onBackToServices}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0F5B5B] hover:text-[#0c4848] transition-colors cursor-pointer bg-white px-3.5 py-1.5 rounded-xl border border-[#DCE5E3] shadow-2xs shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Services</span>
          </button>
        </div>

        {/* Hero Section */}
        <section className="bg-white rounded-3xl border border-[#DCE5E3] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold uppercase tracking-wider">
                  {getCategoryIcon(service.slug)}
                  <span>{service.category}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111C1C] tracking-tight font-serif-display leading-tight">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg text-[#0F5B5B] font-semibold leading-snug">
                  {service.tagline}
                </p>

                <p className="text-sm sm:text-base text-[#5F6B6B] leading-relaxed font-sans-body">
                  {service.shortDescription}
                </p>
              </div>

              {/* 4 Clinical Spec Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#FAFAF7] rounded-xl p-3 border border-[#DCE5E3]">
                  <div className="flex items-center gap-1.5 text-[#0F5B5B] mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6B6B]">
                      Duration
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#172323] block leading-tight">
                    {service.duration}
                  </span>
                </div>

                <div className="bg-[#FAFAF7] rounded-xl p-3 border border-[#DCE5E3]">
                  <div className="flex items-center gap-1.5 text-[#0F5B5B] mb-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6B6B]">
                      Comfort
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#172323] block leading-tight">
                    {service.comfortLevel}
                  </span>
                </div>

                <div className="bg-[#FAFAF7] rounded-xl p-3 border border-[#DCE5E3]">
                  <div className="flex items-center gap-1.5 text-[#0F5B5B] mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6B6B]">
                      Recovery
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#172323] block leading-tight">
                    {service.recoveryTime}
                  </span>
                </div>

                <div className="bg-[#FAFAF7] rounded-xl p-3 border border-[#DCE5E3]">
                  <div className="flex items-center gap-1.5 text-[#0F5B5B] mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6B6B]">
                      Longevity
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#172323] block leading-tight">
                    {service.warrantyOrLongevity}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onBookThisService(service.title)}
                  className="bg-[#0F5B5B] hover:bg-[#0c4848] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4 text-[#DDF3EE]" />
                  <span>Book {service.title}</span>
                </button>

                <a
                  href="tel:+12125550198"
                  className="bg-[#FAFAF7] hover:bg-[#DDF3EE]/60 border border-[#DCE5E3] hover:border-[#0F5B5B] text-[#0F5B5B] px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#0F5B5B]" />
                  <span>Call (212) 555-0198</span>
                </a>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[380px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#DDF3EE] uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" />
                  <span>Board-Certified Care</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-100 font-medium">
                  Personalized dental treatment planned with cutting-edge digital diagnostics in Midtown Manhattan.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Clinical Deep Dive Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Column: Overview & Clinical Guidance */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Clinical Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE5E3] shadow-xs space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172323] font-serif-display flex items-center gap-2.5">
                <Info className="w-6 h-6 text-[#0F5B5B]" />
                <span>Clinical Overview & Treatment Details</span>
              </h2>
              <p className="text-base text-[#2D3F3F] leading-relaxed font-sans-body">
                {service.overview}
              </p>
            </div>

            {/* 2. When to Seek This Care */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE5E3] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#DDF3EE] flex items-center justify-center text-[#0F5B5B]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172323] font-serif-display">
                  When Should You Seek This Care?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5F6B6B]">
                Common signs, symptoms, or milestones that indicate this treatment is beneficial:
              </p>
              <ul className="space-y-3 pt-2">
                {service.whenToSeek.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#172323]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Recommended Best Practices */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE5E3] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172323] font-serif-display">
                  Doctor-Recommended Best Practices
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5F6B6B]">
                Helpful steps to ensure optimal comfort, rapid recovery, and long-lasting clinical results:
              </p>
              <ul className="space-y-3 pt-2">
                {service.whatIsRecommended.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#172323]">
                    <div className="w-2 h-2 rounded-full bg-[#0F5B5B] mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. What to Avoid */}
            <div className="bg-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172323] font-serif-display">
                  Important: What You Should Avoid
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-amber-900/80">
                To prevent complications, premature wear, or discomfort, avoid the following:
              </p>
              <ul className="space-y-3 pt-2">
                {service.whatToAvoid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-amber-950">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. 4-Step Procedure Journey */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE5E3] shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F5B5B] block mb-1">
                  Step-by-Step Experience
                </span>
                <h3 className="text-2xl font-bold text-[#172323] font-serif-display">
                  What Happens During Your Appointment?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAFAF7] border border-[#DCE5E3] space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0F5B5B] text-white flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <h4 className="text-sm font-bold text-[#172323]">Diagnostic Assessment</h4>
                  <p className="text-xs text-[#5F6B6B] leading-relaxed">
                    High-magnification evaluation and low-radiation digital imaging to assess tooth and gum health.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAF7] border border-[#DCE5E3] space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0F5B5B] text-white flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <h4 className="text-sm font-bold text-[#172323]">Calm Preparation</h4>
                  <p className="text-xs text-[#5F6B6B] leading-relaxed">
                    We explain every step beforehand and apply gentle buffering or desensitizing gels for comfort.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAF7] border border-[#DCE5E3] space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0F5B5B] text-white flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <h4 className="text-sm font-bold text-[#172323]">Precision Treatment</h4>
                  <p className="text-xs text-[#5F6B6B] leading-relaxed">
                    Dr. Williams performs the procedure using quiet micro-instruments and biomimetic dental materials.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAF7] border border-[#DCE5E3] space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0F5B5B] text-white flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <h4 className="text-sm font-bold text-[#172323]">Verification & Aftercare</h4>
                  <p className="text-xs text-[#5F6B6B] leading-relaxed">
                    Bite alignment check, final polish, and comprehensive home-care instructions before you head out.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Booking card & Related Services */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Booking Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#DCE5E3] shadow-md sticky top-24 space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F5B5B]">
                  Schedule Treatment
                </span>
                <h3 className="text-xl font-bold text-[#172323] font-serif-display">
                  Book Your Appointment
                </h3>
                <p className="text-xs text-[#5F6B6B]">
                  Convenient Midtown Manhattan appointments with zero waiting time.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-[#DCE5E3]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5F6B6B]">Target Service:</span>
                  <span className="font-bold text-[#0F5B5B]">{service.title}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5F6B6B]">Typical Duration:</span>
                  <span className="font-semibold text-[#172323]">{service.duration}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5F6B6B]">Insurance:</span>
                  <span className="font-semibold text-emerald-700">PPO & FSA / HSA</span>
                </div>
              </div>

              <button
                onClick={() => onBookThisService(service.title)}
                className="w-full bg-[#0F5B5B] hover:bg-[#0c4848] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#DDF3EE]" />
                <span>Confirm Appointment</span>
              </button>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-[#5F6B6B] block">Questions before booking?</span>
                <a
                  href="tel:+12125550198"
                  className="text-xs font-bold text-[#0F5B5B] hover:underline inline-flex items-center gap-1 mt-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call our desk: (212) 555-0198</span>
                </a>
              </div>

              {/* Insurance & Pricing Guarantee Note */}
              <div className="p-3.5 rounded-2xl bg-[#FAFAF7] border border-[#DCE5E3] text-xs text-[#5F6B6B] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#172323]">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Transparent Pricing Promise</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  We check your dental insurance benefits upfront. No surprise fees, no hidden surcharges.
                </p>
              </div>

              {/* Related Services in Same Practice */}
              <div className="pt-4 border-t border-[#DCE5E3] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#172323]">
                  Other Dental Specialties
                </h4>
                <div className="space-y-1.5">
                  {otherServices.map((other) => (
                    <button
                      key={other.id}
                      onClick={() => onSelectOtherService(other.slug)}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-[#DDF3EE]/70 transition-colors flex items-center justify-between text-xs font-medium text-[#2D3F3F] group cursor-pointer border border-transparent hover:border-[#DCE5E3]"
                    >
                      <span className="truncate group-hover:text-[#0F5B5B] transition-colors">
                        {other.title}
                      </span>
                      <ArrowLeft className="w-3.5 h-3.5 text-[#0F5B5B] rotate-180 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* Bottom Banner to Return to Full Catalog */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE5E3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-[#172323] font-serif-display">
              Looking for something else?
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6B6B]">
              Browse all 14 comprehensive dental treatments offered at Verdant Dental Care.
            </p>
          </div>

          <button
            onClick={onBackToServices}
            className="px-6 py-3 rounded-xl bg-[#FAFAF7] hover:bg-[#DDF3EE] text-[#0F5B5B] font-bold text-xs sm:text-sm border border-[#DCE5E3] transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Services</span>
          </button>
        </section>

      </div>
    </article>
  );
};
