export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  details: string[];
  tags: string[];
}

export interface ProjectItem {
  overline: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;

  github?: string;
  live?: string;
}

export interface SkillCategoryItem {
  icon: string;
  title: string;
  skills: string[];
}

export interface AchievementItem {
  icon: string;
  title: string;
  description: string;
}

export const RESUME_URL = 'https://drive.google.com/file/d/1mfOr-SDzExhS_8d8WxJOKcEcNRYTroka/view';

export const PERSONAL_INFO = {
  name: 'Atul Patel',
  greeting: 'Hi, my name is',
  description:
    'Software Development Engineer II at WizCommerce. I build performant mobile & web applications that solve real-world problems. MNIT Jaipur graduate, hackathon winner, and chess enthusiast.',
  email: 'atulpatel22777@gmail.com',
  github: 'https://github.com/atulpatel-03',
  linkedin: 'https://www.linkedin.com/in/atul-patel-132a901ab/',
  typing_words: [
    'build performant mobile apps.',
    'solve real-world problems.',
    'write clean, efficient code.',
    'love React & React Native.',
    'win hackathons.',
  ],
};

export const ABOUT_TEXT = [
  'Hello! I\'m Atul, a software engineer who loves turning complex problems into elegant, user-friendly solutions. My journey in tech started at <highlight>MNIT Jaipur</highlight>, where I graduated with a B.Tech degree in 2023.',
  'Currently, I\'m an <highlight>SDE II at WizCommerce</highlight>, where I build and optimize mobile and web applications that serve thousands of users. I\'ve led teams, integrated complex payment systems, and engineered offline-first architectures that work seamlessly in challenging network conditions.',
  'When I\'m not coding, you\'ll find me playing chess, participating in hackathons, or exploring new technologies. I believe in writing clean, efficient code and building products that make a real difference.',
];

export const STATS = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Companies', value: 4, suffix: '' },
  { label: 'Projects Built', value: 10, suffix: '+' },
  { label: 'Hackathons Won', value: 2, suffix: '' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    title: 'Software Development Engineer II',
    company: 'WizCommerce',
    location: 'Bengaluru, Karnataka',
    date: 'Sept 2023 — Present',
    details: [
      'Engineered core app components for offline functionality using Realm database, reducing crashes by 10% and boosting user engagement by 20%.',
      'Optimized app performance by improving navigation architecture, reducing dependency cycles from 50 to 10.',
      'Led a team of 1 junior engineer and 2 interns, improving team productivity by 25% through code reviews and mentorship.',
    ],
    tags: ['React Native', 'TypeScript', 'Realm', 'Python'],
  },
  {
    title: 'Software Development Engineer I',
    company: 'WizCommerce',
    location: 'Bengaluru, Karnataka',
    date: 'Sept 2023',
    details: [
      'Designed and implemented a secure payment interface integrating 4 payment gateways (Finix, Stax, Cybersource, Worldpay), increasing payment success rates by 25%.',
      'Developed Catalog Mode feature enabling users to create custom catalogs with multi-product selection.',
    ],
    tags: ['ReactJs', 'React Native', 'TypeScript', 'Realm'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Decimal Point Analytics',
    location: 'Mumbai, Maharashtra',
    date: 'June 2022 — Dec 2022',
    details: [
      'Built an automated CSV validation system processing 100K+ rows, reducing manual validation time by 80%.',
      'Implemented JSON-to-CSV conversion functionality, improving data processing efficiency by 40%.',
    ],
    tags: ['Python', 'FastAPI', 'Excel'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Swiflearn',
    location: 'Remote',
    date: 'July 2021 — Oct 2021',
    details: [
      'Improved page speed by 40%, optimizing loading times and user experience.',
      'Added new features and fixed 30+ bugs, improving overall site functionality and stability.',
    ],
    tags: ['JavaScript', 'HTML/CSS', 'React'],
  },
];

export const SKILL_CATEGORIES: SkillCategoryItem[] = [
  {
    icon: 'code',
    title: 'Languages',
    skills: ['C++', 'JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    icon: 'monitor',
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'React Native', 'Node.js', 'Express.js', 'FastAPI', 'PixiJS'],
  },
  {
    icon: 'database',
    title: 'Databases & Tools',
    skills: ['MongoDB', 'Realm', 'Git', 'Postman'],
  },
  {
    icon: 'pen',
    title: 'Other',
    skills: ['DSA', 'OOP', 'Web Scraping', 'System Design', 'REST APIs'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    overline: 'Featured Project',
    title: 'ConnectorDev',
    description:
      'A full-stack social network platform connecting developers on a single platform. Features real-time interactions, developer profiles, and collaboration tools. Built with an extensive backend API tested with Postman.',
    tech: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/atulpatel-03',
    featured: true,
  },
  {
    overline: 'WizCommerce',
    title: 'Payment Gateway Integration',
    description:
      'Architected a secure payment interface integrating 4 different payment gateways with preauthorization support. Increased payment success rates by 25%.',
    tech: ['React Native', 'TypeScript', 'Finix', 'Stax'],
  },
  {
    overline: 'WizCommerce',
    title: 'Offline-First Architecture',
    description:
      'Engineered core app components with Realm database for offline functionality. Reduced app crashes by 10% and increased user engagement by 20%.',
    tech: ['React Native', 'Realm', 'TypeScript'],
  },
  {
    overline: 'WizCommerce',
    title: 'Catalog Mode Feature',
    description:
      'Developed a dual-mode product management system allowing users to create custom catalogs with multi-product selection alongside the existing Order Mode.',
    tech: ['React Native', 'TypeScript', 'Realm'],
  },
  {
    overline: 'Decimal Point Analytics',
    title: 'CSV Validation System',
    description:
      'Automated CSV validation processing 100K+ rows with detailed logging. Reduced manual validation time by 80% and improved data accuracy.',
    tech: ['Python', 'FastAPI', 'Pandas'],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    icon: 'trophy',
    title: '"Code for Billion" Hackathon Winner',
    description:
      'Won the hackathon organized by DealShare, competing against 2000+ participants from across the country.',
  },
  {
    icon: 'star',
    title: 'MNIT JAA Startup Challenge Winner',
    description:
      'Awarded INR 1,00,000 for an innovative startup idea, competing against 150+ startup ideas.',
  },
  {
    icon: 'users',
    title: 'Leadership at MNIT Jaipur',
    description:
      'Chess Team Captain and active member of the Coding Club, fostering competitive programming culture.',
  },
];

export const EDUCATION = {
  institution: 'Malaviya National Institute of Technology, Jaipur',
  degree: 'Bachelor of Technology',
  period: 'July 2019 — May 2023',
  location: 'Jaipur, Rajasthan',
};
