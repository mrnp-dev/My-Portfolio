type SectionHeadingProps = {
  label: string
  title?: string
  subtitle?: string
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <>
      <p className="section-label reveal reveal-delay-1">{label}</p>
      {title && <h2 className="section-heading reveal reveal-delay-2">{title}</h2>}
      {subtitle && <p className="section-sub reveal reveal-delay-3">{subtitle}</p>}
    </>
  )
}
