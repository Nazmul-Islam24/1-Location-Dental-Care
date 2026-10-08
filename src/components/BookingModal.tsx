import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { doctorsData, servicesData } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedDoctor?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  preselectedDoctor = '',
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    service: preselectedService || 'General & Preventive Care',
    doctor: preselectedDoctor || 'Dr. Sarah Williams (General & Cosmetic)',
    date: '',
    time: '10:00 AM',
    patientType: 'new', // new or returning
    fullName: '',
    email: '',
    phone: '',
    insuranceCarrier: 'Delta Dental',
    comfortNotes: '',
    anxietyLevel: 'low', // low, moderate, high
  });

  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  if (!isOpen) return null;

  const timeSlots = [
    '8:30 AM',
    '9:30 AM',
    '10:30 AM',
    '11:30 AM',
    '1:00 PM',
    '2:30 PM',
    '3:30 PM',
    '4:30 PM',
  ];

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'VDC-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setBookingConfirmed(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0F5B5B', '#DDF3EE', '#F4B39A', '#172323'],
      });
    } catch {
      // ignore
    }
  };

  const handleResetAndClose = () => {
    setBookingConfirmed(false);
    setStep(1);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#DCE5E3] overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#DCE5E3] flex items-center justify-between bg-[#FAFAF7]">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#0F5B5B]">
              Verdant Care Concierge
            </div>
            <h2 id="booking-modal-title" className="text-xl sm:text-2xl font-bold text-[#172323] font-serif-display">
              {bookingConfirmed ? 'Appointment Reserved' : 'Book Your Dental Visit'}
            </h2>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-xl text-[#5F6B6B] hover:text-[#172323] hover:bg-gray-200/60 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {bookingConfirmed ? (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#0F5B5B] bg-[#DDF3EE] px-3 py-1 rounded-full">
                  Confirmation Code: {confirmationCode}
                </span>
                <h3 className="text-2xl font-bold text-[#172323] font-serif-display">
                  We look forward to welcoming you, {formData.fullName || 'there'}!
                </h3>
                <p className="text-sm text-[#5F6B6B] max-w-md mx-auto">
                  A confirmation SMS and calendar invite have been sent to{' '}
                  <strong className="text-[#172323]">{formData.email || formData.phone}</strong>.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#FAFAF7] p-5 rounded-2xl border border-[#DCE5E3] text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-[#5F6B6B]">Treatment / Care:</span>
                  <span className="font-bold text-[#172323]">{formData.service}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-[#5F6B6B]">Treating Clinician:</span>
                  <span className="font-bold text-[#172323]">{formData.doctor}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-[#5F6B6B]">Date & Slot:</span>
                  <span className="font-bold text-[#172323]">
                    {formData.date || 'Preferred this week'} at {formData.time}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#5F6B6B]">Location:</span>
                  <span className="font-bold text-[#172323]">420 Lexington Ave, Suite 1400 (NYC)</span>
                </div>
              </div>

              <div className="text-xs text-[#5F6B6B] max-w-sm mx-auto">
                Need to reschedule or have sudden pain before your appointment? Call our priority line at{' '}
                <a href="tel:+12125550198" className="font-bold text-[#0F5B5B] underline">
                  (212) 555-0198
                </a>.
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-8 py-3 bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-semibold text-sm rounded-xl transition-colors"
              >
                Done & Return to Homepage
              </button>
            </div>
          ) : (
            /* Multi-step Form per Blueprint Section 50 */
            <form onSubmit={handleCompleteBooking} className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DCE5E3] text-xs">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                      step >= 1 ? 'bg-[#0F5B5B] text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    1
                  </span>
                  <span className={`font-medium ${step === 1 ? 'text-[#0F5B5B] font-bold' : 'text-[#5F6B6B]'}`}>
                    Service & Clinician
                  </span>
                </div>

                <div className="w-8 h-0.5 bg-gray-200" />

                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                      step >= 2 ? 'bg-[#0F5B5B] text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    2
                  </span>
                  <span className={`font-medium ${step === 2 ? 'text-[#0F5B5B] font-bold' : 'text-[#5F6B6B]'}`}>
                    Time & Patient Info
                  </span>
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-150">
                  {/* Service selection */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-2">
                      What would you like help with today? *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'General & Preventive Care',
                        'Cosmetic Dentistry & Veneers',
                        'Dental Implants & 3D Restoration',
                        'Same-Day Ceramic Crowns',
                        'Clear Aligners (Invisalign®)',
                        'Emergency Urgent Care',
                      ].map((serv) => (
                        <button
                          type="button"
                          key={serv}
                          onClick={() => setFormData({ ...formData, service: serv })}
                          className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all ${
                            formData.service === serv
                              ? 'border-[#0F5B5B] bg-[#DDF3EE]/50 text-[#0F5B5B] ring-1 ring-[#0F5B5B]'
                              : 'border-[#DCE5E3] text-[#172323] hover:border-[#0F5B5B]/30'
                          }`}
                        >
                          {serv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Doctor selection */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-2">
                      Preferred Clinician
                    </label>
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] text-[#172323] focus:outline-none focus:border-[#0F5B5B]"
                    >
                      <option value="Dr. Sarah Williams (General & Cosmetic)">
                        Dr. Sarah Williams, DDS (General & Cosmetic Director)
                      </option>
                      <option value="Dr. Marcus Vance (Implants & Periodontics)">
                        Dr. Marcus Vance, DMD (Implant & Bone Specialist)
                      </option>
                      <option value="Dr. Elena Rostova (Pediatric & Family)">
                        Dr. Elena Rostova, DDS (Family & Anxiety-Free Specialist)
                      </option>
                      <option value="First Available Doctor">
                        First Available Clinician (Fastest Availability)
                      </option>
                    </select>
                  </div>

                  {/* Patient status */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-2">
                      Are you a new patient to Verdant?
                    </label>
                    <div className="flex gap-4 text-xs font-medium">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="ptype"
                          checked={formData.patientType === 'new'}
                          onChange={() => setFormData({ ...formData, patientType: 'new' })}
                          className="accent-[#0F5B5B]"
                        />
                        <span>Yes, I am a new patient</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="ptype"
                          checked={formData.patientType === 'returning'}
                          onChange={() => setFormData({ ...formData, patientType: 'returning' })}
                          className="accent-[#0F5B5B]"
                        />
                        <span>Returning patient</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-3 bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors"
                    >
                      Continue to Schedule & Details →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] focus:outline-none focus:border-[#0F5B5B]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-1">
                        Preferred Time Slot *
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] focus:outline-none focus:border-[#0F5B5B]"
                      >
                        {timeSlots.map((ts) => (
                          <option key={ts} value={ts}>
                            {ts}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] focus:outline-none focus:border-[#0F5B5B]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(212) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] focus:outline-none focus:border-[#0F5B5B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] focus:outline-none focus:border-[#0F5B5B]"
                    />
                  </div>

                  {/* Anxiety Comfort Level Indicator per Blueprint */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-1">
                      How anxious do you feel about dental appointments?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'low', label: '😊 Calm / Routine', note: 'Standard visits' },
                        { id: 'moderate', label: '😐 A Bit Nervous', note: 'Extra gentle care' },
                        { id: 'high', label: '😟 High Dental Fear', note: 'Sedation & pacing' },
                      ].map((level) => (
                        <button
                          type="button"
                          key={level.id}
                          onClick={() => setFormData({ ...formData, anxietyLevel: level.id })}
                          className={`p-2 rounded-xl border text-center transition-all ${
                            formData.anxietyLevel === level.id
                              ? 'border-[#0F5B5B] bg-[#DDF3EE]/60 text-[#0F5B5B] font-bold'
                              : 'border-[#DCE5E3] text-[#5F6B6B] hover:text-[#172323]'
                          }`}
                        >
                          <div className="text-xs font-bold">{level.label}</div>
                          <div className="text-[10px] text-[#5F6B6B]">{level.note}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-1">
                      Special requests, symptoms, or questions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. sensitive gums on upper left, request noise-canceling headphones..."
                      value={formData.comfortNotes}
                      onChange={(e) => setFormData({ ...formData, comfortNotes: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] focus:outline-none focus:border-[#0F5B5B]"
                    />
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3 px-5 border border-[#DCE5E3] text-[#5F6B6B] hover:text-[#172323] font-semibold text-xs sm:text-sm rounded-xl transition-colors"
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-xs"
                    >
                      Confirm Appointment Request
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
