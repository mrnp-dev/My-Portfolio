export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <p className="hero-eyebrow hero-enter hero-enter-1">Open to internships & freelance opportunities</p>
      <h1 className="hero-name hero-enter hero-enter-2">
        Hi, I'm
        <br />
        Mark Rey Nino.<span className="cursor" />
      </h1>
      <p className="hero-tagline hero-enter hero-enter-3">
        A <strong>4th-year Computer Science student</strong> at Pampanga State University, building full-stack web
        and mobile apps, training ML models, and turning real problems into <strong>working software</strong>.
      </p>
      <div className="hero-cta hero-enter hero-enter-4">
        <a href="#projects" className="btn-primary">
          See my work <span aria-hidden="true" className="btn-arrow">↓</span>
        </a>
        <a href="#contact" className="btn-ghost">
          Get in touch
        </a>
      </div>
      <p className="scroll-hint hero-enter hero-enter-4">scroll</p>
    </section>
  )
}
