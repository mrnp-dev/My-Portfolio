import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Certifications', '#certs'],
  ['Contact', '#contact'],
]

const skillGroups = [
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
    soft: true,
    skills: ['Leadership', 'Client Communication', 'Requirements Gathering', 'Technical Facilitation', 'Public Speaking', 'Community Outreach'],
  },
]

const projects = [
  {
    name: 'SANT:IO',
    meta: 'Tourism Platform · Flutter + Python · 2025-Present',
    status: 'In Progress',
    statusType: 'wip',
    preview: 'Main Preview · SANT:IO App',
    shots: ['Swipe Discovery', 'Itinerary Builder', 'DOT Admin Dashboard'],
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
    status: 'Shipped',
    statusType: 'done',
    preview: 'Main Preview · Gym Management Dashboard',
    shots: ['Staff Tablet App', 'Member Digital ID', 'Membership CRUD'],
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
    status: 'Shipped',
    statusType: 'done',
    preview: 'Main Preview · Hirenorian Portal',
    shots: ['Student Job Board', 'Admin Analytics', 'Company Portal'],
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
    status: 'Shipped',
    statusType: 'done',
    preview: 'Main Preview · BiteWise Diet Tracker',
    shots: ['Meal Log', 'Food Database', 'Calorie History'],
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

const experiences = [
  {
    date: '2025-Present',
    role: 'Associate Lead Learner & Volunteer',
    org: 'DEVCON Kids Pampanga',
    desc: 'Facilitated 2 code camps teaching robotics and programming to young learners using Micro:bit. Attended regional workshops and helped coordinate learning materials for beginner sessions.',
  },
  {
    date: '2024',
    role: 'Freelance Android Developer',
    org: 'Carlos Fitness - San Fernando, Pampanga',
    desc: 'Acquired through a Software Engineering course, developed and delivered a commercial dual-app Android solution for a paying gym business from requirements gathering and documentation through to full deployment.',
  },
  {
    date: '2024-Present',
    role: 'Lead Mobile Developer',
    org: 'SANT:IO - DOT Central Luzon Partnership',
    desc: 'Building a tourism discovery platform in collaboration with provincial and regional Department of Tourism offices. Responsible for the Flutter mobile app, ML recommendation model, and FastAPI backend infrastructure.',
  },
]

const certifications = [
  ['ASEAN Foundation / Google.org', 'AI Ready ASEAN - Certificate of Completion', 'May 2026 · 15 modules completed'],
  ['DEVCON Kids Pampanga', 'Lead Learner Workshop Certificate', 'February 2026'],
  ['Simplilearn', 'Programming with Python', 'December 2025'],
  ['Pampanga State University', 'Bachelor of Science in Computer Science', 'Expected Aug 2027'],
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
    return () => revealObserver.disconnect()
  }, [])

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    document.querySelectorAll('section[id]').forEach((section) => sectionObserver.observe(section))
    return () => sectionObserver.disconnect()
  }, [])

  return (
    <>
      <nav className={scrolled ? 'site-nav scrolled' : 'site-nav'} aria-label="Primary navigation">
        <a href="#hero" className="nav-logo" aria-label="Back to top">mrnp.</a>
        <ul className="nav-links">
          {navItems.map(([label, href]) => (
            <li key={href}>
              <a className={activeSection === href.slice(1) ? 'active' : ''} href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <section id="hero" className="hero-section">
          <p className="hero-eyebrow">Open to internships & freelance opportunities</p>
          <h1 className="hero-name">Hi, I'm<br />Mark Rey Nino.<span className="cursor" /></h1>
          <p className="hero-tagline">
            A <strong>4th-year Computer Science student</strong> at Pampanga State University, building full-stack web and mobile apps, training ML models, and turning real problems into <strong>working software</strong>.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">See my work <span aria-hidden="true">↓</span></a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
          <p className="scroll-hint">scroll</p>
        </section>

        <section id="about">
          <p className="section-label">01 - About</p>
          <div className="about-grid">
            <div className="about-body reveal">
              <p>I'm Mark, a CS student based in <strong>San Fernando, Pampanga, Philippines</strong>. I build full-stack web applications, cross-platform mobile apps, and machine learning systems, often all three at once.</p>
              <p>What sets me apart is that I've shipped <strong>real software for real clients</strong> while still in school. From a commercial Android gym management app to a tourism platform built in partnership with the <strong>Department of Tourism</strong>, my projects go beyond coursework.</p>
              <p>Outside of code I volunteer with <strong>DEVCON Kids Pampanga</strong>, teaching robotics and programming to young learners because the best way to solidify what you know is to teach it.</p>
            </div>
            <div className="reveal">
              <div className="photo-placeholder">YOUR PHOTO HERE</div>
            </div>
            <div className="about-facts reveal">
              <div className="fact"><p className="fact-label">Currently</p><p className="fact-value">4th Year, BSCS</p></div>
              <div className="fact"><p className="fact-label">University</p><p className="fact-value">Pampanga State University</p></div>
              <div className="fact"><p className="fact-label">Graduation</p><p className="fact-value">Expected Aug 2027</p></div>
            </div>
          </div>
        </section>

        <section id="skills">
          <p className="section-label">02 - Skills</p>
          <h2 className="section-heading">What I work with.</h2>
          <p className="section-sub">Languages, frameworks, tools, and platforms I'm comfortable shipping with.</p>
          <div className="skills-grid reveal">
            {skillGroups.map((group) => (
              <div className="skill-category" key={group.label}>
                <p className="skill-cat-label">{group.label}</p>
                <div className="skill-tags">
                  {group.skills.map((skill) => <span className={group.soft ? 'tag soft' : 'tag'} key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <p className="section-label">03 - Projects</p>
          <h2 className="section-heading">Things I've built.</h2>
          <p className="section-sub">Client work, research, and personal projects, all shipped or in active development.</p>
          {projects.map((project) => (
            <article className="project-card reveal" key={project.name}>
              <div className="project-hero-img"><span className="project-hero-label">{project.preview}</span></div>
              <div className="project-sub-strip">
                {project.shots.map((shot) => <div className="project-sub-img" key={shot}><span>{shot}</span></div>)}
              </div>
              <div className="project-body">
                <div className="project-top">
                  <div>
                    <p className="project-meta-row">{project.meta}</p>
                    <h3 className="project-name">{project.name}</h3>
                  </div>
                  <span className={`project-status ${project.statusType}`}>{project.status}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className="project-footer">
                  <div className="project-stack">
                    {project.stack.map((tech) => <span className="project-tag" key={tech}>{tech}</span>)}
                  </div>
                  <a href="#contact" className="project-link">Ask about it ↗</a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="experience">
          <p className="section-label">04 - Experience</p>
          <h2 className="section-heading">Where I've been.</h2>
          <p className="section-sub">Volunteer roles, community work, and organizations that shaped how I build and teach.</p>
          <div className="timeline">
            {experiences.map((item) => (
              <div className="timeline-item reveal" key={`${item.date}-${item.role}`}>
                <p className="timeline-date">{item.date}</p>
                <div>
                  <p className="timeline-role">{item.role}</p>
                  <p className="timeline-org">{item.org}</p>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certs">
          <p className="section-label">05 - Certifications</p>
          <h2 className="section-heading">Continuing education.</h2>
          <p className="section-sub">Courses and certificates I've completed outside of formal coursework.</p>
          <div className="cert-list reveal">
            {certifications.map(([issuer, name, date]) => (
              <div className="cert-item" key={name}>
                <p className="cert-issuer">{issuer}</p>
                <p className="cert-name">{name}</p>
                <p className="cert-date">{date}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <p className="section-label">06 - Contact</p>
          <div className="contact-grid">
            <div className="reveal">
              <h2 className="contact-headline">I'm happy to answer your next project. →</h2>
              <p className="contact-text">Whether you need a mobile app, a web platform, an ML-powered backend, or you're offering an internship, reach out. I respond within a day.</p>
            </div>
            <div className="contact-links reveal">
              <ContactRow label="Email" href="mailto:pascualmarkreynino05@gmail.com" value="pascualmarkreynino05@gmail.com" />
              <ContactRow label="Phone" href="tel:+639690550139" value="(+63) 969-055-0139" />
              <ContactRow label="LinkedIn" href="https://www.linkedin.com/in/mark-rey-niño-pascual-9b1252395" value="mark-rey-nino-pascual" />
              <ContactRow label="GitHub" href="https://github.com/mrnp-dev" value="github.com/mrnp-dev" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p className="footer-copy">Mark Rey Nino R. Pascual - 2026</p>
        <ul className="footer-links">
          <li><a href="https://github.com/mrnp-dev" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/mark-rey-niño-pascual-9b1252395" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </footer>
    </>
  )
}

function ContactRow({ label, href, value }: { label: string; href: string; value: string }) {
  const external = href.startsWith('http')

  return (
    <div className="contact-row">
      <span className="contact-row-label">{label}</span>
      <a href={href} className="contact-row-value" target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{value}</a>
    </div>
  )
}

export default App
