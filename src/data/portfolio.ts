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
}

export type Experience = {
  date: string
  role: string
  organization: string
  description: string
}

export type Certification = {
  issuer: string
  name: string
  date: string
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
  { label: 'Experience', href: '#experience' },
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
    meta: 'Tourism Platform · Flutter + Python · 2025-Present',
    statusLabel: 'In Progress',
    status: 'wip',
    previewLabel: 'Main Preview · SANT:IO App',
    previewShots: ['Swipe Discovery', 'Itinerary Builder', 'DOT Admin Dashboard'],
    description:
      'A tourism discovery platform for Central Luzon, built in partnership with provincial and regional Department of Tourism offices. Think Tinder for destinations: swipe to explore, build itineraries, and leave reviews.',
    highlights: [
      'Engineered and personally trained a machine learning recommendation model in Python that powers destination suggestions based on user preferences and liked places.',
      'Built a FastAPI backend serving the ML model as a REST API, deployed on a VPS.',
      'Developing a three-platform ecosystem: mobile app, a destination management portal for business owners, and a DOT admin dashboard per province to approve listings.',
      'Features include swipe-based discovery, browsable catalogue with filtering, itinerary generation, and a user review and rating system.',
    ],
    stack: ['Flutter', 'Supabase', 'PostgreSQL', 'Python', 'FastAPI', 'Machine Learning', 'VPS'],
  },
  {
    name: 'Carlos Fitness Membership Management System',
    meta: 'Commercial Client Project · Flutter + Firebase · 2024',
    statusLabel: 'Shipped',
    status: 'done',
    previewLabel: 'Main Preview · Gym Management Dashboard',
    previewShots: ['Staff Tablet App', 'Member Digital ID', 'Membership CRUD'],
    description:
      'A dual-app Android solution for a paying business client, digitizing a previously paper-based gym membership system into a professional, offline-capable management tool.',
    highlights: [
      'Developed a tablet-based gym management app for staff handling full CRUD operations on memberships, replacing paper records entirely.',
      'Built a companion member-facing app that displays membership status and serves as a digital gym ID.',
      'Implemented a hybrid offline-first architecture using Firebase Firestore for cloud sync and SQLite for local storage.',
      'Followed formal requirements gathering, documentation, and SDLC practices from contract to delivery.',
    ],
    stack: ['Flutter', 'Firebase Firestore', 'SQLite', 'Android', 'Git'],
  },
  {
    name: 'Hirenorian - OJT & Internship Matching Platform',
    meta: 'University Platform · PHP + MySQL · 2024',
    statusLabel: 'Shipped',
    status: 'done',
    previewLabel: 'Main Preview · Hirenorian Portal',
    previewShots: ['Student Job Board', 'Admin Analytics', 'Company Portal'],
    description:
      'A multi-tiered job portal for Pampanga State University that matches students with partner OJT and internship opportunities, modelled after industrial job platforms like JobStreet.',
    highlights: [
      'Developed three distinct user access levels: student applicants, external company partners, and university admin staff with real-time application tracking.',
      'Architected and secure-coded backend PHP APIs integrated with a MySQL relational database.',
      'Deployed the full-stack application on a VPS using Dokploy for automated container management and CI/CD.',
    ],
    stack: ['HTML / CSS / JS', 'Tailwind CSS', 'PHP', 'MySQL', 'Docker', 'VPS', 'Git'],
  },
  {
    name: 'BiteWise - Offline Calorie Tracker',
    meta: 'Personal Project · B4A + SQLite · 2023',
    statusLabel: 'Shipped',
    status: 'done',
    previewLabel: 'Main Preview · BiteWise Diet Tracker',
    previewShots: ['Meal Log', 'Food Database', 'Calorie History'],
    description:
      'A fully offline Android diet tracking app: no account, no internet, no excuses. Users log meals, monitor daily caloric intake, and browse a searchable food database entirely on-device.',
    highlights: [
      'Designed and implemented a local SQLite database schema for meal logs, food entries, and historical calorie tracking data.',
      'Structured the app using modular, event-driven patterns in Basic4Android, separating UI logic, database operations, and calorie calculations for maintainability.',
      'Zero internet dependency: complete functionality stored and processed on-device.',
    ],
    stack: ['Basic4Android', 'SQLite', 'Android'],
  },
]

export const experiences: Experience[] = [
  {
    date: '2025-Present',
    role: 'Associate Lead Learner & Volunteer',
    organization: 'DEVCON Kids Pampanga',
    description:
      'Facilitated 2 code camps teaching robotics and programming to young learners using Micro:bit. Attended regional workshops and helped coordinate learning materials for beginner sessions.',
  },
  {
    date: '2024',
    role: 'Freelance Android Developer',
    organization: 'Carlos Fitness - San Fernando, Pampanga',
    description:
      'Acquired through a Software Engineering course, developed and delivered a commercial dual-app Android solution for a paying gym business from requirements gathering and documentation through to full deployment.',
  },
  {
    date: '2024-Present',
    role: 'Lead Mobile Developer',
    organization: 'SANT:IO - DOT Central Luzon Partnership',
    description:
      'Building a tourism discovery platform in collaboration with provincial and regional Department of Tourism offices. Responsible for the Flutter mobile app, ML recommendation model, and FastAPI backend infrastructure.',
  },
]

export const certifications: Certification[] = [
  {
    issuer: 'ASEAN Foundation / Google.org',
    name: 'AI Ready ASEAN - Certificate of Completion',
    date: 'May 2026 · 15 modules completed',
  },
  {
    issuer: 'DEVCON Kids Pampanga',
    name: 'Lead Learner Workshop Certificate',
    date: 'February 2026',
  },
  {
    issuer: 'Simplilearn',
    name: 'Programming with Python',
    date: 'December 2025',
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
