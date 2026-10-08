export interface DentalServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  whenToSeek: string[];
  whatIsRecommended: string[];
  whatToAvoid: string[];
  duration: string;
  comfortLevel: string;
  recoveryTime: string;
  warrantyOrLongevity: string;
  iconName: string;
  image: string;
}

export const all14DentalServices: DentalServiceItem[] = [
  {
    id: 'general-checkup',
    slug: 'general-checkup',
    title: 'General Checkup',
    category: 'Preventive Care',
    tagline: 'Comprehensive oral examination, digital diagnostics & cancer screening',
    shortDescription: 'Thorough, unhurried evaluation of teeth, gums, jaw joints, and oral tissues with low-dose digital imaging.',
    overview: 'A routine dental examination is the bedrock of lifelong oral health. We inspect every tooth using high-magnification loupes and HD intraoral cameras, check periodontal pockets, and screen for early signs of enamel wear, decay, or pathology without rushing.',
    whenToSeek: [
      'Every 6 months for routine preventive screening',
      'If you notice new sensitivity to hot or cold foods',
      'Before starting orthodontics, whitening, or pregnancy',
      'If it has been over a year since your last dental exam'
    ],
    whatIsRecommended: [
      'Bring a list of current medications and dental history',
      'Mention any jaw clicking, clenching, or morning headaches',
      'Schedule routine cleanings alongside your exam to save time'
    ],
    whatToAvoid: [
      'Do not postpone checkups until pain begins; cavities are painless in early stages',
      'Avoid aggressive brushing right before the exam to prevent gum irritation'
    ],
    duration: '40–50 minutes',
    comfortLevel: 'Completely painless & relaxing',
    recoveryTime: 'Immediate — return to normal activities right away',
    warrantyOrLongevity: 'Recommended every 6 months',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dental-cleaning-gum',
    slug: 'dental-cleaning-gum',
    title: 'Dental Cleaning / Gum Treatment',
    category: 'Hygiene & Periodontics',
    tagline: 'Ultrasonic plaque removal, stain polishing & gentle periodontal therapy',
    shortDescription: 'Pain-free ultrasonic scaling removes calcified tartar and biofilm, restoring fresh breath and firm, healthy pink gums.',
    overview: 'Even with diligent flossing, bacterial plaque mineralizes into calculus that only professional ultrasonic tools can safely dislodge. Our gentle hygienists treat gingivitis and early gum pockets with warm-water desensitizing rinses and gentle polishing.',
    whenToSeek: [
      'Bleeding gums while brushing or flossing',
      'Persistent bad breath (halitosis) or sour taste',
      'Visible yellowish or brownish buildup along the gumline',
      'Every 4–6 months to prevent periodontal bone loss'
    ],
    whatIsRecommended: [
      'Brush twice daily with a soft-bristled or sonic electric toothbrush',
      'Use water flossers or woven string floss daily between tight contacts',
      'Drink plenty of water to maintain natural saliva flow'
    ],
    whatToAvoid: [
      'Do not use hard-bristle toothbrushes, which wear down delicate enamel margins',
      'Avoid smoking or vaping, which restricts blood flow and masks gum inflammation',
      'Do not aggressively scrape teeth with metal toothpick tools at home'
    ],
    duration: '45–60 minutes',
    comfortLevel: 'Very comfortable; warm numbing gel available if sensitive',
    recoveryTime: 'Zero downtime; enjoy clean, smooth teeth immediately',
    warrantyOrLongevity: 'Protection lasts 4–6 months depending on home hygiene',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tooth-filling-cavity',
    slug: 'tooth-filling-cavity',
    title: 'Tooth Filling / Cavity Treatment',
    category: 'Restorative Care',
    tagline: 'Tooth-colored composite resin fillings bonded seamlessly to natural enamel',
    shortDescription: 'Mercury-free, biomimetic resin restorations that match your natural tooth shade while sealing out future decay.',
    overview: 'When bacterial decay creates a small cavity, prompt restoration preserves the vital tooth nerve. We remove the decay conservatively, apply bonding primers, and sculpt nano-hybrid composite resin that cures in seconds under LED light.',
    whenToSeek: [
      'Sharp twinges when eating sweet foods or cold drinks',
      'Food constantly catching between specific teeth',
      'A visible dark spot, groove, or rough chip on the tooth surface',
      'Old silver amalgam filling cracked, leaking, or loose'
    ],
    whatIsRecommended: [
      'Treat cavities while they are small before infection reaches the deep pulp',
      'Chew gently on the opposite side for 2 hours while local anesthesia wears off',
      'Maintain daily fluoride or hydroxyapatite remineralizing toothpaste'
    ],
    whatToAvoid: [
      'Avoid chewing ice, hard candies, or unpopped popcorn kernels immediately',
      'Do not ignore lingering cold sensitivity that lasts longer than 15 seconds'
    ],
    duration: '35–45 minutes per tooth',
    comfortLevel: 'Painless with computer-assisted micro-anesthesia',
    recoveryTime: 'Normal chewing after numbness fades (1–2 hours)',
    warrantyOrLongevity: '7–12+ years with good dental hygiene',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'toothache-emergency',
    slug: 'toothache-emergency',
    title: 'Toothache / Emergency Dental Care',
    category: 'Urgent Care',
    tagline: 'Same-day urgent relief for throbbing pain, facial swelling, or dental trauma',
    shortDescription: 'Rapid diagnosis, infection control, and immediate pain relief guaranteed with same-day emergency appointments.',
    overview: 'Dental emergencies cannot wait. Whether you woke up with intense throbbing pain, knocked out a tooth, or have a painful gum abscess, our emergency team provides prompt gentle diagnostics and immediate palliative relief with zero judgment.',
    whenToSeek: [
      'Severe, pulsating toothache that disrupts sleep or concentration',
      'Visible swelling in the gums, cheek, or under the jaw',
      'Traumatic tooth fracture, sports injury, or knocked-out tooth',
      'Lost crown or broken filling exposing a sensitive internal nerve'
    ],
    whatIsRecommended: [
      'Call our urgent line right away for same-day walk-in scheduling',
      'Rinse gently with warm salt water (1/2 tsp salt in 8 oz warm water)',
      'Apply a cold ice pack to the outside of the cheek in 15-minute intervals',
      'If a tooth is knocked out, keep it moist in cold whole milk or saliva'
    ],
    whatToAvoid: [
      'NEVER place an aspirin tablet directly on painful gums (causes chemical burns)',
      'Do not apply hot heating pads to swelling (spreads bacterial infection)',
      'Do not attempt to pull or manipulate a loose infected tooth yourself'
    ],
    duration: '30–60 minutes for emergency stabilization',
    comfortLevel: 'Immediate gentle relief is our #1 priority',
    recoveryTime: 'Rapid relief within hours of clinical intervention',
    warrantyOrLongevity: 'Immediate stabilization followed by definitive restoration plan',
    iconName: 'AlertCircle',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'teeth-whitening',
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    category: 'Cosmetic Dentistry',
    tagline: 'Professional in-office laser brightening & custom take-home whitening trays',
    shortDescription: 'Safely lift 6–8 shades of coffee, tea, red wine, and aging stains with desensitizing professional formulations.',
    overview: 'Over-the-counter whitening strips often cause painful gum burning and uneven results. Our in-office LED whitening system isolates the gums with protective barriers and activates a clinical-grade carbamide peroxide gel for brilliant, uniform results in a single visit.',
    whenToSeek: [
      'Before weddings, milestones, graduations, or job interviews',
      'To reverse years of coffee, tea, espresso, or tobacco stains',
      'Before matching new porcelain crowns or composite restorations',
      'When smile feels dull or discolored from natural enamel maturation'
    ],
    whatIsRecommended: [
      'Complete a dental cleaning first so gel contacts clean enamel directly',
      'Follow the "White Diet" (avoid dark liquids/sauces) for 48 hours post-treatment',
      'Use potassium nitrate desensitizing paste for 3 days before treatment'
    ],
    whatToAvoid: [
      'Avoid red wine, black coffee, soy sauce, curry, and berries for 48 hours',
      'Do not use unverified abrasive charcoal powders that scratch protective enamel',
      'Avoid smoking during the initial 72-hour remineralization window'
    ],
    duration: '60 minutes in-office',
    comfortLevel: 'Mild to zero sensitivity with our buffering gels',
    recoveryTime: 'Zero downtime; luminous smile immediately visible',
    warrantyOrLongevity: '12–24 months; easily maintained with touch-up trays',
    iconName: 'Sun',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'root-canal-treatment',
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    category: 'Endodontics',
    tagline: 'Painless modern microscopic therapy to save deeply infected or damaged teeth',
    shortDescription: 'Cleans out inflamed pulp, sterilizes root canals, and saves your natural tooth from requiring extraction.',
    overview: 'Modern root canals feel no different than receiving a standard filling. Using high-powered dental microscopes and rotary nickel-titanium instruments, our endodontic specialists gently remove infected nerve tissue, disinfect the canals, and seal them securely.',
    whenToSeek: [
      'Persistent throbbing ache that lingers after temperature exposure',
      'Deep tooth pain when biting down or chewing hard foods',
      'Dark discoloration of a single tooth following physical trauma',
      'Small pimple-like bump (fistula) on the gum near a tooth root'
    ],
    whatIsRecommended: [
      'Protect the treated tooth with a permanent crown to prevent structural fracture',
      'Take prescribed or OTC anti-inflammatory medication (e.g. ibuprofen) as directed',
      'Chew on the opposite side until final crown restoration is placed'
    ],
    whatToAvoid: [
      'Do not chew hard crusty bread or nuts on the temporary filling',
      'Do not delay placing the final protective crown, as treated teeth become brittle',
      'Never ignore persistent tooth pain hoping it will cure itself'
    ],
    duration: '60–75 minutes (often completed in 1 comfortable visit)',
    comfortLevel: '100% painless with profound local anesthesia & quiet rotary motors',
    recoveryTime: 'Mild tenderness for 24–48 hours, fully manageable with ibuprofen',
    warrantyOrLongevity: 'Lifelong success rate exceeding 95% with proper crown coverage',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tooth-extraction',
    slug: 'tooth-extraction',
    title: 'Tooth Extraction',
    category: 'Oral Surgery',
    tagline: 'Gentle, minimally invasive tooth removal with socket preservation',
    shortDescription: 'Unhurried, trauma-free removal of non-restorable teeth with bone grafting to preserve your jawline contour.',
    overview: 'While saving your natural teeth is always our first goal, severely fractured or periodontally compromised teeth sometimes require extraction to safeguard neighboring bone and teeth. We use atraumatic micro-elevators to protect the surrounding socket.',
    whenToSeek: [
      'Severe tooth fracture extending deep below the bone line',
      'Advanced periodontal infection where bone support has eroded',
      'Orthodontic crowding where selective space creation is needed',
      'Non-restorable decay that cannot support a filling or crown'
    ],
    whatIsRecommended: [
      'Bite gently on clean gauze for 30–45 minutes following the procedure',
      'Apply an ice pack to the cheek for 10 minutes on, 10 minutes off',
      'Opt for socket bone preservation if planning a dental implant later'
    ],
    whatToAvoid: [
      'DO NOT drink through a straw, spit vigorously, or smoke for 72 hours (prevents dry socket)',
      'Avoid strenuous workouts and heavy weight lifting for 48 hours',
      'Avoid hot, spicy, or crunchy foods for the first 3 days'
    ],
    duration: '30–45 minutes',
    comfortLevel: 'Comfortable with pressure-only sensation; zero sharp pain',
    recoveryTime: 'Initial healing in 3–5 days; full tissue recovery in 2 weeks',
    warrantyOrLongevity: 'Permanent removal with pathway to implant replacement',
    iconName: 'Scissors',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'wisdom-tooth-treatment',
    slug: 'wisdom-tooth-treatment',
    title: 'Wisdom Tooth Treatment',
    category: 'Oral Surgery',
    tagline: 'Precise 3D CBCT guided evaluation and gentle third molar removal',
    shortDescription: 'Prevents crowding, painful impaction, cysts, and damage to adjacent molars with modern surgical care.',
    overview: 'Third molars frequently lack sufficient jaw room to erupt properly, becoming impacted against second molars or partially trapped in gums. We use 3D volumetric CBCT scans to map nerve pathways precisely before gentle surgical removal.',
    whenToSeek: [
      'Swelling, pain, or foul taste near the back of the lower or upper jaw',
      'Difficulty opening your mouth wide or discomfort when swallowing',
      'Food constantly packing behind the last molar causing chronic redness',
      'Preventive assessment in late teens and early twenties'
    ],
    whatIsRecommended: [
      'Eat soft, nourishing foods (yogurt, smoothies, broth, mashed avocado) for 3 days',
      'Begin gentle warm saltwater rinses 24 hours after surgery',
      'Keep your head elevated with an extra pillow when sleeping the first night'
    ],
    whatToAvoid: [
      'Never suck on straws or smoke (crucial to protect protective blood clot)',
      'Do not probe the surgical site with your tongue or fingers',
      'Avoid solid chips, nuts, or popcorn seeds that could lodge in healing sockets'
    ],
    duration: '45–75 minutes depending on number of teeth',
    comfortLevel: 'Very comfortable; local anesthesia with optional twilight sedation',
    recoveryTime: 'Swelling peaks at 48 hours; return to school/work in 2–4 days',
    warrantyOrLongevity: 'Permanent solution to third molar impactions',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crowns-bridges',
    slug: 'crowns-bridges',
    title: 'Crowns & Bridges',
    category: 'Restorative Care',
    tagline: 'Precision milled ceramic and zirconia crowns to rebuild compromised teeth',
    shortDescription: 'Custom crowns restore 100% bite strength to fractured teeth, while fixed bridges replace missing teeth seamlessly.',
    overview: 'When a tooth is cracked, heavily filled, or has undergone root canal therapy, a full-coverage crown encases the remaining enamel in high-strength monolithic zirconia or lithium disilicate ceramic, restoring natural shape and powerful chewing capability.',
    whenToSeek: [
      'A large old filling has fractured or cracked the surrounding tooth cusp',
      'Following a root canal procedure to prevent catastrophic tooth breakage',
      'To replace one or two missing teeth with a stable fixed ceramic bridge',
      'Severe tooth attrition from nighttime clenching or acid erosion'
    ],
    whatIsRecommended: [
      'Maintain diligent flossing around crown margins and beneath bridge pontics',
      'Wear a custom nightguard if you have a habit of clenching or grinding teeth',
      'Schedule regular 6-month checks to inspect crown margins and bone health'
    ],
    whatToAvoid: [
      'Avoid biting down on metal pens, hard olive pits, or ice cubes',
      'Do not use sticky candies (caramel, taffy) while wearing a temporary crown'
    ],
    duration: 'Two visits (prep & digital scan, then final placement)',
    comfortLevel: 'Completely comfortable with gentle local anesthesia',
    recoveryTime: 'Immediate bite comfort within 24 hours',
    warrantyOrLongevity: '15–20+ years with proper oral care and checkups',
    iconName: 'Award',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    title: 'Dental Implants',
    category: 'Implantology',
    tagline: '3D computer-guided titanium implants for lifelong permanent tooth replacement',
    shortDescription: 'The gold standard for replacing missing teeth: integrates directly with jawbone to look, feel, and function like real teeth.',
    overview: 'Dental implants replace both the root and the crown of a lost tooth. Made of biocompatible titanium or ceramic, they integrate with the jawbone to halt bone resorption, allowing you to bite, laugh, and smile with absolute confidence without cutting down healthy neighbors.',
    whenToSeek: [
      'Missing single or multiple teeth from trauma, infection, or decay',
      'Loose or uncomfortable removable partial dentures',
      'Difficulty chewing steak, apples, or crisp vegetables properly',
      'Desire for a permanent solution that never requires replacement adhesives'
    ],
    whatIsRecommended: [
      'Choose 3D CBCT guided surgical placement for optimal precision and safety',
      'Brush and floss around implants just like natural teeth',
      'Maintain professional cleanings with specialized titanium-safe instruments'
    ],
    whatToAvoid: [
      'Avoid heavy smoking, which significantly reduces bone integration rates',
      'Do not chew hard foods on provisional temporary crowns during healing',
      'Never skip dental hygiene appointments'
    ],
    duration: 'Surgical placement takes 45–60 minutes; integration takes 2–3 months',
    comfortLevel: 'Surprisingly gentle; most patients report less discomfort than an extraction',
    recoveryTime: 'Minor soreness for 1–2 days; return to light work the next day',
    warrantyOrLongevity: 'Designed to last a lifetime (98%+ clinical success rate)',
    iconName: 'CheckCircle2',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dentures',
    slug: 'dentures',
    title: 'Dentures',
    category: 'Prosthodontics',
    tagline: 'Custom full, partial & implant-retained snap-on aesthetic dentures',
    shortDescription: 'Modern, lightweight prosthetics that restore natural facial contours, youthful lip support, and easy chewing.',
    overview: 'Forget bulky, slipping artificial teeth. Today’s precision digital dentures use high-impact acrylics and layered composite teeth that replicate natural gum textures. For ultimate stability, snap-on implant overdentures lock securely into place with zero slipping.',
    whenToSeek: [
      'Extensive tooth loss in upper or lower dental arch',
      'Existing dentures that wobble, click, or cause painful gum sores',
      'Facial sagging or sunken cheek appearance due to missing rear molars',
      'Seeking a cost-effective full smile restoration'
    ],
    whatIsRecommended: [
      'Remove dentures at night to give gum tissues oxygen and rest',
      'Clean dentures daily with a non-abrasive denture paste and soft brush',
      'Soak dentures overnight in a mild disinfecting cleansing solution',
      'Consider 2–4 mini-implants to convert conventional dentures into secure snap-ons'
    ],
    whatToAvoid: [
      'Never use hot boiling water to soak dentures (warps custom acrylic fit)',
      'Do not use regular abrasive whitening toothpaste on acrylic teeth',
      'Do not attempt to bend or adjust metal clasps with home pliers'
    ],
    duration: '3–4 appointments for custom impressions, wax try-in, and delivery',
    comfortLevel: 'Gentle, non-invasive process with custom comfort linings',
    recoveryTime: '1–2 weeks speech and chewing adaptation period',
    warrantyOrLongevity: '5–10 years before relining or re-basing is recommended',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'childrens-dentistry',
    slug: 'childrens-dentistry',
    title: 'Children’s Dentistry',
    category: 'Pediatric Care',
    tagline: 'Playful, positive dental visits that build a lifetime of healthy smiles',
    shortDescription: 'Gentle cleanings, fluoride varnish, cavity sealants, and fun education designed specifically for kids and teens.',
    overview: 'Early dental memories shape lifelong oral health attitudes. Our pediatric approach is upbeat, calm, and interactive. We explain instruments as "tooth ticklers" and "superhero shields", ensuring your child feels proud, excited, and completely at ease.',
    whenToSeek: [
      'First dental visit by age 1 or when the first baby tooth erupts',
      'Routine 6-month checkup and gentle plaque cleaning',
      'Preventive molar sealants when permanent 6-year and 12-year molars appear',
      'Thumb-sucking assessment or early interceptive orthodontic evaluation'
    ],
    whatIsRecommended: [
      'Use a smear of fluoride toothpaste for under age 3; pea-sized for age 3+',
      'Supervise brushing until age 7–8 to ensure all back molars are cleaned',
      'Encourage water over sweet fruit juices, sodas, and sticky fruit snacks'
    ],
    whatToAvoid: [
      'Never put baby to bed with a bottle containing milk, juice, or sweetened liquids',
      'Avoid using dental visits as a threat or punishment ("If you don\'t brush, the dentist will poke you")',
      'Avoid sticky fruit leathers and chewy gummy candies that stick in molar grooves'
    ],
    duration: '30–40 minutes of fun, calm care',
    comfortLevel: 'Child-friendly, zero intimidation, prize chest rewards',
    recoveryTime: 'Immediate playful return to school or home',
    warrantyOrLongevity: 'Regular checkups every 6 months to monitor development',
    iconName: 'Heart',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'orthodontics-aligners',
    slug: 'orthodontics-aligners',
    title: 'Orthodontics / Braces & Clear Aligners',
    category: 'Orthodontics',
    tagline: 'Discreet Invisalign® clear aligners & modern aesthetic orthodontic braces',
    shortDescription: 'Straighten crooked teeth, close gaps, and align your bite comfortably without visible metal wires.',
    overview: 'A straight smile is not just beautiful—it is significantly easier to clean, dramatically reducing your lifetime risk of gum disease and enamel fractures. Using 3D digital iTero scans, we map your tooth movement week by week before you even start.',
    whenToSeek: [
      'Crooked, crowded, or overlapping front teeth',
      'Noticeable gaps or spacing between teeth that traps food',
      'Overbite, underbite, or crossbite causing uneven tooth wear',
      'Relapse from childhood braces because retainers were lost'
    ],
    whatIsRecommended: [
      'Wear clear aligners 20–22 hours per day, removing only to eat and brush',
      'Clean aligner trays with cool water and specialized clear crystals daily',
      'Wear your custom retainer at night after treatment to maintain results'
    ],
    whatToAvoid: [
      'Never drink hot coffee, tea, or cider with aligners in place (warps the plastic)',
      'Do not wrap aligners in paper napkins at restaurants (they get thrown away!)',
      'Avoid chewing gum while wearing clear aligners'
    ],
    duration: '6–18 months average active treatment',
    comfortLevel: 'Gentle pressure for the first 24 hours of each new tray stage',
    recoveryTime: 'Normal daily speaking and routine right away',
    warrantyOrLongevity: 'Permanent alignment when nighttime retainer is worn',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'veneers-cosmetic',
    slug: 'veneers-cosmetic',
    title: 'Veneers & Cosmetic Dentistry',
    category: 'Cosmetic Dentistry',
    tagline: 'Artisan handcrafted feldspathic and lithium disilicate porcelain veneers',
    shortDescription: 'Micro-thin ceramic shells bonded over front teeth to transform shape, symmetry, shade, and radiant confidence.',
    overview: 'Porcelain veneers are custom-sculpted works of art. Tailored to your facial features and skin undertones, they correct stubborn tetracycline stains, chips, gaps, and worn edges with minimal enamel reduction, yielding a radiant, photogenic smile.',
    whenToSeek: [
      'Severe internal discoloration that does not respond to whitening gels',
      'Chipped, worn down, or irregularly proportioned front teeth',
      'Desire for a red-carpet, harmonious smile makeover',
      'Slight gaps or minor misalignments without undergoing 2 years of braces'
    ],
    whatIsRecommended: [
      'Work closely with our master ceramicist during smile preview try-in',
      'Wear a protective nightguard while sleeping to safeguard ceramic edges',
      'Brush with non-abrasive gel toothpaste to keep porcelain glaze lustrous'
    ],
    whatToAvoid: [
      'Never bite open plastic packaging, tear tape, or crack nutshells with teeth',
      'Avoid high-impact sports without a certified custom mouthguard',
      'Do not chew on ice cubes or hard candies'
    ],
    duration: '2–3 appointments (Consult & digital smile design, prep, delivery)',
    comfortLevel: 'Very comfortable; local anesthesia for prep, temporary veneers provided',
    recoveryTime: 'Mild gum adaptation for 24–48 hours; immediate smile transformation',
    warrantyOrLongevity: '15–25+ years with excellent home care and annual reviews',
    iconName: 'Star',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
];
