import { useState, useEffect, useRef } from 'react'
import type { Project } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

type ProjectsSectionProps = {
  projects: Project[]
}

function getTechIconClass(tech: string): string {
  const t = tech.toLowerCase().trim()
  if (t === 'flutter') return 'devicon-flutter-plain'
  if (t === 'supabase') return 'devicon-supabase-plain'
  if (t === 'postgresql') return 'devicon-postgresql-plain'
  if (t === 'python') return 'devicon-python-plain'
  if (t === 'fastapi') return 'devicon-fastapi-plain'
  if (t === 'firebase') return 'devicon-firebase-plain'
  if (t === 'sqlite') return 'devicon-sqlite-plain'
  if (t === 'git') return 'devicon-git-plain'
  if (t === 'html') return 'devicon-html5-plain'
  if (t === 'css') return 'devicon-css3-plain'
  if (t === 'javascript') return 'devicon-javascript-plain'
  if (t === 'tailwind css') return 'devicon-tailwindcss-original'
  if (t === 'php') return 'devicon-php-plain'
  if (t === 'mysql') return 'devicon-mysql-plain'
  if (t === 'docker') return 'devicon-docker-plain'
  if (t.includes('b4a') || t.includes('android')) return 'devicon-android-plain'
  return ''
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects">
      <SectionHeading
        label="03 - Projects"
        title="Things I've built."
        subtitle="Client work, research, and personal projects, all shipped or in active development."
      />
      <div className="projects-grid reveal">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const majorTech = project.stack.slice(0, 4)

  return (
    <div className="project-card-new" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()}>
      <div className="project-card-header">
        <span className="project-card-duration">{project.duration}</span>
        <span className={`project-card-status ${project.status}`}>{project.statusLabel}</span>
      </div>
      <div>
        <h3 className="project-card-title">{project.name}</h3>
        <p className="project-card-meta">{project.meta}</p>
        <p className="project-card-desc">{project.description}</p>
      </div>
      <div className="project-card-footer">
        <div className="project-card-icons">
          {majorTech.map((tech) => {
            const iconClass = getTechIconClass(tech)
            return iconClass ? (
              <i key={tech} className={`${iconClass} colored`} title={tech} />
            ) : (
              <span key={tech} style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--muted)' }}>{tech}</span>
            )
          })}
        </div>
        <span className="project-card-arrow" aria-hidden="true">→</span>
      </div>
    </div>
  )
}

import type { ProjectMedia } from '../data/portfolio'

type PlaceholderSlide = {
  title: string
  subtitle: string
}

function getPlaceholderSlides(projectName: string): PlaceholderSlide[] {
  const name = projectName.toLowerCase()
  if (name.includes('sant:io')) {
    return [
      { title: 'Swipe Discovery Screen', subtitle: 'Interactive swiping interface for local tourist spots' },
      { title: 'Central Luzon Directory', subtitle: 'Browsable and filterable tourism listings' },
      { title: 'Itinerary Generator', subtitle: 'AI-assisted routing and planning tool' },
    ]
  }
  if (name.includes('carlos fitness')) {
    return [
      { title: 'Staff Admin Panel', subtitle: 'Gym membership management & CRUD interface' },
      { title: 'Member Mobile Companion', subtitle: 'Personal workout profile and digital gym ID' },
      { title: 'Offline-First Sync Status', subtitle: 'Local SQLite data syncing seamlessly with Firebase' },
    ]
  }
  if (name.includes('hirenorian')) {
    return [
      { title: 'Student Matching Dashboard', subtitle: 'OJT recommendation feed and search boards' },
      { title: 'University Oversight Portal', subtitle: 'Internship progress statistics and analytics' },
      { title: 'Employer Job Creator', subtitle: 'Company job description builder & application manager' },
    ]
  }
  return [
    { title: 'App Overview', subtitle: 'Core user interface and navigation' },
    { title: 'Key Features', subtitle: 'Primary functionality and workflow' },
    { title: 'Data & Storage', subtitle: 'Offline-first database and local storage' },
  ]
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)
  const slideCount = project.disableCarousel
    ? 0
    : (project.media ? project.media.length : getPlaceholderSlides(project.name).length)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    if (modalRef.current) modalRef.current.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1))
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, slideCount])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  const prev = () => setCurrentSlide((p) => (p === 0 ? slideCount - 1 : p - 1))
  const next = () => setCurrentSlide((p) => (p === slideCount - 1 ? 0 : p + 1))

  return (
    <div className="project-modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div
        className="project-modal-content"
        ref={modalRef}
        tabIndex={-1}
        style={{ outline: 'none' }}
      >
        <button className="project-modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {/* Left Side: Carousel or locked panel */}
        <div className="project-modal-left">
          {project.disableCarousel ? (
            <div className="project-carousel-locked">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px', marginBottom: '16px', opacity: 0.25 }}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <p className="project-carousel-locked-label">Screenshots available on completion</p>
              <p className="project-carousel-locked-sub">This project is currently in active development.</p>
            </div>
          ) : (
            <>
              <div className="project-carousel">
                <button className="project-carousel-nav prev" onClick={prev} aria-label="Previous slide">&#8592;</button>

                <div className="project-carousel-slides">
                  {project.media
                    ? project.media.map((item, index) => (
                        <MediaSlide key={index} item={item} isActive={index === currentSlide} />
                      ))
                    : getPlaceholderSlides(project.name).map((slide, index) => (
                        <div key={index} className={`project-carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                          <div className="project-carousel-placeholder">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ width: '48px', height: '48px', marginBottom: '16px', opacity: 0.2 }}>
                              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                              <line x1="7" y1="2" x2="7" y2="22" />
                              <line x1="17" y1="2" x2="17" y2="22" />
                              <line x1="2" y1="12" x2="22" y2="12" />
                            </svg>
                            <p className="project-carousel-placeholder-label">Coming soon</p>
                          </div>
                          <h4 style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: '15px', color: 'var(--ink)', marginTop: '20px', marginBottom: '4px' }}>
                            {slide.title}
                          </h4>
                          <p style={{ fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--muted)' }}>
                            {slide.subtitle}
                          </p>
                        </div>
                      ))}
                </div>

                <button className="project-carousel-nav next" onClick={next} aria-label="Next slide">&#8594;</button>
              </div>

              <div className="project-carousel-dots">
                {Array.from({ length: slideCount }).map((_, index) => (
                  <button
                    key={index}
                    className={`project-carousel-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Side: Details */}
        <div className="project-modal-right">
          <div className="project-modal-header">
            <div className="project-modal-meta-strip">
              <span className="project-modal-duration">{project.duration}</span>
              <span className={`project-modal-status ${project.status}`}>{project.statusLabel}</span>
            </div>
            <h2 className="project-modal-title">{project.name}</h2>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {project.meta}
            </p>
          </div>

          <div className="project-modal-desc">{project.description}</div>

          <div className="project-modal-section-title">Key Accomplishments</div>
          <ul className="project-modal-highlights">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>

          <div className="project-modal-section-title">Complete Stack</div>
          <div className="project-modal-tags">
            {project.stack.map((tech) => (
              <span key={tech} className="project-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MediaSlide({ item, isActive }: { item: ProjectMedia; isActive: boolean }) {
  return (
    <div className={`project-carousel-slide ${isActive ? 'active' : ''}`}>
      <div className="project-carousel-media">
        {item.type === 'video' ? (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            controls
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#111' }}
          />
        ) : (
          <img
            src={item.src}
            alt={item.caption}
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#f0f0ed' }}
          />
        )}
      </div>
      <p className="project-carousel-caption">{item.caption}</p>
    </div>
  )
}

