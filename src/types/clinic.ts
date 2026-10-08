export type ClinicPreset = 'family' | 'cosmetic' | 'implant' | 'emergency' | 'premium';

export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  category: 'general' | 'cosmetic' | 'implants' | 'restorative' | 'ortho' | 'emergency';
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  whoBenefits: string[];
  processSteps: { step: number; title: string; desc: string }[];
  whatToExpect: {
    before: string;
    during: string;
    after: string;
  };
  duration: string;
  technologyUsed: string[];
  anesthesiaOptions: string;
  faqList: { q: string; a: string }[];
  image: string;
  iconName: string;
}

export interface Doctor {
  id: string;
  name: string;
  credentials: string; // e.g., 'DDS, FAGD'
  role: string;
  specialty: string;
  experienceYears: number;
  photo: string;
  bio: string;
  education: string[];
  memberships: string[];
  philosophy: string;
  languages: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  isAnonymous?: boolean;
  rating: number;
  treatment: string;
  date: string;
  quote: string;
  location: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  address: string;
  suite: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  transit: string;
  parking: string;
  accessibility: string;
  hours: { days: string; hours: string }[];
  mapEmbedUrl: string;
}
