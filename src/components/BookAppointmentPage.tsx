import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, User, Phone, Mail, ShieldCheck, Heart, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { all14DentalServices } from '../data/dentalServicesData';
import { doctorsData } from '../data/clinicData';
import { weeklyOperatingHours, getTodaySchedule } from '../data/operatingHours';

interface BookAppointmentPageProps {
  initialService?: string;
  initialDoctor?: string;
}

export const BookAppointmentPage: React.FC<BookAppointmentPageProps> = ({
  initialService = '',
  initialDoctor = '',
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    service: initialService || all14DentalServices[0].title,
    doctor: initialDoctor || 'First Available Specialist',
    date: '2026-09-28',
    time: '10:00 AM',
    patientType: 'new',
    fullName: '',
    email: '',
    phone: '',
    insuranceCarrier: 'Delta Dental PPO',
    comfortNotes: '',
    anxietyLevel: 'low',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  const timeSlots = [
    '9:00 AM',
    '9:45 AM',
    '10:30 AM',
    '11:15 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'VDC-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setBookingConfirmed(true);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full bg-[#FAFAF7] py-8 md:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3EE] text-[#0F5B5B] text-xs font-bold uppercase tracking-wider mx-auto">
            <Calendar className="w-3.5 h-3.5" />
            <span>Online Scheduling</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#172323] tracking-tight font-serif-display">
            Book Your Dental Appointment
          </h1>
          <p className="text-base text-[#5F6B6B] max-w-xl mx-auto">
            Choose your service, select a doctor or convenient time slot, and tell us your comfort preferences.
          </p>
        </div>

        {/* Operating status bar */}
        <div className="bg-white rounded-2xl p-4 border border-[#DCE5E3] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#172323] font-medium">
            <Clock className="w-4 h-4 text-[#0F5B5B]" />
            <span>Clinic Hours Today: {getTodaySchedule().statusText}</span>
          </div>
          <span className="font-bold text-[#0F5B5B] bg-[#DDF3EE] px-2.5 py-1 rounded-lg">
            Same-day appointments available for emergencies
          </span>
        </div>

        {/* Confirmation Screen */}
        {bookingConfirmed ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE5E3] text-center space-y-6 shadow-sm animate-in fade-in">
            <div className="w-20 h-20 rounded-full bg-[#DDF3EE] text-[#0F5B5B] flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F5B5B]">
                Appointment Request Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172323] font-serif-display">
                You're Scheduled, {formData.fullName || 'Valued Patient'}!
              </h2>
              <p className="text-sm text-[#5F6B6B] max-w-md mx-auto">
                We have reserved your dedicated chair time. A confirmation email and text reminder will arrive shortly.
              </p>
            </div>

            {/* Appointment Summary Card */}
            <div className="max-w-md mx-auto bg-[#FAFAF7] rounded-2xl p-5 border border-[#DCE5E3] text-left text-xs sm:text-sm space-y-2.5">
              <div className="flex justify-between py-1 border-b border-[#DCE5E3]/60">
                <span className="text-[#5F6B6B]">Confirmation Code:</span>
                <span className="font-bold text-[#0F5B5B]">{confirmationCode}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#DCE5E3]/60">
                <span className="text-[#5F6B6B]">Treatment:</span>
                <span className="font-bold text-[#172323]">{formData.service}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#DCE5E3]/60">
                <span className="text-[#5F6B6B]">Doctor:</span>
                <span className="font-bold text-[#172323]">{formData.doctor}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#DCE5E3]/60">
                <span className="text-[#5F6B6B]">Date & Time:</span>
                <span className="font-bold text-[#172323]">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#5F6B6B]">Location:</span>
                <span className="font-bold text-[#172323]">420 Lexington Ave, Suite 1400</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setBookingConfirmed(false);
                  setStep(1);
                }}
                className="px-6 py-2.5 rounded-xl border border-[#DCE5E3] hover:border-[#0F5B5B] text-xs font-semibold text-[#172323] transition-colors cursor-pointer"
              >
                Book Another Appointment
              </button>
              <a
                href="tel:+12125550198"
                className="px-6 py-2.5 rounded-xl bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#DDF3EE]" />
                <span>Call Clinic Reception</span>
              </a>
            </div>
          </div>
        ) : (
          /* Multi-Step Interactive Form */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCE5E3] shadow-xs">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#DCE5E3]">
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  step >= 1 ? 'bg-[#0F5B5B] text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  1
                </span>
                <span className="text-xs font-semibold hidden sm:inline text-[#172323]">Service & Doctor</span>
              </div>

              <div className="h-0.5 w-12 bg-[#DCE5E3]" />

              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  step >= 2 ? 'bg-[#0F5B5B] text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  2
                </span>
                <span className="text-xs font-semibold hidden sm:inline text-[#172323]">Date & Time</span>
              </div>

              <div className="h-0.5 w-12 bg-[#DCE5E3]" />

              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  step >= 3 ? 'bg-[#0F5B5B] text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  3
                </span>
                <span className="text-xs font-semibold hidden sm:inline text-[#172323]">Patient Details</span>
              </div>
            </div>

            <form onSubmit={handleCompleteBooking} className="space-y-6">
              {/* STEP 1: Select Service & Doctor */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-2">
                      1. Select Dental Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] text-sm text-[#172323] font-semibold focus:outline-none focus:border-[#0F5B5B]"
                    >
                      {all14DentalServices.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-2">
                      2. Preferred Doctor
                    </label>
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] text-sm text-[#172323] font-semibold focus:outline-none focus:border-[#0F5B5B]"
                    >
                      <option value="First Available Specialist">First Available Specialist (Recommended)</option>
                      {doctorsData.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} — {d.specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                    >
                      Continue to Date & Time →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Choose Date & Time */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-2">
                      Select Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min="2026-09-24"
                      className="w-full p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] text-sm font-semibold focus:outline-none focus:border-[#0F5B5B]"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-2">
                      Select Arrival Time Slot *
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, time })}
                          className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            formData.time === time
                              ? 'bg-[#0F5B5B] text-white shadow-xs'
                              : 'bg-[#FAFAF7] border border-[#DCE5E3] text-[#172323] hover:border-[#0F5B5B]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-xl border border-[#DCE5E3] text-xs font-semibold text-[#5F6B6B] hover:bg-gray-50"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-xl bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                    >
                      Continue to Patient Info →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Patient Information & Preferences */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] text-sm focus:outline-none focus:border-[#0F5B5B]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(212) 555-0100"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] text-sm focus:outline-none focus:border-[#0F5B5B]"
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
                      className="w-full p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] text-sm focus:outline-none focus:border-[#0F5B5B]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-1">
                      Dental Insurance Carrier
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Delta Dental, Cigna, Aetna, or Self-Pay"
                      value={formData.insuranceCarrier}
                      onChange={(e) => setFormData({ ...formData, insuranceCarrier: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] text-sm focus:outline-none focus:border-[#0F5B5B]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172323] block mb-1">
                      Comfort Notes or Any Dental Anxiety
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us if you prefer pause hand signals, noise-canceling headphones, or have sensitive teeth..."
                      value={formData.comfortNotes}
                      onChange={(e) => setFormData({ ...formData, comfortNotes: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#DCE5E3] bg-[#FAFAF7] text-sm focus:outline-none focus:border-[#0F5B5B]"
                    />
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-xl border border-[#DCE5E3] text-xs font-semibold text-[#5F6B6B] hover:bg-gray-50"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-[#0F5B5B] hover:bg-[#0c4848] text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
                    >
                      Confirm Appointment Booking
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
