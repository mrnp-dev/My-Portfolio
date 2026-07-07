import { SectionHeading } from './SectionHeading'

const facts = [
  ['Currently', '4th Year, BSCS'],
  ['University', 'Pampanga State University'],
  ['Graduation', 'Expected Aug 2027'],
]

export function AboutSection() {
  return (
    <section id="about">
      <SectionHeading label="01 - About" />
      <div className="about-grid">
        <div className="about-body reveal">
          <p>
            I'm Mark, a CS student based in <strong>San Fernando, Pampanga, Philippines</strong>. I build full-stack
            web applications, cross-platform mobile apps, and machine learning systems, often all three at once.
          </p>
          <p>
            What sets me apart is that I've shipped <strong>real software for real clients</strong> while still in school.
            From a commercial Android gym management app to a tourism platform built in partnership with the{' '}
            <strong>Department of Tourism</strong>, my projects go beyond coursework.
          </p>
          <p>
            Outside of code I volunteer with <strong>DEVCON Kids Pampanga</strong>, teaching robotics and programming to
            young learners because the best way to solidify what you know is to teach it.
          </p>
        </div>
        <div className="reveal">
          <div className="photo-placeholder">YOUR PHOTO HERE</div>
        </div>
        <div className="about-facts reveal">
          {facts.map(([label, value]) => (
            <div className="fact" key={label}>
              <p className="fact-label">{label}</p>
              <p className="fact-value">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
