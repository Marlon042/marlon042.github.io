import Link from 'next/link'

interface Breadcrumb {
  label: string
  href: string
}

export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="my-4 inline-block">
      <ol className={'text-primary-content flex flex-wrap'}>
        {breadcrumbs.map(({ label, href }, idx) => (
          <li key={href}>
            <Link
              href={href}
              className={`${idx === breadcrumbs.length - 1 ? 'text-secondary-content cursor-text' : 'hover:text-neutral'} transition-colors duration-300`}>
              {label}
            </Link>
            {idx < breadcrumbs.length - 1 ? <span className="mx-3 inline-block">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
