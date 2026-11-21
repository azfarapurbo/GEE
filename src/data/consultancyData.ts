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
  deliverables: string[];
}

export interface PartnerUniversity {
  name: string;
  city: string;
  flagshipPrograms: string;
  tuitionNote: string;
}

export interface StudyDestination {
  id: 'canada' | 'usa' | 'uk' | 'australia' | 'europe' | 'malaysia' | 'east-asia';
  regionLabel: string;
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
  tuitionRange: string;
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

export const HERO_IMAGE = '/src/assets/images/hero_global_campus_1795262836708.jpg';
export const ABOUT_ADVISORY_IMAGE = '/src/assets/images/about_advisory_office_1795262836626.jpg';

export const COMPANY_CONTACT = {
  email: 'info.globaleduexp@gmail.com',
  whatsappDigits: '8801717149453',
  hours: 'Bangladesh Time: Saturday – Thursday: 10:00 AM – 6:30 PM',
  onlineHours: 'Our online Counseling Hours Sunday - Saturday: 10:00 AM – 6:30 PM',
  dhakaPhoneDisplay: '+880 1717 149453',
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
      phoneDisplay: '+880 1717 149453',
      phoneHref: 'tel:+8801717149453',
    },
    {
      name: 'Khulna Office',
      addressLines: [
        '6th Floor, United Tower',
        'KDA Avenue (Shib Bari Mor)',
        'Khulna 9100, Bangladesh',
      ],
      phoneDisplay: '+880 1686 395927',
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
    tagline: '67+ Undergraduate and Masters university options across Ontario, British Columbia, Alberta, and Atlantic Canada.',
    image: '/src/assets/images/dest_canada_campus_1795263476514.jpg',
    imageAlt: 'Canadian university stone collegiate hall and glass innovation pavilion framed by autumn maple trees',
    tuitionRange: 'Depend on Student Profile',
    postStudyWork: 'Up to 3-year Post-Graduation Work Permit (PGWP) & PR pathways',
    intakeWindows: 'January, May & September',
    entryRequirements: 'HSC / A-Level or Bachelor’s (70%+), IELTS 6.0–6.5+, Study Permit financial proof',
    highlights: [
      'Compare 67 Undergraduate & Masters university fee and scholarship profiles across Canada',
      'Entrance and merit scholarships available based on student academic profile',
      'Co-op work terms and 24 hours/week off-campus work eligibility for study permit holders',
    ],
    levelsSupported: ['Undergraduate', 'Masters'],
    partnerUniversities: [
      {
        name: 'University of Waterloo',
        city: 'Waterloo, Ontario',
        flagshipPrograms: 'Computer Science, Engineering, Co-op Mathematics',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'University of Ottawa',
        city: 'Ottawa, Ontario',
        flagshipPrograms: 'Software Engineering, Public Policy, Health Sciences',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'University of Manitoba',
        city: 'Winnipeg, Manitoba',
        flagshipPrograms: 'Engineering, Agribusiness, Computer Science',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Memorial University of Newfoundland',
        city: "St. John's, NL",
        flagshipPrograms: 'Marine Engineering, Business, Computer Science',
        tuitionNote: 'Depend on Student Profile',
      },
    ],
  },
  {
    id: 'usa',
    regionLabel: 'USA',
    title: 'United States — Research Universities, STEM OPT & Scholarships',
    tagline: '369 Undergraduate and Masters options across US public and private institutions with F-1 visa guidance.',
    image: '/src/assets/images/dest_usa_campus_1795263640245.jpg',
    imageAlt: 'Classic red-brick American university library with white columns and green quad',
    tuitionRange: 'Depend on Student Profile',
    postStudyWork: '12-month OPT + 24-month STEM OPT extension (up to 36 months)',
    intakeWindows: 'January (Spring) & August/September (Fall)',
    entryRequirements: 'GPA 3.0+, IELTS 6.0–6.5 / TOEFL iBT 79+, SAT/GRE optional by campus',
    highlights: [
      'Browse 369 Undergraduate & Masters US university tuition and scholarship records',
      'Merit entrance scholarships, graduate assistantships, and on-campus employment access',
      'Dedicated I-20 financial review and US Embassy F-1 visa mock interview coaching',
    ],
    levelsSupported: ['Undergraduate', 'Masters'],
    partnerUniversities: [
      {
        name: 'State University of New York (SUNY)',
        city: 'New York State',
        flagshipPrograms: 'Computer Science, Business Analytics, Engineering',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Rochester Institute of Technology (RIT)',
        city: 'Rochester, NY',
        flagshipPrograms: 'Cybersecurity, Game Design, Industrial Engineering',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'New York Institute of Technology (NYIT)',
        city: 'New York City',
        flagshipPrograms: 'Data Science, Architecture, MBA',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Iowa State University',
        city: 'Ames, Iowa',
        flagshipPrograms: 'Aerospace Engineering, Computer Engineering, Agronomy',
        tuitionNote: 'Depend on Student Profile',
      },
    ],
  },
  {
    id: 'australia',
    regionLabel: 'Australia',
    title: 'Australia — Group of Eight & Regional Merit Scholarships',
    tagline: '66 Undergraduate and Masters pathways offering merit scholarships and post-study work rights.',
    image: '/src/assets/images/dest_australia_campus_1795263644914.jpg',
    imageAlt: 'Australian sandstone university arches beside a bright glass atrium and eucalyptus trees',
    tuitionRange: 'Depend on Student Profile',
    postStudyWork: '2–4 year Temporary Graduate Visa (Subclass 485) with regional bonus',
    intakeWindows: 'February, July & November',
    entryRequirements: 'HSC / A-Level or Bachelor’s (65%+), IELTS 6.0–6.5, Genuine Student (GS) assessment',
    highlights: [
      'Access 66 Australian Undergraduate & Masters university fee and scholarship profiles',
      'Institutional merit scholarships and Australia Awards guidance',
      'Thorough Genuine Student (GS) statement and Subclass 500 visa preparation',
    ],
    levelsSupported: ['Undergraduate', 'Masters'],
    partnerUniversities: [
      {
        name: 'University of Sydney',
        city: 'Sydney, NSW',
        flagshipPrograms: 'Data Science, Architecture, Commerce, Public Health',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'University of New South Wales (UNSW)',
        city: 'Sydney, NSW',
        flagshipPrograms: 'Software Engineering, Renewable Energy, Finance',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'University of Queensland (Go8)',
        city: 'Brisbane, QLD',
        flagshipPrograms: 'Biotechnology, Engineering, Business',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Deakin & Western Sydney University',
        city: 'Melbourne & Sydney',
        flagshipPrograms: 'IT, Nursing, Business, Engineering',
        tuitionNote: 'Depend on Student Profile',
      },
    ],
  },
  {
    id: 'malaysia',
    regionLabel: 'Malaysia',
    title: 'Malaysia — Transnational Degrees & Affordable Living',
    tagline: 'Foundation, Diploma, Undergraduate, and Masters pathways with leading Malaysian and UK branch campuses.',
    image: '/src/assets/images/dest_malaysia_campus_1795262836768.jpg',
    imageAlt: 'Contemporary glass and timber university campus surrounded by tropical palms in Kuala Lumpur, Malaysia',
    tuitionRange: 'Depend on Student Profile',
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
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'UCSI University',
        city: 'Kuala Lumpur',
        flagshipPrograms: 'Engineering, Pharmacy, Hospitality, Business',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'SEGi University',
        city: 'Kota Damansara',
        flagshipPrograms: 'Information Technology, Accounting, Health Sciences',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Monash University Malaysia',
        city: 'Subang Jaya',
        flagshipPrograms: 'Data Science, Engineering, Global Business',
        tuitionNote: 'Depend on Student Profile',
      },
    ],
  },
  {
    id: 'europe',
    regionLabel: 'Europe (Germany / EU)',
    title: 'Europe — Public & Applied Sciences Universities Across the EU',
    tagline: 'Partner institutions across Germany, Ireland, Netherlands, Sweden, Finland, Austria, Hungary, and Poland.',
    image: '/src/assets/images/dest_europe_campus_1795262837073.jpg',
    imageAlt: 'German technical university campus blending classic European stone architecture and a modern glass engineering building',
    tuitionRange: 'Depend on Student Profile',
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
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Munich Business School & BSBI',
        city: 'Munich & Berlin, Germany',
        flagshipPrograms: 'Global MBA, Finance, Digital Marketing',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Wittenborg University of Applied Sciences',
        city: 'Apeldoorn, Netherlands',
        flagshipPrograms: 'International Business, Entrepreneurship, Logistics',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Dublin City University & University West',
        city: 'Dublin, Ireland / Trollhättan, Sweden',
        flagshipPrograms: 'Robotics, Computing, Business Analytics',
        tuitionNote: 'Depend on Student Profile',
      },
    ],
  },
  {
    id: 'uk',
    regionLabel: 'United Kingdom',
    title: 'United Kingdom — Intensive 1-Year Master’s & Graduate Route',
    tagline: 'Globally recognized British degrees paired with GREAT, Commonwealth, and Chevening scholarship guidance.',
    image: '/src/assets/images/dest_uk_campus_1795262836697.jpg',
    imageAlt: 'Historic sandstone courtyard and arched windows of a British university in morning sunlight',
    tuitionRange: 'Depend on Student Profile',
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
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'University of Glasgow',
        city: 'Glasgow, Scotland',
        flagshipPrograms: 'Public Health, AI, Management',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Coventry University',
        city: 'Coventry / London',
        flagshipPrograms: 'Cybersecurity, Automotive Design, MBA',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'University of Hertfordshire',
        city: 'Hatfield',
        flagshipPrograms: 'Software Engineering, Biotechnology, Business',
        tuitionNote: 'Depend on Student Profile',
      },
    ],
  },
  {
    id: 'east-asia',
    regionLabel: 'East Asia (Japan / South Korea)',
    title: 'East Asia & Global Medical — Fellowships & Research Campuses',
    tagline: 'English-taught STEM degrees in Japan & South Korea alongside accredited international MBBS & medical tracks.',
    image: '/src/assets/images/dest_east_asia_campus_1795262836645.jpg',
    imageAlt: 'Modern concrete and cedar East Asian university building beside a tranquil reflecting pool',
    tuitionRange: 'Depend on Student Profile',
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
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Yonsei University (Underwood)',
        city: 'Seoul, South Korea',
        flagshipPrograms: 'Quantitative Risk, Bio-Convergence, Global Affairs',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Rostov State Medical University',
        city: 'Rostov-on-Don, Russia',
        flagshipPrograms: 'MBBS (English-Medium General Medicine)',
        tuitionNote: 'Depend on Student Profile',
      },
      {
        name: 'Budapest Metropolitan University',
        city: 'Budapest, Hungary',
        flagshipPrograms: 'Business, Tourism, Communication & Media',
        tuitionNote: 'Depend on Student Profile',
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
    country: 'Germany',
    universities: [
      'Berlin School of Business & Innovation (BSBI)',
      'CBS International Business School',
      'EBS University',
      'EU Business School',
      'Eurasia Institute for International Education',
      'FOM University of Applied Sciences for Economics & Management',
      'GISMA Business School',
      'International University SDI München',
      'IU International University of Applied Sciences',
      'Munich Business School',
      'PFH Private University of Applied Sciences',
      'SRH Berlin University of Applied Sciences',
      'Steinbeis School of Management & Innovation',
      'University of Europe for Applied Sciences',
    ],
  },
  {
    country: 'Netherlands',
    universities: ['Wittenborg University of Applied Sciences'],
  },
  {
    country: 'Ireland',
    universities: [
      'Atlantic Technological University (Sligo)',
      'Dublin City University',
      'Maynooth University',
      'South East Technological University Carlow',
      'Technological University Dublin',
      'Technological University of the Shannon',
      'Trinity College Dublin',
      'University College Dublin',
      'University of Galway',
      'University of Limerick',
    ],
  },
  {
    country: 'France',
    universities: [
      'Audencia Business School',
      'Collège de Paris - Elfe',
      'ICN Business School',
      'IEFT - Tourism & Hospitality Management',
      'Institut Culinaire de France',
      'Le Cordon Bleu',
      'NEOMA Business School',
      'SKEMA Business School',
      'Sports Management School',
    ],
  },
  {
    country: 'Spain',
    universities: [
      'EAE Business School',
      'ESEI International Business School',
      'European University - Barcelona',
      'Instituto Europeo di Design (IED)',
      'ISAM - International School of Agri Management',
      'Ostelea Tourism Management School',
      'Universidad Católica San Antonio de Murcia (UCAM)',
      'Universidad Europea',
    ],
  },
  {
    country: 'Hungary',
    universities: [
      'Budapest Metropolitan University',
      'Corvinus University of Budapest',
      'John von Neumann University',
      'Kodolányi János University',
      'Óbuda University',
      'University of Debrecen',
      'University of Dunaújváros',
      'University of Pécs',
      'University of Sopron',
    ],
  },
  {
    country: 'Sweden',
    universities: [
      'Dalarna University',
      'Halmstad University',
      'Jönköping University',
      'Kristianstad University',
      'Linnaeus University',
      'University of Skövde',
      'University West',
      'Uppsala University',
    ],
  },
  {
    country: 'Finland',
    universities: [
      'Arcada University of Applied Sciences',
      'Kajaani University of Applied Sciences',
      'Lappeenranta-Lahti University of Technology (LUT University)',
      'Metropolia University of Applied Sciences',
      'Satakunta University of Applied Sciences',
      'Tampere University',
    ],
  },
  {
    country: 'Poland',
    universities: [
      'University of Information Technology and Management in Rzeszow (UITM)',
      'University of Szczecin',
      'Vistula University',
    ],
  },
  {
    country: 'Austria',
    universities: ['Modul University Vienna'],
  },
  {
    country: 'Croatia',
    universities: ['University of Zagreb', "VERN' University"],
  },
  {
    country: 'Malta',
    universities: [
      'European Institute of Education',
      'International European University',
    ],
  },
  {
    country: 'Belgium',
    universities: ['United Business Institutes (UBI)'],
  },
  {
    country: 'Cyprus',
    universities: ['Neapolis University Pafos'],
  },
  {
    country: 'Czech Republic',
    universities: ['Anglo-American University'],
  },
  {
    country: 'Denmark',
    universities: ['IBA International Business Academy'],
  },
  {
    country: 'Portugal',
    universities: ['Universidade Europeia'],
  },
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
