import { DESTINATION_DIRECTORIES } from './destinationDirectories';

export interface TrustMetric {
  value: string;
  label: string;
  context: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  summary: string;
  stage: string;
  timeline: string;
  image: string;
  imageAlt: string;
  deliverables: string[];
}

export interface PartnerUniversity {
  name: string;
  city: string;
  flagshipPrograms: string;
}

export interface StudyDestination {
  id: 'canada' | 'usa' | 'uk' | 'australia' | 'europe' | 'malaysia' | 'east-asia';
  regionLabel: string;
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
  universityLocation: string;
  postStudyWork: string;
  intakeWindows: string;
  entryRequirements: string;
  highlights: string[];
  levelsSupported: ('Diploma' | 'Foundation' | 'Undergraduate' | 'Masters')[];
  partnerUniversities: PartnerUniversity[];
}

export interface ScholarshipItem {
  award: string;
  country: string;
  level: string;
  funding: string;
  notes: string;
}

export interface GlobalPartnerGroup {
  region: string;
  universities: string[];
}

export interface EuropeCountryUniversities {
  country: string;
  universities: string[];
}

export interface StudentStory {
  id: string;
  studentName: string;
  originCountry: string;
  destinationId: 'canada' | 'usa' | 'uk' | 'australia' | 'europe' | 'malaysia' | 'east-asia';
  destinationLabel: string;
  university: string;
  program: string;
  degreeLevel: string;
  intakeYear: string;
  outcomeMetric: string;
  quote: string;
  portraitImage: string;
  portraitAlt: string;
}

export interface ConsultantProfile {
  name: string;
  role: string;
  specialization: string;
  experience: string;
  languages: string;
  bio: string;
}

export interface OfficeLocation {
  name: string;
  addressLines: string[];
  phoneDisplay: string;
  phoneHref: string;
}

export const PHOTO_FALLBACK_SRC =
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80';

export const HERO_COLLAGE_IMAGES = {
  campusStudents: {
    src: 'https://images.unsplash.com/photo-1758270705518-b61b40527e76?auto=format&fit=crop&w=1400&q=80',
    alt: 'Diverse international university students smiling and collaborating with a laptop on a sunny modern campus',
  },
  campusGroup: {
    src: 'https://images.unsplash.com/photo-1758270705290-62b6294dd044?auto=format&fit=crop&w=1400&q=80',
    alt: 'International college students studying outdoors with books and laptops',
  },
  airportTravel: {
    src: 'https://images.unsplash.com/photo-1767710096520-9246565a9d31?auto=format&fit=crop&w=1400&q=80',
    alt: 'Students walking through an international airport departure terminal with luggage ready for study abroad',
  },
};

export const DESTINATION_LANDMARK_IMAGES = {
  malaysia: {
    src: 'https://images.unsplash.com/photo-1508062878650-88b52897f298?auto=format&fit=crop&w=1400&q=80',
    alt: 'Petronas Twin Towers and modern Kuala Lumpur skyline in Malaysia',
  },
  uk: {
    src: 'https://images.unsplash.com/photo-1791199898611-1850ec748dd1?auto=format&fit=crop&w=1400&q=80',
    alt: 'Historic Oxford collegiate limestone architecture in the United Kingdom',
  },
  germany: {
    src: 'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?auto=format&fit=crop&w=1400&q=80',
    alt: 'Brandenburg Gate and classic Berlin architectural skyline in Germany',
  },
  netherlandsBelgium: {
    src: 'https://images.unsplash.com/photo-1583295125721-766a0088cd3f?auto=format&fit=crop&w=1400&q=80',
    alt: 'Historic Amsterdam canal-side university district buildings in the Netherlands',
  },
  spain: {
    src: 'https://images.unsplash.com/photo-1745091726008-717fb812bd0d?auto=format&fit=crop&w=1400&q=80',
    alt: 'Classic Barcelona architectural facade and sunlit avenue in Spain',
  },
  australia: {
    src: 'https://images.unsplash.com/photo-1786256894376-c6af97240344?auto=format&fit=crop&w=1400&q=80',
    alt: 'Sydney Opera House and harbor cityscape in Australia',
  },
  canada: {
    src: 'https://images.unsplash.com/photo-1636829504058-2315a3849412?auto=format&fit=crop&w=1400&q=80',
    alt: 'Toronto skyline and autumn university district trees in Canada',
  },
  southKorea: {
    src: 'https://images.unsplash.com/photo-1598024669287-0728885575f1?auto=format&fit=crop&w=1400&q=80',
    alt: 'Seoul modern city skyline and N Seoul Tower in South Korea',
  },
  china: {
    src: 'https://images.unsplash.com/photo-1522917172099-2574f68fe9eb?auto=format&fit=crop&w=1400&q=80',
    alt: 'Modern Shanghai skyline and university district architecture in China',
  },
  usa: {
    src: 'https://images.unsplash.com/photo-1786723221835-0251595afd1c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Classic red-brick American university campus and green quad',
  },
};

export const SERVICE_LIFESTYLE_IMAGES = {
  counseling: {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Friendly education counselor advising students with a laptop and documents in a modern office',
  },
  ieltsLibrary: {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80',
    alt: 'Students studying together in a bright sunlit university library for IELTS preparation',
  },
  visaPassport: {
    src: 'https://images.unsplash.com/photo-1655722723123-c68bdb4f3ce0?auto=format&fit=crop&w=1400&q=80',
    alt: 'Close-up of an international passport, boarding pass, and university admission documents',
  },
  scholarshipAdvisory: {
    src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=80',
    alt: 'University library study hall where students prepare scholarship and merit fellowship applications',
  },
  preDeparture: {
    src: 'https://images.unsplash.com/photo-1783768815176-52c08e1de7ed?auto=format&fit=crop&w=1400&q=80',
    alt: 'International student traveler prepared for airport departure and overseas housing arrival',
  },
};

export const ABOUT_OFFICE_IMAGES = {
  officeTeam: {
    src: 'https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?auto=format&fit=crop&w=1400&q=80',
    alt: 'Global Education Expert consultancy team collaborating in a modern glass-walled office',
  },
  studentSeminar: {
    src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1400&q=80',
    alt: 'International education workshop and university admissions seminar hosted for students',
  },
};

export const HERO_IMAGE = HERO_COLLAGE_IMAGES.campusStudents.src;
export const ABOUT_ADVISORY_IMAGE = ABOUT_OFFICE_IMAGES.officeTeam.src;

export const COMPANY_CONTACT = {
  email: 'info.globaleduexp@gmail.com',
  whatsappDigits: '8801717149453',
  hours: 'Office Counseling Hours: Saturday – Thursday: 10:00 AM – 6:30 PM',
  onlineHours: 'Our online Counseling Hours Sunday - Saturday: 10:00 AM – 6:30 PM',
  dhakaPhoneDisplay: '+880 1717149453',
  socials: {
    facebook: 'https://www.facebook.com/GlobalEduExp',
    youtube: 'https://www.youtube.com/@GlobalEduExp',
    instagram: 'https://www.instagram.com/globaleduexp/',
  },
  offices: [
    {
      name: 'Chittagong Office',
      addressLines: [
        'Epic Emdad Heights, Chattoshawri Circle',
        'Mehedibag (EBL Building), Flat B-8 (Left Side)',
        'Chittagong, Bangladesh',
      ],
      phoneDisplay: '+880 1717149453',
      phoneHref: 'tel:+8801717149453',
    },
    {
      name: 'Khulna Office',
      addressLines: [
        '6th Floor, United Tower',
        'KDA Avenue (Shib Bari Mor)',
        'Khulna 9100, Bangladesh',
      ],
      phoneDisplay: '+880 1686395927',
      phoneHref: 'tel:+8801686395927',
    },
  ] as OfficeLocation[],
};

export const TRUST_METRICS: TrustMetric[] = [
  {
    value: '500+',
    label: 'Students Placed',
    context: 'Across Asia, Europe, UK & North America',
  },
  {
    value: '850+',
    label: 'University Programs',
    context: 'Indexed across 6 primary study corridors',
  },
  {
    value: '98%',
    label: 'Visa Success Rate',
    context: 'Verified financial & interview audits',
  },
  {
    value: '48h',
    label: 'Initial Profile Review',
    context: 'Dedicated counselor response',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    number: '01.',
    title: 'Career & Course Counseling',
    summary:
      'One-on-one academic profiling from our Chittagong, Khulna, and online desks that aligns your prior grades, yearly budget plan, and career goals with accredited degree pathways.',
    stage: 'Discovery & Shortlisting',
    timeline: 'Week 1',
    image: SERVICE_LIFESTYLE_IMAGES.counseling.src,
    imageAlt: SERVICE_LIFESTYLE_IMAGES.counseling.alt,
    deliverables: [
      'SSC/HSC, O/A Level, or Bachelor’s transcript & IELTS readiness audit',
      'Curated shortlist of partner universities across your target countries',
      'Tuition, living cost, and post-study work comparison brief',
    ],
  },
  {
    number: '02.',
    title: 'University Application & Admission Processing',
    summary:
      'End-to-end management of institutional applications, statement of purpose editing, academic reference coordination, and conditional offer conversion.',
    stage: 'Admissions Execution',
    timeline: 'Weeks 2–6',
    image: SERVICE_LIFESTYLE_IMAGES.ieltsLibrary.src,
    imageAlt: SERVICE_LIFESTYLE_IMAGES.ieltsLibrary.alt,
    deliverables: [
      'Statement of Purpose (SOP) and academic CV structural review',
      'Direct portal submission with partner admissions offices',
      'Interview preparation for selective STEM, business, and MBBS faculties',
    ],
  },
  {
    number: '03.',
    title: 'Scholarship & Financial Aid Guidance',
    summary:
      'Targeted identification of merit tuition waivers and government fellowships including Commonwealth, Chevening, GREAT, DAAD, Study in Canada, Australia Awards, MEXT, and GKS.',
    stage: 'Funding Strategy',
    timeline: 'Weeks 3–8',
    image: SERVICE_LIFESTYLE_IMAGES.scholarshipAdvisory.src,
    imageAlt: SERVICE_LIFESTYLE_IMAGES.scholarshipAdvisory.alt,
    deliverables: [
      'Eligibility screening for institutional merit bursaries and full-ride awards',
      'Motivation essay and research proposal review for national fellowships',
      'Tuition deposit scheduling and financial sponsorship guidance',
    ],
  },
  {
    number: '04.',
    title: 'Student Visa Assistance',
    summary:
      'Rigorous compliance audits for EMGS Malaysia, German APS & blocked accounts, UK Student Route CAS checks, Canadian/US study permits, and East Asian COEs.',
    stage: 'Immigration & Compliance',
    timeline: 'Weeks 6–12',
    image: SERVICE_LIFESTYLE_IMAGES.visaPassport.src,
    imageAlt: SERVICE_LIFESTYLE_IMAGES.visaPassport.alt,
    deliverables: [
      'Country-specific bank solvency and sponsor document verification',
      'Visa portal filing, biometric booking, and embassy mock interviews',
      'Health insurance, medical screening, and apostille/attestation checklist',
    ],
  },
  {
    number: '05.',
    title: 'Pre-Departure Briefing',
    summary:
      'Practical transition support covering student accommodation contracts, airport pickup coordination, local banking, and first-week campus registration.',
    stage: 'Arrival & Settlement',
    timeline: '2–4 Weeks Before Flight',
    image: SERVICE_LIFESTYLE_IMAGES.preDeparture.src,
    imageAlt: SERVICE_LIFESTYLE_IMAGES.preDeparture.alt,
    deliverables: [
      'Verified on-campus and private student housing options',
      'Arrival checklist: currency cards, SIM cards, and residence permits',
      'Alumni peer introductions in your destination city',
    ],
  },
];

export const STUDY_DESTINATIONS: StudyDestination[] = [
  {
    id: 'canada',
    regionLabel: 'Canada',
    title: 'Canada — Co-Op Degrees, Scholarships & PGWP Pathways',
    tagline: '47 Undergraduate and Masters university options across Ontario, British Columbia, Alberta, and Atlantic Canada.',
    image: DESTINATION_LANDMARK_IMAGES.canada.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.canada.alt,
    universityLocation: 'Ontario, British Columbia, Alberta & Atlantic Canada',
    postStudyWork: 'Up to 3-year Post-Graduation Work Permit (PGWP) & PR pathways',
    intakeWindows: 'January, May & September',
    entryRequirements: 'HSC / A-Level or Bachelor’s (70%+), IELTS 6.0–6.5+, Study Permit financial proof',
    highlights: [
      'Compare 47 Canadian university locations, ALL Levels programs, and scholarship profiles',
      'Entrance and merit scholarships available based on student academic profile',
      'Co-op work terms and 24 hours/week off-campus work eligibility for study permit holders',
    ],
    levelsSupported: ['Undergraduate', 'Masters'],
    partnerUniversities: [
      {
        name: 'University of Waterloo',
        city: 'Waterloo, Ontario',
        flagshipPrograms: 'Computer Science, Engineering, Co-op Mathematics',
      },
      {
        name: 'University of Ottawa',
        city: 'Ottawa, Ontario',
        flagshipPrograms: 'Software Engineering, Public Policy, Health Sciences',
      },
      {
        name: 'University of Manitoba',
        city: 'Winnipeg, Manitoba',
        flagshipPrograms: 'Engineering, Agribusiness, Computer Science',
      },
      {
        name: 'Memorial University of Newfoundland',
        city: "St. John's, NL",
        flagshipPrograms: 'Marine Engineering, Business, Computer Science',
      },
    ],
  },
  {
    id: 'usa',
    regionLabel: 'USA',
    title: 'United States — Research Universities, STEM OPT & Scholarships',
    tagline: '257 Undergraduate and Masters university options across US public and private institutions with F-1 visa guidance.',
    image: DESTINATION_LANDMARK_IMAGES.usa.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.usa.alt,
    universityLocation: 'New York, Massachusetts, California, Texas, Florida & Nationwide',
    postStudyWork: '12-month OPT + 24-month STEM OPT extension (up to 36 months)',
    intakeWindows: 'January (Spring) & August/September (Fall)',
    entryRequirements: 'GPA 3.0+, IELTS 6.0–6.5 / TOEFL iBT 79+, SAT/GRE optional by campus',
    highlights: [
      'Browse 257 US university locations, ALL Levels programs, and scholarship records',
      'Merit entrance scholarships, graduate assistantships, and on-campus employment access',
      'Dedicated I-20 financial review and US Embassy F-1 visa mock interview coaching',
    ],
    levelsSupported: ['Undergraduate', 'Masters'],
    partnerUniversities: [
      {
        name: 'State University of New York (SUNY)',
        city: 'New York State',
        flagshipPrograms: 'Computer Science, Business Analytics, Engineering',
      },
      {
        name: 'Rochester Institute of Technology (RIT)',
        city: 'Rochester, NY',
        flagshipPrograms: 'Cybersecurity, Game Design, Industrial Engineering',
      },
      {
        name: 'New York Institute of Technology (NYIT)',
        city: 'New York City',
        flagshipPrograms: 'Data Science, Architecture, MBA',
      },
      {
        name: 'Iowa State University',
        city: 'Ames, Iowa',
        flagshipPrograms: 'Aerospace Engineering, Computer Engineering, Agronomy',
      },
    ],
  },
  {
    id: 'australia',
    regionLabel: 'Australia',
    title: 'Australia — Group of Eight & Regional Merit Scholarships',
    tagline: '36 Undergraduate and Masters university pathways offering merit scholarships and post-study work rights.',
    image: DESTINATION_LANDMARK_IMAGES.australia.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.australia.alt,
    universityLocation: 'Sydney, Melbourne, Brisbane, Perth, Adelaide & Regional Campuses',
    postStudyWork: '2–4 year Temporary Graduate Visa (Subclass 485) with regional bonus',
    intakeWindows: 'February, July & November',
    entryRequirements: 'HSC / A-Level or Bachelor’s (65%+), IELTS 6.0–6.5, Genuine Student (GS) assessment',
    highlights: [
      'Access 36 Australian university locations, ALL Levels programs, and scholarship profiles',
      'Institutional merit scholarships and Australia Awards guidance',
      'Thorough Genuine Student (GS) statement and Subclass 500 visa preparation',
    ],
    levelsSupported: ['Undergraduate', 'Masters'],
    partnerUniversities: [
      {
        name: 'University of Sydney',
        city: 'Sydney, NSW',
        flagshipPrograms: 'Data Science, Architecture, Commerce, Public Health',
      },
      {
        name: 'University of New South Wales (UNSW)',
        city: 'Sydney, NSW',
        flagshipPrograms: 'Software Engineering, Renewable Energy, Finance',
      },
      {
        name: 'University of Queensland (Go8)',
        city: 'Brisbane, QLD',
        flagshipPrograms: 'Biotechnology, Engineering, Business',
      },
      {
        name: 'Deakin & Western Sydney University',
        city: 'Melbourne & Sydney',
        flagshipPrograms: 'IT, Nursing, Business, Engineering',
      },
    ],
  },
  {
    id: 'malaysia',
    regionLabel: 'Malaysia',
    title: 'Malaysia — Transnational Degrees & Affordable Living',
    tagline: 'Foundation, Diploma, Undergraduate, and Masters pathways with leading Malaysian and UK branch campuses.',
    image: DESTINATION_LANDMARK_IMAGES.malaysia.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.malaysia.alt,
    universityLocation: 'Kuala Lumpur, Subang Jaya, Semenyih, Cyberjaya & Johor',
    postStudyWork: 'Up to 12 months Graduate Pass (eligible tracks) & regional MNC hubs',
    intakeWindows: 'February, July & October',
    entryRequirements: 'SSC/O-Level for Foundation & Diploma; HSC/A-Level or Bachelor’s for Undergraduate & Masters',
    highlights: [
      'Full 4-level pathway support: Foundation, Diploma, Undergraduate, and Masters programs',
      'English-medium instruction across engineering, medicine, IT, and business faculties',
      'High visa approval predictability via Education Malaysia Global Services (EMGS)',
    ],
    levelsSupported: ['Foundation', 'Diploma', 'Undergraduate', 'Masters'],
    partnerUniversities: [
      {
        name: 'University of Nottingham Malaysia',
        city: 'Semenyih',
        flagshipPrograms: 'Mechanical Engineering, Business, Computer Science',
      },
      {
        name: 'UCSI University',
        city: 'Kuala Lumpur',
        flagshipPrograms: 'Engineering, Pharmacy, Hospitality, Business',
      },
      {
        name: 'SEGi University',
        city: 'Kota Damansara',
        flagshipPrograms: 'Information Technology, Accounting, Health Sciences',
      },
      {
        name: 'Monash University Malaysia',
        city: 'Subang Jaya',
        flagshipPrograms: 'Data Science, Engineering, Global Business',
      },
    ],
  },
  {
    id: 'europe',
    regionLabel: 'Europe (Germany / EU)',
    title: 'Europe — Public & Applied Sciences Universities Across the EU',
    tagline: 'Partner institutions across Germany, Ireland, Netherlands, Sweden, Finland, Austria, Hungary, and Poland.',
    image: DESTINATION_LANDMARK_IMAGES.germany.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.germany.alt,
    universityLocation: 'Germany, Ireland, Sweden, Finland, France, Spain, Hungary & EU',
    postStudyWork: '18-month German Job Seeker Permit & EU post-study work tracks',
    intakeWindows: 'April (Summer) & October (Winter)',
    entryRequirements: 'Strong academic record (65%+), IELTS 6.0–6.5+, APS verification where required',
    highlights: [
      'Direct partnerships with German, Dutch, Irish, Nordic, and Central European institutions',
      'Structured support for Blocked Account setup and EU student visa documentation',
      '20 hours/week legal student work allowance across the EU academic calendar',
    ],
    levelsSupported: ['Undergraduate', 'Masters'],
    partnerUniversities: [
      {
        name: 'IU International University of Applied Sciences',
        city: 'Berlin / Bad Honnef, Germany',
        flagshipPrograms: 'Computer Science, AI, International Management',
      },
      {
        name: 'Munich Business School & BSBI',
        city: 'Munich & Berlin, Germany',
        flagshipPrograms: 'Global MBA, Finance, Digital Marketing',
      },
      {
        name: 'Wittenborg University of Applied Sciences',
        city: 'Apeldoorn, Netherlands',
        flagshipPrograms: 'International Business, Entrepreneurship, Logistics',
      },
      {
        name: 'Dublin City University & University West',
        city: 'Dublin, Ireland / Trollhättan, Sweden',
        flagshipPrograms: 'Robotics, Computing, Business Analytics',
      },
    ],
  },
  {
    id: 'uk',
    regionLabel: 'United Kingdom',
    title: 'United Kingdom — Intensive 1-Year Master’s & Graduate Route',
    tagline: 'Globally recognized British degrees paired with GREAT, Commonwealth, and Chevening scholarship guidance.',
    image: DESTINATION_LANDMARK_IMAGES.uk.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.uk.alt,
    universityLocation: 'London, Edinburgh, Manchester, Leeds, Birmingham & UK-Wide',
    postStudyWork: '2-year Graduate Route visa (3 years for PhD graduates)',
    intakeWindows: 'January, May & September',
    entryRequirements: 'HSC/A-Level for UG or 2:1/60%+ Bachelor’s for PG, IELTS 6.0–6.5',
    highlights: [
      'Complete a full UK Masters degree in 12 months to enter the workforce faster',
      'GREAT, Commonwealth, and institutional merit scholarship guidance',
      'Dedicated CAS credibility interview coaching prior to UKVI submission',
    ],
    levelsSupported: ['Undergraduate', 'Masters'],
    partnerUniversities: [
      {
        name: 'University of Leeds',
        city: 'Leeds',
        flagshipPrograms: 'Data Analytics, Finance, Civil Engineering',
      },
      {
        name: 'University of Glasgow',
        city: 'Glasgow, Scotland',
        flagshipPrograms: 'Public Health, AI, Management',
      },
      {
        name: 'Coventry University',
        city: 'Coventry / London',
        flagshipPrograms: 'Cybersecurity, Automotive Design, MBA',
      },
      {
        name: 'University of Hertfordshire',
        city: 'Hatfield',
        flagshipPrograms: 'Software Engineering, Biotechnology, Business',
      },
    ],
  },
  {
    id: 'east-asia',
    regionLabel: 'East Asia (South Korea / China / Japan)',
    title: 'East Asia & Global Medical — Fellowships & Research Campuses',
    tagline: 'English-taught STEM degrees in South Korea, China, and Japan alongside accredited international MBBS tracks.',
    image: DESTINATION_LANDMARK_IMAGES.southKorea.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.southKorea.alt,
    universityLocation: 'Tokyo, Beppu, Seoul, Budapest & Global Medical Hubs',
    postStudyWork: '1–2 year job-seeking visa (D-10 in Korea, Designated Activities in Japan)',
    intakeWindows: 'March/April & September/October',
    entryRequirements: 'Strong GPA (3.0+/4.0), IELTS 6.0+ or TOEFL iBT 80+; science background for MBBS',
    highlights: [
      'Structured application support for MEXT (Japan) and GKS (Korea) scholarships',
      'Direct guidance for accredited international medical programs (e.g., Russia & Central Europe)',
      'Guided Certificate of Eligibility (COE) and student visa documentation',
    ],
    levelsSupported: ['Undergraduate', 'Masters'],
    partnerUniversities: [
      {
        name: 'Ritsumeikan Asia Pacific University (APU)',
        city: 'Beppu, Japan',
        flagshipPrograms: 'International Management, Sustainability & Tourism',
      },
      {
        name: 'Yonsei University (Underwood)',
        city: 'Seoul, South Korea',
        flagshipPrograms: 'Quantitative Risk, Bio-Convergence, Global Affairs',
      },
      {
        name: 'Rostov State Medical University',
        city: 'Rostov-on-Don, Russia',
        flagshipPrograms: 'MBBS (English-Medium General Medicine)',
      },
      {
        name: 'Budapest Metropolitan University',
        city: 'Budapest, Hungary',
        flagshipPrograms: 'Business, Tourism, Communication & Media',
      },
    ],
  },
];

export const REST_OF_WORLD_PATHS: string[] = [
  'Asia',
  'Middle East',
  'Europe',
  'Africa',
  'North America',
  'Global pathway programs',
];

export const REST_OF_WORLD_SERVICES: string[] = [
  'University and course shortlisting',
  'Scholarship and tuition guidance',
  'Application and document support',
  'Visa preparation guidance',
];

export const EUROPE_COUNTRIES_UNIVERSITIES: EuropeCountryUniversities[] = [
  {
    country: 'Denmark',
    universities: ['IBA International Business Academy'],
  },
  { country: 'Estonia', universities: [] },
  {
    country: 'Finland',
    universities: [
      'Lappeenranta-Lahti University of Technology (LUT University)',
      'Tampere University',
      'Metropolia University of Applied Sciences',
      'Arcada University of Applied Sciences',
      'Satakunta University of Applied Sciences',
      'Kajaani University of Applied Sciences',
    ],
  },
  { country: 'Iceland', universities: [] },
  {
    country: 'Ireland',
    universities: [
      'Trinity College Dublin',
      'University College Dublin',
      'University of Galway',
      'University of Limerick',
      'Dublin City University',
      'Maynooth University',
      'Technological University Dublin',
      'Atlantic Technological University (Sligo)',
      'South East Technological University Carlow',
      'Technological University of the Shannon',
    ],
  },
  { country: 'Latvia', universities: [] },
  { country: 'Lithuania', universities: [] },
  { country: 'Norway', universities: [] },
  {
    country: 'Sweden',
    universities: [
      'Uppsala University',
      'Linnaeus University',
      'Halmstad University',
      'Jönköping University',
      'University of Skövde',
      'Dalarna University',
      'Kristianstad University',
      'University West',
    ],
  },
  {
    country: 'United Kingdom',
    universities: Array.from(
      new Set(
        DESTINATION_DIRECTORIES.uk.map((u) =>
          u.universityName.replace(/Northumbira/g, 'Northumbria')
        )
      )
    ),
  },
  {
    country: 'Austria',
    universities: ['Modul University Vienna'],
  },
  {
    country: 'Belgium',
    universities: ['United Business Institutes (UBI)'],
  },
  {
    country: 'France',
    universities: [
      'SKEMA Business School',
      'Audencia Business School',
      'NEOMA Business School',
      'ICN Business School',
      'Le Cordon Bleu',
      'Collège de Paris - Elfe',
      'Sports Management School',
      'Institut Culinaire de France',
      'IEFT - Tourism & Hospitality Management',
    ],
  },
  {
    country: 'Germany',
    universities: [
      'IU International University of Applied Sciences',
      'EBS University',
      'SRH Berlin University of Applied Sciences',
      'University of Europe for Applied Sciences',
      'FOM University of Applied Sciences for Economics & Management',
      'PFH Private University of Applied Sciences',
      'CBS International Business School',
      'EU Business School',
      'Munich Business School',
      'GISMA Business School',
      'Berlin School of Business & Innovation (BSBI)',
      'International University SDI München',
      'Steinbeis School of Management & Innovation',
      'Eurasia Institute for International Education',
    ],
  },
  { country: 'Luxembourg', universities: [] },
  {
    country: 'Netherlands',
    universities: ['Wittenborg University of Applied Sciences'],
  },
  { country: 'Switzerland', universities: [] },
  {
    country: 'Croatia',
    universities: ['University of Zagreb', "VERN' University"],
  },
  { country: 'Greece', universities: [] },
  { country: 'Italy', universities: [] },
  {
    country: 'Malta',
    universities: [
      'European Institute of Education',
      'International European University',
    ],
  },
  {
    country: 'Portugal',
    universities: ['Universidade Europeia'],
  },
  {
    country: 'Spain',
    universities: [
      'Universidad Católica San Antonio de Murcia (UCAM)',
      'Universidad Europea',
      'European University - Barcelona',
      'EAE Business School',
      'ESEI International Business School',
      'Ostelea Tourism Management School',
      'Instituto Europeo di Design (IED)',
      'ISAM - International School of Agri Management',
    ],
  },
  {
    country: 'Hungary',
    universities: [
      'University of Debrecen',
      'University of Pécs',
      'Corvinus University of Budapest',
      'Óbuda University',
      'University of Sopron',
      'John von Neumann University',
      'Budapest Metropolitan University',
      'Kodolányi János University',
      'University of Dunaújváros',
    ],
  },
  {
    country: 'Poland',
    universities: [
      'University of Szczecin',
      'Vistula University',
      'University of Information Technology and Management in Rzeszow (UITM)',
    ],
  },
  { country: 'Romania', universities: [] },
  {
    country: 'Cyprus',
    universities: ['Neapolis University Pafos'],
  },
  { country: 'Georgia', universities: [] },
];

export const GLOBAL_PARTNER_GROUPS: GlobalPartnerGroup[] = [
  {
    region: 'Canada & United States',
    universities: [
      'University of Ottawa',
      'University of Waterloo',
      'Ryerson University (Toronto Metropolitan University)',
      'State University of New York (SUNY)',
      'New York Institute of Technology (NYIT)',
      'Rochester Institute of Technology (RIT)',
    ],
  },
  {
    region: 'Australia & New Zealand',
    universities: [
      'University of Sydney',
      'University of New South Wales (UNSW)',
      'University of Canberra (UC)',
      'Auckland University of Technology (AUT)',
      'Victoria University of Wellington',
      'Le Cordon Bleu (LCB)',
    ],
  },
  {
    region: 'Europe Partner Network',
    universities: [
      'Wittenborg University of Applied Sciences (Netherlands)',
      'University West (Sweden)',
      'IU International University of Applied Sciences (Germany)',
      'Munich Business School (Germany)',
      'Berlin School of Business & Innovation (BSBI, Germany)',
      'Budapest Metropolitan University (Hungary)',
      'University of Information Technology and Management in Rzeszow (Poland)',
      'Arcada University of Applied Sciences (Finland)',
      'Dublin City University (Ireland)',
      'Modul University Vienna (Austria)',
    ],
  },
  {
    region: 'Malaysia Partner Campuses',
    universities: [
      'University of Nottingham Malaysia',
      'UCSI University',
      'SEGi University',
    ],
  },
];

export const SCHOLARSHIP_DIRECTORY: ScholarshipItem[] = [
  {
    award: 'GREAT Scholarships & Chevening',
    country: 'United Kingdom',
    level: 'Masters',
    funding: 'GREAT Scholarships & Chevening',
    notes: 'Merit-based UK awards for eligible partner universities.',
  },
  {
    award: 'Commonwealth Master’s Scholarship',
    country: 'United Kingdom',
    level: 'Masters',
    funding: 'Commonwealth Master’s Scholarship',
    notes: 'Full scholarship coverage for eligible applicants from Commonwealth nations.',
  },
  {
    award: 'Australia Awards & Destination Australia',
    country: 'Australia',
    level: 'Undergraduate & Masters',
    funding: 'Australia Awards & Destination Australia',
    notes: 'Government-backed grants for regional Australian campuses and research fellows.',
  },
  {
    award: 'Study in Canada & Ontario Graduate Scholarship',
    country: 'Canada',
    level: 'Undergraduate & Masters',
    funding: 'Study in Canada & Ontario Graduate Scholarship',
    notes: 'Includes Vanier, NSERC, SSHRC, and provincial merit scholarships.',
  },
  {
    award: 'Malaysia Partner University Merit Scholarship',
    country: 'Malaysia',
    level: 'Diploma, Foundation, Undergraduate & Masters',
    funding: 'Malaysia Partner University Merit Scholarship',
    notes: 'Institutional merit awards across Diploma, Foundation, Undergraduate, and Masters.',
  },
  {
    award: 'DAAD & Erasmus Mundus Scholarships',
    country: 'Germany & Europe',
    level: 'Undergraduate & Masters',
    funding: 'DAAD & Erasmus Mundus Scholarships',
    notes: 'European joint master and national postgraduate scholarships.',
  },
];

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: 'story-samad',
    studentName: 'Md. Abdus Samad',
    originCountry: 'Bangladesh',
    destinationId: 'europe',
    destinationLabel: 'Europe (Erasmus Mundus)',
    university: 'Three Partner European Universities',
    program: 'Software Engineers For Green Deal (SE4GD)',
    degreeLevel: "Postgraduate (Master's)",
    intakeYear: 'Erasmus Mundus Scholar',
    outcomeMetric: 'Erasmus Mundus Joint Master Scholarship Secured',
    quote:
      'Global Education Expert made my dream of studying at three prestigious European universities a reality. Their support in securing the Erasmus Mundus scholarship for Software Engineers For Green Deal was invaluable. I am incredibly grateful for their expertise.',
    portraitImage:
      'https://images.unsplash.com/photo-1770662369337-44ec308aba11?auto=format&fit=crop&w=1200&q=80',
    portraitAlt: 'Md. Abdus Samad holding university graduation diploma outdoors in academic gown',
  },
  {
    id: 'story-kawsar',
    studentName: 'Mohammed Kawsar',
    originCountry: 'Bangladesh',
    destinationId: 'usa',
    destinationLabel: 'United States',
    university: 'Duquesne University (Palumbo-Donahue School of Business)',
    program: 'MS in Analytics & Information Management',
    degreeLevel: "Postgraduate (Master's)",
    intakeYear: 'Verified Alumni',
    outcomeMetric: 'Admitted to Duquesne University Business School (USA)',
    quote:
      'The team at Global Education Expert was instrumental in my successful admission to Duquesne University. Their personalized approach and in-depth knowledge made the process stress-free.',
    portraitImage:
      'https://images.unsplash.com/photo-1773921405330-edca29c118db?auto=format&fit=crop&w=1200&q=80',
    portraitAlt: 'Mohammed Kawsar smiling outdoors in graduation cap and gown on university campus',
  },
  {
    id: 'story-sadat',
    studentName: 'Syed Nazmus Sadat',
    originCountry: 'Bangladesh',
    destinationId: 'uk',
    destinationLabel: 'United Kingdom',
    university: 'Edinburgh Napier University',
    program: 'MSc in Computing',
    degreeLevel: "Postgraduate (Master's)",
    intakeYear: 'Verified Alumni',
    outcomeMetric: 'Enrolled in MSc Computing at Edinburgh Napier (UK)',
    quote:
      'Global Education Expert played a crucial role in helping me gain admission to one of the UK’s leading universities. Their tailored guidance ensured my successful enrollment in MSc Computing at Edinburgh Napier University.',
    portraitImage:
      'https://images.unsplash.com/photo-1773921403331-370386b92fa0?auto=format&fit=crop&w=1200&q=80',
    portraitAlt: 'Syed Nazmus Sadat smiling on university steps after graduation ceremony',
  },
  {
    id: 'story-syful',
    studentName: 'Syful Islam',
    originCountry: 'Bangladesh',
    destinationId: 'europe',
    destinationLabel: 'Europe (Germany)',
    university: 'Berlin School of Business and Innovation (BSBI)',
    program: 'Masters in Business Administration (MBA)',
    degreeLevel: "Postgraduate (Master's)",
    intakeYear: 'Verified Alumni',
    outcomeMetric: 'MBA Admission & Relocation to Berlin, Germany',
    quote:
      'The team at Global Education Expert was exceptional in helping me navigate the complex application process. I am now pursuing my MBA at BSBI in Berlin, all thanks to their expert advice and dedication.',
    portraitImage:
      'https://images.unsplash.com/photo-1782898638881-e84fcdaafb81?auto=format&fit=crop&w=1200&q=80',
    portraitAlt: 'Syful Islam smiling in graduation attire after completing university studies',
  },
  {
    id: 'story-fabiha',
    studentName: 'Fabiha Bushra',
    originCountry: 'Bangladesh',
    destinationId: 'east-asia',
    destinationLabel: 'Rest of the World (Russia)',
    university: 'Rostov State Medical University',
    program: 'MBBS (General Medicine)',
    degreeLevel: "Undergraduate (Bachelor's)",
    intakeYear: 'Verified Alumni',
    outcomeMetric: 'Full Admission & Visa Support for Medical Study Abroad',
    quote:
      'Global Education Expert is a company which helps foreign students to get admission in universities abroad. They are extremely helpful and informative. They guided & supported me for my education in Russia, and most importantly they are so genuine with their work.',
    portraitImage:
      'https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?auto=format&fit=crop&w=1200&q=80',
    portraitAlt: 'Fabiha Bushra smiling outdoors on campus in natural daylight',
  },
];

export const CONSULTANCY_TEAM: ConsultantProfile[] = [
  {
    name: 'Chittagong Advisory Desk',
    role: 'Headquarters · Admissions & Visa Compliance',
    specialization: 'UK, Europe, Canada, USA & Medical Pathways',
    experience: 'Epic Emdad Heights, Mehedibag, Chittagong',
    languages: 'English, Bengali',
    bio: 'Handles complete profile assessments, university offer processing, scholarship applications, and embassy visa file preparation for students nationwide.',
  },
  {
    name: 'Khulna Regional Desk',
    role: 'Regional Counseling & Document Verification',
    specialization: 'Malaysia, Australia, Europe & Undergraduate Pathways',
    experience: 'United Tower, KDA Avenue, Khulna 9100',
    languages: 'English, Bengali',
    bio: 'Provides in-person transcript audits, IELTS planning, guardian budget consultations, and pre-departure orientation briefings.',
  },
  {
    name: 'International Placement Network',
    role: 'University Liaison & Scholarship Strategy',
    specialization: '50+ Direct Institutional Agreements Worldwide',
    experience: 'North America, UK, EU, Malaysia & East Asia',
    languages: 'Multi-region partner admissions coordination',
    bio: 'Coordinates direct conditional offer reviews, merit bursary nominations, and arrival transitions across partner universities.',
  },
];
