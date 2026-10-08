import React from 'react';
import { X, Award, GraduationCap, Globe, Heart, Calendar, Check, ChevronRight } from 'lucide-react';
import { Doctor } from '../types/clinic';

interface DentistProfileModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookDoctor: (doctorName: string) => void;
}

export const DentistProfileModal: React.FC<DentistProfileModalProps> = ({
  doctor,
  onClose,
  onBookDoctor,
}) => {
  if (!doctor) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-modal-title"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#DCE5E3] overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-[#DCE5E3] flex items-center justify-between bg-[#FAFAF7] sticky top-0 z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#5F6B6B]">
            <a href="#dentists" onClick={onClose} className="hover:text-[#0F5B5B] transition-colors">
              Our Dentists
            </a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-[#172323] truncate">
              {doctor.name}
            </span>
          </nav>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#5F6B6B] hover:text-[#172323] hover:bg-gray-200/60 transition-colors"
            aria-label="Close profile"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
          {/* Doctor Hero Section per Blueprint Section 16 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-[#DCE5E3]">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#0F5B5B]/30 shadow-md shrink-0">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold uppercase tracking-wider">
                <span>{doctor.credentials}</span>
                <span>·</span>
                <span>{doctor.experienceYears} Years Clinical Care</span>
              </div>

              <h1 id="doctor-modal-title" className="text-2xl sm:text-3xl font-bold text-[#172323] font-serif-display">
                {doctor.name}
              </h1>

              <div className="text-sm font-semibold text-[#0F5B5B]">
                {doctor.role}
              </div>

              <p className="text-xs text-[#5F6B6B] font-medium">
                Primary Specialty: {doctor.specialty}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start text-xs text-[#5F6B6B]">
                <span className="flex items-center gap-1 bg-[#FAFAF7] px-2.5 py-1 rounded-lg border border-[#DCE5E3]">
                  <Globe className="w-3.5 h-3.5 text-[#0F5B5B]" />
                  <span>Languages: {doctor.languages.join(', ')}</span>
                </span>
              </div>
            </div>
          </div>

          {/* About Doctor Bio */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#172323] font-serif-display">
              About {doctor.name.split(' ')[0]} {doctor.name.split(' ')[1]}
            </h2>
            <p className="text-sm text-[#5F6B6B] leading-relaxed">
              {doctor.bio}
            </p>
          </section>

          {/* Approach to Patient Care */}
          <section className="p-5 rounded-2xl bg-[#DDF3EE]/40 border border-[#0F5B5B]/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F5B5B]">
              <Heart className="w-4 h-4" />
              <span>Philosophy of Care</span>
            </div>
            <p className="text-xs sm:text-sm text-[#172323] italic leading-relaxed">
              "{doctor.philosophy}"
            </p>
          </section>

          {/* Education & Accreditations (Section 14 & 16) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h2 className="text-base font-bold text-[#172323] flex items-center gap-2 font-serif-display">
                <GraduationCap className="w-4 h-4 text-[#0F5B5B]" />
                <span>Education & Residency</span>
              </h2>
              <ul className="text-xs text-[#5F6B6B] space-y-2">
                {doctor.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0F5B5B] mt-0.5 shrink-0" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-bold text-[#172323] flex items-center gap-2 font-serif-display">
                <Award className="w-4 h-4 text-[#0F5B5B]" />
                <span>Professional Memberships</span>
              </h2>
              <ul className="text-xs text-[#5F6B6B] space-y-2">
                {doctor.memberships.map((mem, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0F5B5B] mt-0.5 shrink-0" />
                    <span>{mem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-[#DCE5E3] bg-[#FAFAF7] flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-2.5 px-4 border border-[#DCE5E3] rounded-xl text-xs sm:text-sm font-semibold text-[#172323] hover:bg-gray-100 transition-colors"
          >
            Close Profile
          </button>

          <button
            onClick={() => {
              onClose();
              onBookDoctor(doctor.name);
            }}
            className="w-full sm:w-auto py-2.5 px-6 bg-[#0F5B5B] hover:bg-[#0c4848] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <Calendar className="w-4 h-4 text-[#DDF3EE]" />
            <span>Book Consultation with {doctor.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
