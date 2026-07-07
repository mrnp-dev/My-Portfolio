export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <p className="hero-eyebrow">Open to internships & freelance opportunities</p>
      <h1 className="hero-name">
        Hi, I'm
        <br />
        Mark Rey Nino.<span className="cursor" />
      </h1>
      <p className="hero-tagline">
        A <strong>4th-year Computer Science student</strong> at Pampanga State University, building full-stack web
        and mobile apps, training ML models, and turning real problems into <strong>working software</strong>.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn-primary">
          See my work <span aria-hidden="true">↓</span>
        </a>
        <a href="#contact" className="btn-ghost">
          Get in touch
        </a>
      </div>
      <p className="scroll-hint">scroll</p>
    </section>
  )
}
