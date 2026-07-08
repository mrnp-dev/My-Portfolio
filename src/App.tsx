import './App.css'
import { AboutSection } from './components/AboutSection'
import { CertificationsSection } from './components/CertificationsSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { Navigation } from './components/Navigation'
import { ProjectsSection } from './components/ProjectsSection'
import { SiteFooter } from './components/SiteFooter'
import { SkillsSection } from './components/SkillsSection'
import {
  certifications,
  contactLinks,
  footerLinks,
  navItems,
  projects,
  skillGroups,
} from './data/portfolio'
import { useActiveSection } from './hooks/useActiveSection'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { useScrollThreshold } from './hooks/useScrollThreshold'

function App() {
  const activeSection = useActiveSection()
  const isNavScrolled = useScrollThreshold()

  useRevealOnScroll()

  return (
    <>
      <Navigation activeSection={activeSection} isScrolled={isNavScrolled} items={navItems} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection skillGroups={skillGroups} />
        <ProjectsSection projects={projects} />
        <CertificationsSection certifications={certifications} />
        <ContactSection links={contactLinks} />
      </main>
      <SiteFooter links={footerLinks} />
    </>
  )
}

export default App
