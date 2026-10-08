import veneersBefore from '../assets/images/veneers-before.avif'
import veneersAfter from '../assets/images/veneers-after.avif'
import implantBefore from '../assets/images/implant-before.avif'
import implantAfter from '../assets/images/implant-after.avif'
import orthodonticsBefore from '../assets/images/orthodontics-before.avif'
import orthodonticsAfter from '../assets/images/orthodontics-after.avif'

import fullReconstructionBefore from '../assets/images/full-reconstruction-before.avif'
import fullReconstructionAfter from '../assets/images/full-reconstruction-after.avif'

import RestorativeCareBefore from '../assets/images/restorative-care-before.avif'
import RestorativeCareAfter from '../assets/images/restorative-care-after.avif'

import teethWhiteningBefore from '../assets/images/teeth-whitening-before.avif'
import teethWhiteningAfter from '../assets/images/teeth-whitening-after.avif'

// importBefore from '../assets/images-before.avif'
// importAfter from '../assets/images-after.avif'
// importBefore from '../assets/images-before.avif'
// importAfter from '../assets/images-after.avif'
// importBefore from '../assets/images-before.avif'
// importAfter from '../assets/images-after.avif'
// importBefore from '../assets/images-before.avif'
// importAfter from '../assets/images-after.avif'
// importBefore from '../assets/images-before.avif'
// importAfter from '../assets/images-after.avif'




export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  beforeProblem: string;
  afterBenefit: string;
  beforeImg: string;
  afterImg: string;
}

export const clinicalTransformationsData: TransformationItem[] = [
  {
    id: 'case-1',
    title: 'Porcelain Veneer Smile Harmonization',
    category: 'Cosmetic Dentistry',
    beforeProblem: 'Chipped front incisors, uneven lengths, and persistent tetracycline yellow staining.',
    afterBenefit: '6 custom feldspathic veneers creating balanced symmetry, luminous shade & permanent stain resistance.',
    beforeImg: veneersBefore,
    afterImg: veneersAfter,
  },
  {
    id: 'case-2',
    title: '3D Guided Single Front Tooth Implant',
    category: 'Implantology',
    beforeProblem: 'Traumatic loss of upper central incisor with collapsing gum tissue and chewing difficulty.',
    afterBenefit: 'Permanent titanium implant with custom zirconia crown, restoring 100% natural bite without altering adjacent teeth.',
    beforeImg: implantBefore,
    afterImg: implantAfter,
  },
  {
    id: 'case-3',
    title: 'Clear Aligner Severe Crowding Correction',
    category: 'Orthodontics',
    beforeProblem: 'Severe lower arch crowding and deep crossbite causing speech fatigue and plaque buildup.',
    afterBenefit: '22 weeks of discreet aligners delivering straight arch alignment and effortlessly cleanable teeth.',
    beforeImg: orthodonticsBefore,
    afterImg: orthodonticsAfter,
  },
  {
    id: 'case-4',
    title: 'Full Arch Fixed Implant Bridge',
    category: 'Full Reconstruction',
    beforeProblem: 'Multiple failing teeth, unstable removable partial denture, and painful chewing.',
    afterBenefit: 'Prettau solid zirconia fixed bridge restoring youthful facial volume and freedom to enjoy solid foods.',
    beforeImg: fullReconstructionBefore,
    afterImg: fullReconstructionAfter,
  },
  {
    id: 'case-5',
    title: 'Same-Day Monolithic Zirconia Crown',
    category: 'Restorative Care',
    beforeProblem: 'Large fractured amalgam filling with fracture lines running close to the tooth nerve.',
    afterBenefit: 'CAD/CAM digital scan and bonded high-strength ceramic crown shielding the tooth against fracture.',
    beforeImg: RestorativeCareBefore,
    afterImg: RestorativeCareAfter,
  },
  {
    id: 'case-6',
    title: 'In-Office LED Whitening Transformation',
    category: 'Teeth Whitening',
    beforeProblem: 'Heavy coffee, red wine, and aging enamel stains dulling overall smile appearance.',
    afterBenefit: 'Brightened 8 full Vita shades in a single 60-minute visit with zero lingering post-op sensitivity.',
    beforeImg: teethWhiteningBefore,
    afterImg: teethWhiteningAfter,
  },
]
//   {
//     id: 'case-7',
//     title: 'Diastema (Midline Gap) Closure',
//     category: 'Cosmetic Bonding',
//     beforeProblem: 'Wide 3.5mm space between central incisors causing speech lisp and food impaction.',
//     afterBenefit: 'Biomimetic layered composite bonding completed in one painless visit with zero tooth drilling.',
//     beforeImg: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
//     afterImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 'case-8',
//     title: 'Gummy Smile Laser Recontouring',
//     category: 'Periodontal Aesthetics',
//     beforeProblem: 'Excessive gum display ("gummy smile") making teeth appear short and square.',
//     afterBenefit: 'Gentle waterlase recontouring exposing ideal anatomical tooth length and symmetrical gum margins.',
//     beforeImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
//     afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 'case-9',
//     title: 'Microscopic Root Canal & Crown Salvage',
//     category: 'Endodontics',
//     beforeProblem: 'Severe deep throbbing toothache and apical abscess threatening tooth extraction.',
//     afterBenefit: 'Pain eliminated completely in 1 visit, infection resolved, and tooth reinforced for lifelong service.',
//     beforeImg: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
//     afterImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 'case-10',
//     title: 'Old Silver Amalgam Replacement',
//     category: 'Biomimetic Restoration',
//     beforeProblem: '4 deteriorated dark mercury fillings with recurrent micro-leakage and dark gray staining.',
//     afterBenefit: 'Replaced with nano-ceramic tooth-colored inlays that bond structurally to tooth walls.',
//     beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
//     afterImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 'case-11',
//     title: 'Chipped Sports Trauma Emergency Restoration',
//     category: 'Emergency Care',
//     beforeProblem: 'Front incisor horizontally fractured after basketball collision, sharp painful edge.',
//     afterBenefit: 'Same-day emergency composite stratification restoring natural translucency and smile shape.',
//     beforeImg: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
//     afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 'case-12',
//     title: 'Deep Ultrasonic Periodontal Rehabilitation',
//     category: 'Gum Health',
//     beforeProblem: 'Chronically inflamed, bleeding gums with 5–6mm pocketing and constant halitosis.',
//     afterBenefit: 'Full pocket depth reduction to healthy 2–3mm, healthy pink stippled gums, and confident fresh breath.',
//     beforeImg: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
//     afterImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 'case-13',
//     title: 'Implant-Retained Snap-On Lower Denture',
//     category: 'Prosthodontics',
//     beforeProblem: 'Loose lower denture floating while speaking and eating, causing painful friction sores.',
//     afterBenefit: 'Locator snap-on implants provide absolute denture stability with zero slipping or messy adhesives.',
//     beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
//     afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 'case-14',
//     title: 'Worn Enamel & Acid Erosion Makeover',
//     category: 'Full Mouth Rejuvenation',
//     beforeProblem: 'Severe attrition from nocturnal bruxism and acid erosion, making teeth thin and sensitive.',
//     afterBenefit: 'Rebuilt vertical occlusion with bonded ceramic overlays, relieving jaw strain and protecting teeth.',
//     beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
//     afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
//   },
// ];
