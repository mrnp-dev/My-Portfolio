import aiReadyCertificatePageOne from '../assets/certs/AICLASSASEAN - AI Training Certificate of Completion/AICLASSASEAN - AI Training Certificate of Completion-1.png'
import aiReadyCertificatePageTwo from '../assets/certs/AICLASSASEAN - AI Training Certificate of Completion/AICLASSASEAN - AI Training Certificate of Completion-2.png'
import devconCertificateImage from '../assets/certs/DEVCON Kids - Lead Learners Workshop Certificate of Completion/DEVCON Kids - Lead Learners Workshop Certificate of Completion-1.png'
import pythonCertificateImage from '../assets/certs/Simplilearn - Python Cerficate of Completion/Simplilearn - Python Cerficate of Completion-1.png'

export type NavItem = {
  label: string
  href: `#${string}`
}

export type SkillGroup = {
  label: string
  skills: string[]
  variant?: 'default' | 'soft'
}

export type ProjectStatus = 'wip' | 'done'

export type Project = {
  name: string
  meta: string
  statusLabel: string
  status: ProjectStatus
  previewLabel: string
  previewShots: string[]
  description: string
  highlights: string[]
  stack: string[]
  duration?: string
}


export type Certification = {
  issuer: string
  name: string
  date: string
  certificateImages?: string[]
}

export type ContactLink = {
  label: string
  href: string
  value: string
}

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certs' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'Dart', 'PHP', 'SQL', 'C++', 'Java', 'HTML / CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['Flutter', 'FastAPI', 'Tailwind CSS', 'scikit-learn'],
  },
  {
    label: 'Databases & Tools',
    skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Firebase', 'Supabase', 'Git', 'Docker', 'Linux', 'VS Code'],
  },
  {
    label: 'Soft Skills',
    variant: 'soft',
    skills: [
      'Leadership',
      'Client Communication',
      'Requirements Gathering',
      'Technical Facilitation',
      'Public Speaking',
      'Community Outreach',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'SANT:IO',
    duration: '2025 - Present',
    meta: 'Tourism Discovery Platform & ML Recommendation Engine',
    status: 'wip',
    statusLabel: 'In Progress, Expected Sept 2026',
    previewLabel: 'Destination swipe discovery view',
    previewShots: [],
    description: 'A tourism discovery platform for Central Luzon in partnership with provincial and regional Department of Tourism offices.',
    highlights: [
      'Engineered a machine learning recommendation model in Python that powers personalized destination suggestions.',
      'Designed and built a swipe-based destination recommendation system and a browsable directory with filters.',
      'Constructed a three-platform ecosystem: a Flutter mobile app, a destination management portal for businesses, and a DOT admin dashboard.'
    ],
    stack: ['Flutter', 'Supabase', 'PostgreSQL', 'Python', 'FastAPI']
  },
  {
    name: 'Carlos Fitness Membership System',
    duration: '2025 - 2026',
    meta: 'Dual-App Commercial Gym CRM & digital ID system',
    status: 'done',
    statusLabel: 'Completed',
    previewLabel: 'Tablet gym manager interface',
    previewShots: [],
    description: 'Engineered a dual-app Android solution for a commercial gym business following formal software engineering requirements.',
    highlights: [
      'Developed a tablet-based gym management app for staff to handle full CRUD operations on memberships, digitizing a previously paper-based system.',
      'Created a companion member-facing app that displays membership status and serves as a digital gym ID.',
      'Implemented a hybrid offline-first database architecture using Firebase Firestore for cloud sync and SQLite for local storage.'
    ],
    stack: ['Flutter', 'Firebase', 'SQLite', 'Git']
  },
  {
    name: 'Hirenorian',
    duration: '2025',
    meta: 'University Internship Matching Portal',
    status: 'done',
    statusLabel: 'Completed',
    previewLabel: 'Internship matches board',
    previewShots: [],
    description: 'Engineered a multi-tiered platform matching university students with OJT opportunities, simulating industrial job boards.',
    highlights: [
      'Developed an administrative dashboard to monitor application metrics and OJT tracking in real time.',
      'Created a corporate portal for external companies to manage postings and review candidate profiles.',
      'Architected secure-coded backend PHP APIs integrated with a MySQL database handling three user access roles.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'PHP', 'MySQL', 'Docker', 'Git']
  },
  {
    name: 'BiteWise Calorie Tracker',
    duration: '2025',
    meta: 'Offline Android Diet & Meal Tracking App',
    status: 'done',
    statusLabel: 'Completed',
    previewLabel: 'Daily food logger and calorie progress',
    previewShots: [],
    description: 'Built a fully offline Android diet tracking application allowing users to log meals, monitor caloric intake, and view history.',
    highlights: [
      'Designed a local SQLite database schema to store and query meal logs and food items completely on-device.',
      'Structured using modular event-driven programming patterns native to the B4A framework, separating UI from calculation logic.'
    ],
    stack: ['Basic4Android (B4A)', 'SQLite']
  }
]



export const certifications: Certification[] = [
  {
    issuer: 'ASEAN Foundation / Google.org',
    name: 'AI Ready ASEAN - Certificate of Completion',
    date: 'May 2026 · 15 modules completed',
    certificateImages: [aiReadyCertificatePageOne, aiReadyCertificatePageTwo],
  },
  {
    issuer: 'DEVCON Kids Pampanga',
    name: 'Lead Learner Workshop Certificate',
    date: 'February 2026',
    certificateImages: [devconCertificateImage],
  },
  {
    issuer: 'Simplilearn',
    name: 'Programming with Python',
    date: 'December 2025',
    certificateImages: [pythonCertificateImage],
  },
  {
    issuer: 'Pampanga State University',
    name: 'Bachelor of Science in Computer Science',
    date: 'Expected Aug 2027',
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:pascualmarkreynino05@gmail.com',
    value: 'pascualmarkreynino05@gmail.com',
  },
  {
    label: 'Phone',
    href: 'tel:+639690550139',
    value: '(+63) 969-055-0139',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mark-rey-niño-pascual-9b1252395',
    value: 'mark-rey-nino-pascual',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mrnp-dev',
    value: 'github.com/mrnp-dev',
  },
]

export const footerLinks = contactLinks.filter(({ label }) => label === 'GitHub' || label === 'LinkedIn')
