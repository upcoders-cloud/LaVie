import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Strona główna', end: true },
  { to: '/uslugi', label: 'Usługi' },
  { to: '/aria', label: 'ARIA' },
  { to: '/praca', label: 'Praca dla radiologów' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function NavBar() {
  return (
    <header className="border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-lg font-semibold tracking-tight text-text">LaVie</div>
        <nav className="flex gap-2 text-sm font-medium text-muted">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  'rounded-md px-3 py-2 transition-colors',
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-muted hover:text-primary-700',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
