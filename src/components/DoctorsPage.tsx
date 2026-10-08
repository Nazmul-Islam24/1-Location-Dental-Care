import React, { useState } from 'react';
import { Award, GraduationCap, CheckCircle, Heart, Star, Calendar } from 'lucide-react';
import { Doctor } from '../types/clinic';
import { doctorsData } from '../data/clinicData';
import { DentistProfileModal } from './DentistProfileModal';

interface DoctorsPageProps {
  onBookWithDoctor: (doctorName: string) => void;
  initialSelectedDoctorId?: string | null;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({ onBookWithDoctor, initialSelectedDoctorId }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  React.useEffect(() => {
    if (initialSelectedDoctorId) {
      const found = doctorsData.find(
        (d) => d.id === initialSelectedDoctorId || d.name === initialSelectedDoctorId
      );
      if (found) {
        setSelectedDoctor(found);
        setTimeout(() => {
          const el = document.getElementById(`doctor-${found.id}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 150);
      }
    }
  }, [initialSelectedDoctorId]);

  return (
    <div className="w-full bg-[#FAFAF7] py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Board-Certified Specialists</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#172323] tracking-tight font-serif-display">
            Meet Our Doctors
          </h1>
          <p className="text-base sm:text-lg text-[#5F6B6B] leading-relaxed font-sans-body">
            Our clinicians combine rigorous hospital residency training and Ivy League education with an unhurried, empathetic chairside manner.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsData.map((doc) => (
            <article
              key={doc.id}
              id={`doctor-${doc.id}`}
              className="bg-white rounded-3xl border border-[#DCE5E3] overflow-hidden hover:border-[#0F5B5B]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-200">
                  <img
                    src={doc.photo}
                    alt={`${doc.name}, ${doc.credentials}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#0F5B5B] px-3 py-1 rounded-full text-xs font-bold border border-[#DCE5E3] shadow-xs">
                    {doc.credentials}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#0F5B5B]/90 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                    <span>4.9 / 5 Verified</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#172323] group-hover:text-[#0F5B5B] transition-colors font-serif-display">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0F5B5B] mt-0.5">
                      {doc.role}
                    </p>
                    <p className="text-xs text-[#5F6B6B] mt-0.5">
                      Specialty: {doc.specialty}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#5F6B6B]">
                    <GraduationCap className="w-4 h-4 text-[#0F5B5B] shrink-0" />
                    <span className="truncate">{doc.education}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A5555] leading-relaxed line-clamp-3 italic">
                    "{doc.philosophy}"
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => setSelectedDoctor(doc)}
                  className="w-full py-2.5 rounded-xl border border-[#DCE5E3] hover:border-[#0F5B5B] text-xs font-semibold text-[#172323] hover:text-[#0F5B5B] transition-colors cursor-pointer text-center block"
                >
                  View Full Bio & Credentials
                </button>
                <button
                  onClick={() => onBookWithDoctor(doc.name)}
                  className="w-full py-2.5 rounded-xl bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#DDF3EE]" />
                  <span>Book Visit with {doc.name.split(' ')[1]}</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Doctor Team Guarantee Strip */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE5E3] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#DDF3EE] text-[#0F5B5B] flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#172323]">Full Fellowship Training</h4>
              <p className="text-xs text-[#5F6B6B] mt-0.5">Continual post-graduate education in advanced biomimetics & surgery.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#DDF3EE] text-[#0F5B5B] flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#172323]">Zero-Judgment Chairside</h4>
              <p className="text-xs text-[#5F6B6B] mt-0.5">Regardless of how long it has been since your last visit, you are safe here.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#DDF3EE] text-[#0F5B5B] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#172323]">Unhurried 60-Minute Consults</h4>
              <p className="text-xs text-[#5F6B6B] mt-0.5">We spend quality time listening to your concerns and answering questions.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Doctor Profile Modal */}
      <DentistProfileModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onBookDoctor={onBookWithDoctor}
      />
    </div>
  );
};
