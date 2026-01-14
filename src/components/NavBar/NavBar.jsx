import { Link, NavLink } from 'react-router-dom'
import { navItems } from './navItems.js'

export default function NavBar() {
  return (
    <header className="border-b border-border/80 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600 text-lg font-semibold text-white shadow-[0_10px_24px_-14px_rgba(2,132,199,0.9)]">
            LV
          </span>
          <div className="leading-tight">
            <div className="text-base font-semibold text-text">Centrum Zdrowia La Vie</div>
            <div className="text-xs font-medium uppercase tracking-wide text-muted">
              Radiologia i teleradiologia
            </div>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <nav className="flex flex-wrap gap-2 text-sm font-medium">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  [
                    'rounded-full border border-transparent px-4 py-2 text-sm font-semibold transition',
                    isActive
                      ? 'bg-primary-600 text-white shadow-[0_12px_28px_-18px_rgba(2,132,199,0.9)]'
                      : 'text-muted hover:border-primary-100 hover:bg-primary-50 hover:text-text',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
