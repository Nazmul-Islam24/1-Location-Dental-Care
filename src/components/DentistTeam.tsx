import React from 'react';
import { ArrowRight, Award, GraduationCap, CheckCircle } from 'lucide-react';
import { Doctor } from '../types/clinic';
import { doctorsData } from '../data/clinicData';

interface DentistTeamProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookDoctor: (doctorName: string) => void;
}

export const DentistTeam: React.FC<DentistTeamProps> = ({ onSelectDoctor, onBookDoctor }) => {
  return (
    <section id="dentists" className="py-20 md:py-28 bg-white border-b border-[#DCE5E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0F5B5B]">
              Compassionate Clinicians
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172323] tracking-tight font-serif-display">
              Meet Your Care Team
            </h2>
            <p className="text-base sm:text-lg text-[#5F6B6B] leading-relaxed">
              Our doctors are experienced, board-accredited clinicians dedicated to gentle, personalized care. No rushed appointments, no judgment.
            </p>
          </div>

          <div className="text-xs text-[#5F6B6B] flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#0F5B5B]" />
            <span>Ivy-League & Hospital Residency Trained</span>
          </div>
        </div>

        {/* Doctors Grid per Blueprint Section 13, 15 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctorsData.map((doc) => (
            <article
              key={doc.id}
              className="bg-[#FAFAF7] rounded-3xl border border-[#DCE5E3] overflow-hidden hover:border-[#0F5B5B]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo */}
                <div className="relative h-72 overflow-hidden bg-gray-200">
                  <img
                    src={doc.photo}
                    alt={`${doc.name}, ${doc.credentials}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#0F5B5B] px-3 py-1 rounded-full text-xs font-bold border border-[#DCE5E3]">
                    {doc.credentials}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#172323] group-hover:text-[#0F5B5B] transition-colors font-serif-display">
                      {doc.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#0F5B5B] mt-0.5">
                      {doc.role}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5F6B6B] leading-relaxed font-sans-body line-clamp-3">
                    {doc.bio}
                  </p>

                  <div className="pt-2 text-xs text-[#5F6B6B] space-y-1">
                    <div className="flex items-center gap-1.5 font-medium text-[#172323]">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0F5B5B]" />
                      <span className="truncate">{doc.education[0]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with "View Profile ->" per Blueprint Section 15 */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-[#DCE5E3]/60 mt-4">
                <button
                  onClick={() => onSelectDoctor(doc)}
                  className="text-xs sm:text-sm font-bold text-[#0F5B5B] hover:text-[#0c4848] flex items-center gap-1 group-hover:underline"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onBookDoctor(doc.name)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white border border-[#DCE5E3] hover:border-[#0F5B5B] text-[#172323] transition-colors"
                >
                  Book with {doc.name.split(' ')[1]}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Credentials & Trust Notice per Blueprint Section 14 */}
        <div className="mt-14 p-6 rounded-2xl bg-[#FAFAF7] border border-[#DCE5E3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5F6B6B]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#DDF3EE] flex items-center justify-center text-[#0F5B5B] shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <span>
              All Verdant dental practitioners hold active New York State medical licenses, continuous ADA memberships, and exceed annual continuing education mandates.
            </span>
          </div>

          <div className="shrink-0 flex items-center gap-4 text-xs font-bold text-[#0F5B5B]">
            <span>✓ ADA Certified</span>
            <span>✓ AACD Member</span>
            <span>✓ ICOI Diplomate</span>
          </div>
        </div>
      </div>
    </section>
  );
};
