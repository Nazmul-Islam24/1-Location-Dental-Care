import { ClinicPreset, Doctor, LocationInfo, ServiceDetail, Testimonial } from '../types/clinic';
import doctor1 from '../assets/images/doctor-1.avif'
import doctor2 from '../assets/images/doctor-2.avif'
import doctor3 from '../assets/images/doctor-3.avif'
import doctor4 from '../assets/images/doctor-4.avif'
import doctor5 from '../assets/images/doctor-5.avif'
import doctor6 from '../assets/images/doctor-6.avif'
import doctor7 from '../assets/images/doctor-7.avif'



export const presetConfig: Record<
  ClinicPreset,
  {
    name: string;
    label: string;
    heroEyebrow: string;
    heroH1: string;
    heroSupporting: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    themeMode: 'default' | 'premium';
    focusOrder: ('services' | 'beforeAfter' | 'doctors' | 'emergency' | 'technology' | 'firstVisit')[];
    badge: string;
  }
> = {
  family: {
    name: 'Verdant Family & Modern Care',
    label: 'Client A — Family Clinic',
    heroEyebrow: 'MODERN DENTAL CARE IN MIDTOWN MANHATTAN',
    heroH1: 'A Healthier Smile Starts With Feeling Comfortable.',
    heroSupporting:
      'Personalized, stress-free dental care for you and your family. Gentle checkups, preventive hygiene, and clear communication every step of the way.',
    primaryCtaText: 'Book an Appointment',
    secondaryCtaText: 'Call the Clinic (212) 555-0198',
    themeMode: 'default',
    focusOrder: ['firstVisit', 'services', 'doctors', 'technology', 'beforeAfter'],
    badge: 'Accepting New Patients & Whole Families',
  },
  cosmetic: {
    name: 'Verdant Cosmetic Studio',
    label: 'Client B — Cosmetic Studio',
    heroEyebrow: 'AESTHETIC SMILE DESIGN IN MANHATTAN',
    heroH1: 'Your Confident Smile Starts Here.',
    heroSupporting:
      'Custom handcrafted porcelain veneers, discreet aligners, and professional whitening crafted to harmonize naturally with your facial aesthetics.',
    primaryCtaText: 'Book Smile Consultation',
    secondaryCtaText: 'View Smile Gallery',
    themeMode: 'default',
    focusOrder: ['beforeAfter', 'services', 'doctors', 'firstVisit', 'technology'],
    badge: 'Bespoke Aesthetic Smile Consultations',
  },
  implant: {
    name: 'Verdant Implant & Restorative Center',
    label: 'Client C — Implant Specialist',
    heroEyebrow: 'ADVANCED IMPLANTOLOGY & SURGICAL RESTORATION',
    heroH1: 'A Stronger, Permanent Smile Starts Here.',
    heroSupporting:
      'State-of-the-art 3D guided dental implants designed for lifelong function and natural beauty. Restoring bite strength and confidence with surgical precision.',
    primaryCtaText: 'Schedule Implant Consult',
    secondaryCtaText: 'Learn the 3D Process',
    themeMode: 'default',
    focusOrder: ['technology', 'services', 'doctors', 'beforeAfter', 'firstVisit'],
    badge: '3D Guided Computerized Implantology',
  },
  emergency: {
    name: 'Verdant Urgent Dental Care',
    label: 'Client D — Emergency Care',
    heroEyebrow: 'URGENT DENTAL CARE AVAILABLE TODAY',
    heroH1: 'Dental Care When You Need It Most.',
    heroSupporting:
      'Immediate pain relief for toothaches, chipped teeth, infections, and sports trauma. Same-day emergency appointments guaranteed with zero judgment.',
    primaryCtaText: 'Call Now: (212) 555-0198',
    secondaryCtaText: 'Book Urgent Slot',
    themeMode: 'default',
    focusOrder: ['emergency', 'services', 'doctors', 'technology', 'firstVisit'],
    badge: 'Same-Day Emergency Relief Guaranteed',
  },
  premium: {
    name: 'Verdant Atelier Dentistry',
    label: 'Client E — Premium Private Studio',
    heroEyebrow: 'PRIVATE CONTEMPORARY DENTAL SUITE · 5TH AVE',
    heroH1: 'Thoughtful Dentistry. Beautifully Delivered.',
    heroSupporting:
      'An unhurried, private sanctuary for oral health and facial aesthetics. High-fidelity biomimetic restorations in an atmosphere of quiet luxury.',
    primaryCtaText: 'Reserve Private Suite',
    secondaryCtaText: 'Explore Atelier Care',
    themeMode: 'premium',
    focusOrder: ['beforeAfter', 'doctors', 'services', 'firstVisit', 'technology'],
    badge: 'Private Concierge Dental Suites',
  },
};

export const clinicLocations: LocationInfo[] = [
  {
    id: 'manhattan',
    name: 'Midtown Manhattan (Flagship)',
    address: '420 Lexington Avenue',
    suite: 'Suite 1400 (The Graybar Building)',
    city: 'New York',
    state: 'NY',
    zip: '10170',
    phone: '(212) 555-0198',
    emergencyPhone: '(212) 555-0199',
    email: 'hello@verdantdentalcare.com',
    transit: 'Direct indoor connection to Grand Central Terminal (4, 5, 6, 7, S Subway lines & Metro-North).',
    parking: 'Validating garage parking available across Lexington Ave (Icon Parking 24/7).',
    accessibility: 'Step-free street access, wide ADA elevator banks, tactile signage, and wheelchair-accessible operatories.',
    hours: [
      { days: 'Monday', hours: '9:00 AM – 6:00 PM' },
      { days: 'Tuesday', hours: '9:00 AM – 6:00 PM' },
      { days: 'Wednesday', hours: '9:00 AM – 6:00 PM' },
      { days: 'Thursday', hours: '9:00 AM – 6:00 PM' },
      { days: 'Friday', hours: '9:00 AM – 1:00 PM' },
      { days: 'Saturday', hours: '9:00 AM – 2:00 PM (By Appt. Only)' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=420+Lexington+Ave+New+York&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn Heights Studio',
    address: '110 Montague Street',
    suite: 'Floor 3',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11201',
    phone: '(718) 555-0142',
    emergencyPhone: '(718) 555-0143',
    email: 'brooklyn@verdantdentalcare.com',
    transit: '2 blocks from Borough Hall (2, 3, 4, 5) and Court St (R train).',
    parking: 'Metered street parking on Montague & Clinton St; garage at 180 Montague.',
    accessibility: 'Full elevator service, ADA-compliant restrooms, and sensory-friendly acoustic treatment.',
    hours: [
      { days: 'Tuesday – Friday', hours: '8:30 AM – 5:30 PM' },
      { days: 'Saturday', hours: '9:00 AM – 3:00 PM' },
      { days: 'Sunday – Monday', hours: 'Closed' },
    ],
    mapEmbedUrl: 'https://maps.google.com/maps?q=110+Montague+St+Brooklyn+NY&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
];

export const doctorsData: Doctor[] = [
  {
    id: 'dr-sarah-williams',
    name: 'Dr. Sarah Williams',
    credentials: 'DDS, FAGD',
    role: 'Clinical Director & Lead Aesthetic Dentist',
    specialty: 'Cosmetic & Biomimetic Restorative Dentistry',
    experienceYears: 14,
    photo: doctor1,
    bio: 'Dr. Williams focuses on patient-centered dental care with an emphasis on comfort, clear communication, and personalized treatment planning. She believes dental appointments should be serene, transparent, and empowering.',
    education: [
      'Columbia University College of Dental Medicine — Doctor of Dental Surgery (DDS)',
      'Mount Sinai Hospital — Advanced Education in General Dentistry (AEGD)',
      'Fellowship, Academy of General Dentistry (FAGD)',
    ],
    memberships: [
      'American Dental Association (ADA)',
      'American Academy of Cosmetic Dentistry (AACD)',
      'New York State Dental Association (NYSDA)',
    ],
    philosophy:
      'We never perform cookie-cutter dentistry. Every plan begins by understanding your individual comfort level and lifestyle goals.',
    languages: ['English', 'Spanish'],
  },
  {
    id: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance',
    credentials: 'DMD, MS',
    role: 'Board-Certified Periodontist & Implantologist',
    specialty: '3D Guided Implants & Bone Regeneration',
    experienceYears: 12,
    photo: doctor2,
    bio: 'Dr. Vance specializes in minimally invasive implant placement and periodontal health. He utilizes computerized guided surgery to maximize patient comfort and accelerate healing times.',
    education: [
      'Harvard School of Dental Medicine — Doctor of Dental Medicine (DMD)',
      'University of Pennsylvania — Master of Science & Certificate in Periodontics',
      'Diplomate, International Congress of Oral Implantologists (ICOI)',
    ],
    memberships: [
      'American Academy of Periodontology (AAP)',
      'International Congress of Oral Implantologists (ICOI)',
      'Northeastern Society of Periodontists',
    ],
    philosophy:
      'Modern implantology should be predictable, gentle, and engineered to feel exactly like your natural biological teeth.',
    languages: ['English'],
  },
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova',
    credentials: 'DDS, MPH',
    role: 'Family & Pediatric Specialist',
    specialty: 'Preventive Care, Kids & Anxiety-Free Dentistry',
    experienceYears: 9,
    photo: doctor3,
    bio: 'Dr. Rostova has transformed dental visits for hundreds of nervous adults and young children. Her gentle demeanor, tell-show-do technique, and calming demeanor alleviate dental phobia completely.',
    education: [
      'New York University College of Dentistry — Doctor of Dental Surgery (DDS)',
      'Columbia University Mailman School of Public Health — Master of Public Health (MPH)',
      'St. Barnabas Hospital — Pediatric & Family Dental Residency',
    ],
    memberships: [
      'American Dental Association (ADA)',
      'American Society of Dental Anesthesiology',
      'Academy of General Dentistry',
    ],
    philosophy:
      'Dental care should never hurt or feel intimidating. We take all the time you need to breathe, ask questions, and feel safe.',
    languages: ['English', 'French', 'Russian'],
  },
  {
    id: 'dr-julian-chen',
    name: 'Dr. Julian Chen',
    credentials: 'DDS, MS',
    role: 'Board-Certified Orthodontist',
    specialty: 'Discreet Clear Aligners & Smile Alignment',
    experienceYears: 11,
    photo: doctor4,
    bio: 'Dr. Chen combines digital bite biomechanics with facial profile aesthetics. As an elite clear aligner provider, he crafts harmonious, stable smiles using low-visibility aligners for adults and teens.',
    education: [
      'University of California, San Francisco (UCSF) — Doctor of Dental Surgery (DDS)',
      'NYU Langone Dental Medicine — Master of Science & Certificate in Orthodontics',
      'Invisalign® Diamond Plus Top Provider Certification',
    ],
    memberships: [
      'American Association of Orthodontists (AAO)',
      'Northeastern Society of Orthodontists (NESO)',
      'American Dental Association (ADA)',
    ],
    philosophy:
      'A great smile is facial harmony in motion. We align your bite for optimal health, airway function, and effortless confidence.',
    languages: ['English', 'Mandarin'],
  },
  {
    id: 'dr-sophia-martinez',
    name: 'Dr. Sophia Martinez',
    credentials: 'DMD, FICD',
    role: 'Board-Certified Endodontist',
    specialty: 'Microscopic Root Canal & Tooth Preservation',
    experienceYears: 13,
    photo: doctor5,
    bio: 'Dr. Martinez specializes in single-visit root canal treatments utilizing 3D surgical operating microscopes. Her ultra-gentle micro-techniques eradicate deep nerve pain while permanently saving biological teeth.',
    education: [
      'Penn Dental Medicine — Doctor of Dental Medicine (DMD)',
      'Albert Einstein College of Medicine / Montefiore — Certificate in Endodontics',
      'Fellow, International College of Dentists (FICD)',
    ],
    memberships: [
      'American Association of Endodontists (AAE)',
      'New York State Dental Association (NYSDA)',
      'American Dental Association (ADA)',
    ],
    philosophy:
      'Saving your natural tooth structure is always our highest calling. Micro-endodontics should be completely painless, calming, and restorative.',
    languages: ['English', 'Spanish', 'Portuguese'],
  },
  {
    id: 'dr-tariq-al-mansoor',
    name: 'Dr. Tariq Al-Mansoor',
    credentials: 'DDS, FACS',
    role: 'Oral & Maxillofacial Surgeon',
    specialty: 'Wisdom Teeth, Bone Grafting & Sedation Dentistry',
    experienceYears: 15,
    photo: doctor6,
    bio: 'Dr. Al-Mansoor is a fellowship-trained oral surgeon specializing in comfortable wisdom tooth removals, dental bone rebuilding, and gentle twilight conscious sedation for anxious patients.',
    education: [
      'NYU College of Dentistry — Doctor of Dental Surgery (DDS)',
      'Bellevue Hospital Center — Oral & Maxillofacial Surgery Residency',
      'Johns Hopkins Medicine — General Surgery Clinical Fellowship',
      'Fellow, American College of Surgeons (FACS)',
    ],
    memberships: [
      'American Association of Oral and Maxillofacial Surgeons (AAOMS)',
      'American Dental Society of Anesthesiology (ADSA)',
      'New York Academy of Dentistry',
    ],
    philosophy:
      'Surgical care should feel peaceful and seamless. With individualized IV sedation, patients rest comfortably without memory of discomfort.',
    languages: ['English', 'Arabic'],
  },
];

export const servicesData: ServiceDetail[] = [
  {
    id: 'general-dentistry',
    title: 'General & Preventive Care',
    slug: 'general-dentistry',
    category: 'general',
    tagline: 'Comprehensive exams, ultrasonic cleanings, and preventive preservation',
    shortDescription:
      'Gentle preventive cleanings, low-radiation digital imaging, and protective sealants designed to maintain your natural smile for life.',
    fullOverview:
      'Preventive dentistry is the foundation of lifelong oral wellness. Our gentle hygiene appointments pair ultrasonic plaque removal with customized gum health assessments in an unhurried, comfortable setting.',
    whoBenefits: [
      'Patients due for regular 6-month checkup and professional hygiene',
      'Individuals experiencing bleeding or tender gums when brushing',
      'Children and adults seeking protective cavity-prevention sealants',
      'Anyone wanting a clear, honest overview of their current oral health',
    ],
    processSteps: [
      { step: 1, title: 'Warm Welcome & Health Review', desc: 'Discuss your health history, comfort preferences, and any sensitivity concerns.' },
      { step: 2, title: 'Gentle 3D & Digital X-Rays', desc: 'Ultra-low radiation scans and high-resolution intraoral photos shown to you on-screen.' },
      { step: 3, title: 'Ultrasonic Hygiene Cleaning', desc: 'Meticulous, pain-free plaque and tartar removal with warm-water polishing.' },
      { step: 4, title: 'Doctor Consultation & Guidance', desc: 'Dr. Williams or Dr. Rostova reviews your teeth and gives clear, non-pressured advice.' },
    ],
    whatToExpect: {
      before: 'Complete brief digital check-in on your phone. No paperwork clipboard required.',
      during: 'Warm neck pillow, noise-canceling headphones with Spotify or Netflix, gentle touch.',
      after: 'Fresh, polished teeth and a transparent printout/email summary of your tooth health score.',
    },
    duration: '45–60 minutes',
    technologyUsed: ['Ultrasonic Cavitron Scalers', 'Low-Dose Digital Sensors', 'HD Intraoral Camera'],
    anesthesiaOptions: 'Topical anesthetic gel available upon request (no needle required for cleanings)',
    faqList: [
      {
        q: 'How often should I get a dental cleaning?',
        a: 'For most healthy adults and kids, every 6 months is ideal. If you manage periodontal sensitivity or orthodontic braces, 3–4 months may be advised.',
      },
      {
        q: 'Does a dental cleaning hurt if my teeth are sensitive?',
        a: 'Not at our clinic. We offer warm desensitizing rinses, topical numbing gels, and adjustable ultrasonic pressure tailored to your comfort.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShieldCheck',
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry & Veneers',
    slug: 'cosmetic-dentistry',
    category: 'cosmetic',
    tagline: 'Artisan porcelain veneers, aesthetic bonding, and smile makeovers',
    shortDescription:
      'Subtle, natural-looking aesthetic treatments tailored to enhance your smile harmony without ever looking artificial or oversized.',
    fullOverview:
      'We combine micro-layer porcelain ceramics with biometric facial analysis to design smiles that look vibrantly natural. Whether correcting chips, gaps, or deep discoloration, our conservative approach preserves maximum natural tooth enamel.',
    whoBenefits: [
      'Teeth that are chipped, worn, uneven, or have persistent gaps',
      'Deep discoloration resistant to standard chemical whitening',
      'Patients preparing for weddings, career milestones, or refreshed confidence',
      'Those seeking a natural, balanced smile that fits their facial proportions',
    ],
    processSteps: [
      { step: 1, title: 'Aesthetic Consultation & 3D Scan', desc: 'Digital facial photos and digital scans capture your natural tooth dynamics.' },
      { step: 2, title: 'Interactive Smile Preview', desc: 'See and test your simulated new smile before any preparation begins.' },
      { step: 3, title: 'Artisan Porcelain Crafting', desc: 'Hand-layered biocompatible porcelain custom matched by our master ceramist.' },
      { step: 4, title: 'Precision Bonding & Reveal', desc: 'Permanent adhesion with microscopic accuracy, followed by your confident reveal.' },
    ],
    whatToExpect: {
      before: 'Bring photos of smiles you love; we discuss tooth shapes, shade gradients, and desires.',
      during: 'Completely comfortable visits with local anesthesia or light sedation if preferred.',
      after: 'Immediate boost in bite harmony and radiant smile confidence with simple daily care.',
    },
    duration: '2–3 visits over 2 weeks',
    technologyUsed: ['3Shape TRIOS Intraoral Scanner', 'Digital Smile Design (DSD)', 'Handcrafted Feldspathic Porcelain'],
    anesthesiaOptions: 'Gentle computer-assisted local anesthesia & nitrous oxide relaxation',
    faqList: [
      {
        q: 'How long do porcelain veneers last?',
        a: 'With routine flossing and regular cleanings, high-grade porcelain veneers routinely last 15 to 20+ years.',
      },
      {
        q: 'Will my veneers look fake or too bright white?',
        a: 'Never. Dr. Williams custom formulates translucency, surface texture, and natural enamel gradations to match your unique skin tone and facial harmony.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkles',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants & 3D Restorations',
    slug: 'dental-implants',
    category: 'implants',
    tagline: 'Permanent, lifelike tooth replacements anchored securely in jawbone',
    shortDescription:
      'State-of-the-art titanium and zirconia dental implants placed with 3D CBCT surgical guidance for unmatched stability, chewing power, and longevity.',
    fullOverview:
      'A missing tooth affects chewing efficiency, adjacent tooth alignment, and bone health over time. Our 3D guided dental implants replace the root and crown entirely, feeling and functioning indistinguishable from biological teeth.',
    whoBenefits: [
      'Adults missing one or multiple teeth due to injury or decay',
      'Patients tired of unstable, slipping removable dentures or messy adhesives',
      'Individuals wishing to preserve natural jawbone density and facial structure',
      'Anyone wanting to eat crisp apples, nuts, and steak without discomfort',
    ],
    processSteps: [
      { step: 1, title: '3D CBCT Bone & Nerve Mapping', desc: 'Sub-millimeter volumetric scan evaluates exact bone density and anatomy.' },
      { step: 2, title: 'Computer-Guided Placement', desc: 'Precision surgical guide places the biocompatible post with minimal incision.' },
      { step: 3, title: 'Osseointegration & Healing', desc: 'The implant fuses securely with bone over 8–12 weeks while you wear a natural temp crown.' },
      { step: 4, title: 'Custom Zirconia Crown Delivery', desc: 'Your permanent custom-shaded crown is fixed securely in place.' },
    ],
    whatToExpect: {
      before: 'Comprehensive 3D review where we show you exactly where the implant will sit.',
      during: 'Surprisingly quick and comfortable — most single implants take under 45 minutes.',
      after: 'Most patients return to regular work the very next morning with mild over-the-counter pain relief.',
    },
    duration: '2–4 months total healing cycle',
    technologyUsed: ['Planmeca 3D CBCT Scanner', 'Surgical Computer Guides', 'Grade 4 Titanium / Pure Ceramic Posts'],
    anesthesiaOptions: 'Profound local anesthesia, oral conscious sedation, or IV twilight sleep',
    faqList: [
      {
        q: 'Is getting a dental implant painful?',
        a: 'Because the jawbone has very few sensory nerve endings, most patients report that an implant causes less post-op discomfort than a standard tooth extraction.',
      },
      {
        q: 'What is the success rate of dental implants?',
        a: 'Under our guided surgical protocols, dental implants have a clinical success rate exceeding 98%.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    iconName: 'Anchor',
  },
  {
    id: 'restorative-dentistry',
    title: 'Same-Day Crowns & Biomimetic Restorations',
    slug: 'restorative-dentistry',
    category: 'restorative',
    tagline: 'Single-visit ceramic crowns, composite restorations, and pain-free root canals',
    shortDescription:
      'Say goodbye to gooey impressions and temporary plastic crowns. We design, mill, and seat permanent porcelain crowns in a single visit.',
    fullOverview:
      'When teeth suffer deep fractures or structural decay, biomimetic restorations rebuild strength while preserving healthy biological tissue. Using in-house 3D CAD/CAM milling, you walk out the same day with your permanent restoration.',
    whoBenefits: [
      'Cracked, broken, or heavily decayed teeth needing structural reinforcement',
      'Replacing old black silver mercury amalgam fillings with tooth-colored composite',
      'Toothaches requiring gentle, soothing endodontic therapy (root canal)',
      'Busy professionals wanting everything completed in a single convenient visit',
    ],
    processSteps: [
      { step: 1, title: 'Gentle Preparation & Digital Scan', desc: 'Decay is carefully removed and captured with an optical 3D camera.' },
      { step: 2, title: '3D Virtual CAD Crown Design', desc: 'The doctor contours your crown on screen with exact bite occlusion.' },
      { step: 3, title: 'In-House Ceramic Milling', desc: 'A solid block of lithium disilicate ceramic is precision-milled in 15 minutes.' },
      { step: 4, title: 'Permanent Ceramic Bonding', desc: 'Glazed, baked in ceramic oven, and permanently bonded to your tooth.' },
    ],
    whatToExpect: {
      before: 'Quick digital consultation; review your tooth x-ray on the patient monitor.',
      during: 'Relax while the robotic milling machine creates your custom crown right before your eyes.',
      after: 'Chew normally that same evening. No follow-up second appointment required.',
    },
    duration: 'Single 90-minute visit',
    technologyUsed: ['CEREC Omnicam CAD/CAM', 'Ivoclar Porcelain Oven', 'Biomimetic Bonding Adhesives'],
    anesthesiaOptions: 'Single-tooth computer-controlled anesthetic wand (no numb drooping lips)',
    faqList: [
      {
        q: 'Are same-day crowns as durable as traditional lab crowns?',
        a: 'Yes. They are milled from solid industrial blocks of high-strength lithium disilicate or zirconia, providing identical or superior strength compared to lab crowns.',
      },
      {
        q: 'Do I have to wear a temporary crown for two weeks?',
        a: 'No! You walk out of your single visit with the permanent ceramic crown securely bonded.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    iconName: 'RotateCcw',
  },
  {
    id: 'orthodontics-aligners',
    title: 'Discreet Clear Aligners (Invisalign®)',
    slug: 'orthodontics-aligners',
    category: 'ortho',
    tagline: 'Virtually invisible orthodontic teeth straightening for adults and teens',
    shortDescription:
      'Straighten crowded, overlapping teeth or close gaps with custom crystal-clear removable trays. No metal wires or dietary restrictions.',
    fullOverview:
      'Clear aligners allow you to achieve optimal teeth alignment discreetly. Using predictive 3D software, we map every micro-movement from start to finish so you can preview your final smile before starting.',
    whoBenefits: [
      'Adults and teens with crowded, crooked, or rotated teeth',
      'Patients with relapse movement after teenage metal braces',
      'Deep bites, open bites, crossbites, or unwanted tooth spacing',
      'Professionals needing removable aligners for meetings and photos',
    ],
    processSteps: [
      { step: 1, title: '3D Outcome Simulation Scan', desc: 'See your projected week-by-week smile movement in 3 minutes.' },
      { step: 2, title: 'Custom Tray Fabrication', desc: 'SmartTrack medical-grade clear trays fabricated to your dental anatomy.' },
      { step: 3, title: 'Wear & Switch Weekly', desc: 'Wear trays 20–22 hours daily, switching to the next tray at home each week.' },
      { step: 4, title: 'Quick Virtual / In-Person Check', desc: 'Brief monitoring every 6–8 weeks to confirm ideal progress.' },
    ],
    whatToExpect: {
      before: 'Comprehensive bite check and digital scans. No gooey impressions.',
      during: 'Clear trays fit snugly over teeth; friends and coworkers rarely notice them.',
      after: 'A straight, functional bite and custom retainers to maintain your smile indefinitely.',
    },
    duration: '6–14 months on average',
    technologyUsed: ['ClinCheck 3D Treatment Planner', 'SmartTrack Polymer Trays', 'Virtual Dental Monitoring App'],
    anesthesiaOptions: 'None required; completely non-invasive',
    faqList: [
      {
        q: 'Can I remove the aligners to eat and brush?',
        a: 'Yes! Simply take them out during meals and oral hygiene. You have zero food restrictions and can brush and floss normally.',
      },
      {
        q: 'Will clear aligners affect my speech?',
        a: 'Most patients experience a very slight adjustment period of 24–48 hours, after which speaking feels completely natural.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    iconName: 'Smile',
  },
  {
    id: 'emergency-dentistry',
    title: 'Emergency Dental Relief',
    slug: 'emergency-dentistry',
    category: 'emergency',
    tagline: 'Same-day urgent appointments for acute tooth pain, trauma, and lost restorations',
    shortDescription:
      'Severe toothache? Broken tooth or knocked-out restoration? Call our emergency line for rapid, soothing care and immediate relief today.',
    fullOverview:
      'Dental emergencies cause tremendous discomfort and anxiety. We hold designated daily reserve slots specifically for same-day emergency triage, ensuring you never have to suffer through the night or weekend.',
    whoBenefits: [
      'Throbbing toothache or extreme sensitivity to hot/cold',
      'Cracked, chipped, or fully dislodged tooth from sports or trauma',
      'Lost filling, loose bridge, or detached crown',
      'Gum swelling, abscess, or sudden facial tenderness',
    ],
    processSteps: [
      { step: 1, title: 'Immediate Triage Call', desc: 'Our triage team assesses your symptoms and guides you on immediate first aid.' },
      { step: 2, title: 'Priority Arrival & Pain Relief', desc: 'Immediate gentle numbing to halt acute nerve pain the moment you sit down.' },
      { step: 3, title: 'Focused Diagnostic X-Ray', desc: 'Targeted single-tooth digital scan pinpoints the root cause immediately.' },
      { step: 4, title: 'Same-Day Treatment or Stabilization', desc: 'Emergency repair, soothing medication, or temporary restoration.' },
    ],
    whatToExpect: {
      before: 'Call (212) 555-0198 immediately. If a tooth is knocked out, place it in cold milk.',
      during: 'Calm, empathetic care focused primarily on eliminating pain first.',
      after: 'Prescription if needed, comprehensive instructions, and follow-up check-in.',
    },
    duration: '30–45 minutes immediate triage',
    technologyUsed: ['Targeted Digital Radiography', 'Pulp Vitality Tester', 'Immediate Composite Splinting'],
    anesthesiaOptions: 'Rapid-acting local analgesia & calming nitrous oxide',
    faqList: [
      {
        q: 'What should I do if a permanent tooth is knocked out completely?',
        a: 'Hold it by the white crown (never touch the root), gently rinse with water if dirty, and store it in a cup of milk or saliva. Call us immediately — teeth replanted within 60 minutes have the highest survival rate.',
      },
      {
        q: 'Do you charge extra for emergency visits?',
        a: 'We maintain honest, transparent pricing with no predatory emergency markups. Diagnostic exam and x-ray costs are explained clearly before beginning.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    iconName: 'AlertCircle',
  },
];

export const patientStories: Testimonial[] = [
  {
    id: 'rev-1',
    patientName: 'Claire M.',
    rating: 5,
    treatment: 'Cosmetic Veneers & Whitening',
    date: 'February 2026',
    quote:
      'I had postponed fixing my chipped front teeth for nearly five years out of fear of fake-looking results. Dr. Williams was so attentive and mapped every curve. My smile looks 100% natural, and I smile constantly in photos now!',
    location: 'Midtown Manhattan',
  },
  {
    id: 'rev-2',
    patientName: 'David K.',
    rating: 5,
    treatment: 'Dental Implant & 3D Restoration',
    date: 'January 2026',
    quote:
      'Dr. Vance explained the 3D guided surgery with so much clarity. The actual implant procedure took under 30 minutes, and I had zero throbbing that night. Being able to chew comfortably on both sides again is priceless.',
    location: 'Upper East Side',
  },
  {
    id: 'rev-3',
    patientName: 'Amina & Liam T.',
    rating: 5,
    treatment: 'Family Checkups & Pediatric Care',
    date: 'March 2026',
    quote:
      'My 7-year-old son used to cry at the thought of a dentist. Dr. Elena turned the entire visit into an adventure with sunglasses and gentle games. Now he asks when we get to go back. Highly recommended for families!',
    location: 'Brooklyn Heights',
  },
  {
    id: 'rev-4',
    patientName: 'Robert S.',
    rating: 5,
    treatment: 'Emergency Tooth Relief & Crown',
    date: 'March 2026',
    quote:
      'Cracked a molar on a Friday afternoon right before dinner. The Verdant team got me in within 45 minutes, stopped the excruciating pain immediately, and crafted a permanent ceramic crown that same evening. True lifesavers.',
    location: 'Financial District',
  },
  {
    id: 'rev-5',
    patientName: 'Sarah Jenkins',
    rating: 5,
    treatment: 'Clear Aligners (Invisalign®)',
    date: 'February 2026',
    quote:
      'Completed my Invisalign treatment in just 8 months! The 3D iTero digital simulation predicted my alignment with pinpoint precision. Dr. Williams and the entire team were so encouraging throughout every follow-up visit.',
    location: 'Chelsea, NYC',
  },
  {
    id: 'rev-6',
    patientName: 'Marcus Vance Sr.',
    rating: 5,
    treatment: 'Full Mouth Restoration & Implants',
    date: 'January 2026',
    quote:
      'After struggling with loose dentures for almost 10 years, Dr. Vance provided a fixed full-arch implant bridge. For the first time in a decade, I can enjoy apples, steak, and laughing without any fear. Truly life-changing!',
    location: 'Queens, NY',
  },
  {
    id: 'rev-7',
    patientName: 'Elena Rossi',
    rating: 5,
    treatment: 'Preventive Hygiene & Anxiety-Free Care',
    date: 'February 2026',
    quote:
      'As someone with severe dental phobia, having noise-canceling headphones, Netflix on ceiling screens, and Dr. Elena’s gentle tell-show-do approach made this my first completely painless dental visit in 15 years.',
    location: 'Greenwich Village',
  },
  {
    id: 'rev-8',
    patientName: 'Michael Chang',
    rating: 5,
    treatment: 'Same-Day CEREC Ceramic Crown',
    date: 'March 2026',
    quote:
      'Zero sticky silicone impressions and no waiting weeks with a fragile temporary crown. They 3D-scanned my tooth, milled a custom ceramic crown right in the clinic, and bonded it in one single visit. Phenomenal technology.',
    location: 'Midtown East',
  },
  {
    id: 'rev-9',
    patientName: 'Rachel Green-Taylor',
    rating: 5,
    treatment: 'In-Office Enamel Brightening',
    date: 'March 2026',
    quote:
      'Booked a teeth brightening session before my wedding. The results exceeded all expectations — 6 shades whiter in under an hour, with completely zero post-treatment sensitivity thanks to their custom remineralizing protocol.',
    location: 'Soho, NYC',
  },
  {
    id: 'rev-10',
    patientName: 'Dr. Tariq Al-Mansoor',
    rating: 5,
    treatment: 'Comprehensive Diagnostic Wellness Exam',
    date: 'February 2026',
    quote:
      'As an internal medicine physician, I am extremely particular about sterilization and clinical ethics. Verdant Dental\'s hospital-grade infection protocols, ultra-low radiation 3D CBCT, and conservative clinical approach set the gold standard.',
    location: 'Tribeca, NYC',
  },
];

export const faqData = [
  {
    category: 'General & First Visit',
    q: 'Do you accept new patients?',
    a: 'Yes, absolutely! We welcome new patients of all ages — individuals, busy professionals, and entire families. We have dedicated appointment slots for new patient comprehensive exams and hygiene cleanings every week.',
  },
  {
    category: 'General & First Visit',
    q: 'What should I bring to my first appointment?',
    a: 'Just a government photo ID and your dental insurance card (if using insurance). You can complete our quick 2-minute digital health history form securely on your smartphone before arriving, so there is zero paperwork when you walk through our doors.',
  },
  {
    category: 'Comfort & Anxiety',
    q: 'I experience high dental anxiety. How can you help me stay calm?',
    a: 'You are in gentle hands. Over 60% of our patients reported dental anxiety prior to visiting Verdant. We practice "consent-first dentistry": we explain every step beforehand, provide a hand-signal to pause at any moment, and offer cozy fleece blankets, noise-canceling headphones with Netflix/Spotify, and mild nitrous oxide relaxation.',
  },
  {
    category: 'Emergency',
    q: 'Do you offer same-day emergency dental appointments?',
    a: 'Yes. We reserve daily emergency blocks specifically for unexpected tooth trauma, acute toothaches, broken crowns, or infections. Call our direct line (212) 555-0198 and our clinical triage team will arrange immediate same-day relief.',
  },
  {
    category: 'Insurance & Financing',
    q: 'Do you accept insurance and offer payment plans?',
    a: 'Yes. We are in-network with major PPO insurance providers (including Delta Dental, Aetna, Cigna, MetLife, Guardian, and BCBS). For out-of-pocket balances or elective cosmetic care, we partner with CareCredit and Sunbit for 0% APR monthly installments, as well as our in-house Verdant Wellness Membership for uninsured patients.',
  },
  {
    category: 'Appointments',
    q: 'How long does a first appointment typically take?',
    a: 'A comprehensive new patient visit lasts approximately 60 minutes. This includes your unhurried discussion with the doctor, gentle low-radiation digital x-rays, comprehensive 3D scan, gum tissue wellness charting, and a refreshing ultrasonic cleaning.',
  },
  {
    category: 'Location & Parking',
    q: 'Where are you located and is there parking nearby?',
    a: 'Our Manhattan clinic is at 420 Lexington Avenue (The Graybar Building), Suite 1400, with direct indoor transit access to Grand Central Terminal. Validated parking is available directly across Lexington Avenue at Icon Parking.',
  },
];

export const technologyData = [
  {
    title: '3D Intraoral Digital Scanning',
    icon: 'Scan',
    subtitle: 'No Putty, No Gagging',
    description:
      'Replaces cold, gooey impression trays with a gentle pen-sized wand that captures 6,000 photos per second to render an exact 3D color model of your teeth in under two minutes.',
  },
  {
    title: 'Ultra-Low Dose Digital Radiography',
    icon: 'Activity',
    subtitle: '90% Radiation Reduction',
    description:
      'High-resolution digital x-rays that deliver up to 90% less radiation than legacy dental film, providing instant crystal-clear images displayed directly on the overhead patient monitor.',
  },
  {
    title: 'CEREC CAD/CAM Single-Visit Crowns',
    icon: 'Cpu',
    subtitle: 'Permanent Crown in 1 Visit',
    description:
      'Precision optical camera and in-house robotic ceramic milling unit that crafts custom-shaded, diamond-strength porcelain crowns while you relax in our comfortable suites.',
  },
  {
    title: 'Pain-Free Soft Tissue Laser',
    icon: 'Zap',
    subtitle: 'Minimally Invasive Gum Care',
    description:
      'Gentle diode laser technology that seals nerve endings and blood vessels simultaneously, eliminating bleeding and reducing post-procedure sensitivity for faster, comfortable recovery.',
  },
];

export const clinicGallery = [
  {
    title: 'Serene Reception & Wellness Lounge',
    category: 'Reception',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    caption: 'Thoughtfully designed with natural warm oak, biophilic greenery, and ambient soundscapes.',
  },
  {
    title: 'Private Patient Care Operatory',
    category: 'Treatment Suite',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
    caption: 'Ergonomic memory-foam dental chair with overhead cinema screen and calming skyline views.',
  },
  {
    title: 'Consultation & 3D Imaging Suite',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Low-dose 3D Cone Beam computed tomography for guided implant planning and airway analysis.',
  },
  {
    title: 'Sterilization & Hospital-Grade Lab',
    category: 'Sterilization',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
    caption: 'Class B multi-cycle autoclaves and hospital-grade air filtration exceeding CDC infection control.',
  },
  {
    title: 'Patient Refreshment & Floss Bar',
    category: 'Amenities',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=80',
    caption: 'Organic herbal teas, infused waters, heated lavender face towels, and dental care travel kits.',
  },
  {
    title: 'Doctor-Patient Treatment Dialogue',
    category: 'Consultation',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80',
    caption: 'Transparent, unhurried treatment planning where your questions and personal goals come first.',
  },
];
