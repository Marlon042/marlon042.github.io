interface SectionHeadingTypes {
  title: string
  subtitle?: string
  className?: string
}

const SectionHeading: React.FC<SectionHeadingTypes> = ({ title, subtitle, className }) => {
  return (
    <div className={`lg:max-w-[50dvw] ${className}`}>
      <h2 className="text-primary-content text-2xl font-bold tracking-wider">{title}</h2>
      {subtitle && <p className="text-tertiary-content mt-5 text-lg text-pretty">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
