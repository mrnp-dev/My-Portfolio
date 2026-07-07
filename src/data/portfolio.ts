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

export const projects: Project[] = []

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
