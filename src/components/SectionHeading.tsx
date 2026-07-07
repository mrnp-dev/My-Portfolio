type SectionHeadingProps = {
  label: string
  title?: string
  subtitle?: string
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <>
      <p className="section-label">{label}</p>
      {title && <h2 className="section-heading">{title}</h2>}
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </>
  )
}
