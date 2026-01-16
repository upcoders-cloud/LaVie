import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from './navItems.js'

export default function NavBar() {
  // navState controls which UI is visible on large screens: full header, pill only, or hidden.
  const [navState, setNavState] = useState('full')
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const allowAutoHide = useRef(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const handleMatch = () => {
      // Auto-hide behavior is only enabled on lg+.
      allowAutoHide.current = media.matches
      if (!media.matches) {
        setNavState('full')
      }
    }

    handleMatch()
    lastScrollY.current = window.scrollY

    const onScroll = () => {
      if (!allowAutoHide.current) return
      if (ticking.current) return

      // Throttle scroll handling to animation frames to keep it smooth.
      ticking.current = true
      requestAnimationFrame(() => {
        const current = window.scrollY
        const delta = current - lastScrollY.current

        setNavState((prev) => {
          // At the very top show the full header; otherwise toggle based on scroll direction.
          if (current < 40) return 'full'
          if (delta > 3) return 'hidden'
          if (delta < -3) return 'pill'
          return prev
        })

        lastScrollY.current = current
        ticking.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    if (media.addEventListener) {
      media.addEventListener('change', handleMatch)
    } else {
      media.addListener(handleMatch)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (media.removeEventListener) {
        media.removeEventListener('change', handleMatch)
      } else {
        media.removeListener(handleMatch)
      }
    }
  }, [])

  return (
    <>
      {/* Full header: visible on top; hides on scroll for lg+ */}
      <header
        className={[
          'fixed left-0 right-0 top-0 z-30 backdrop-blur',
          'lg:transform-gpu lg:transition-transform lg:duration-500 lg:ease-[cubic-bezier(0.22,1,0.36,1)] lg:will-change-transform',
          navState === 'full' ? 'lg:translate-y-0' : 'lg:-translate-y-full lg:pointer-events-none',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:relative lg:py-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-primary-600 shadow-[0_10px_24px_-14px_rgba(30,78,216,0.9)]" />
          <div className="text-lg font-semibold text-white">LaVie Clinic</div>
        </Link>

        <button
          type="button"
          aria-label="Otwórz menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
        >
          <span className="relative h-4 w-5">
            <span className="absolute left-0 top-0 h-0.5 w-full rounded-full bg-current" />
            <span className="absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current" />
            <span className="absolute left-0 top-3 h-0.5 w-full rounded-full bg-current" />
          </span>
        </button>

        {/* Inline nav: md to lg, sits next to logo */}
        <nav
          className={[
            'hidden md:flex md:flex-nowrap md:items-center md:gap-1 md:rounded-full md:border md:font-semibold md:backdrop-blur',
            'md:ml-auto md:px-2 md:py-1.5 md:text-xs',
            'lg:hidden',
            'border-white/10 bg-slate-900/70 text-white',
          ].join(' ')}
        >
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  'whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition lg:px-4 lg:py-2 lg:text-sm',
                  isActive
                    ? 'bg-primary-600 text-white shadow-[0_12px_28px_-18px_rgba(30,78,216,0.9)]'
                    : 'text-white/80 hover:bg-white/10 hover:text-white',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        </div>
      </header>

      {/* Floating pill: appears on lg+ when scrolling up (navState = pill) */}
      <nav
        className={[
          'fixed left-1/2 top-4 z-40 hidden -translate-x-1/2 rounded-full border border-white/10 bg-slate-900/70 px-2 py-2 text-sm font-semibold text-white backdrop-blur lg:flex lg:flex-nowrap lg:items-center lg:gap-1',
          'transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform',
          navState === 'hidden' ? '-translate-y-20 pointer-events-none' : 'translate-y-0',
        ].join(' ')}
      >
        {navItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              [
                'whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition',
                isActive
                  ? 'bg-primary-600 text-white shadow-[0_12px_28px_-18px_rgba(30,78,216,0.9)]'
                  : 'text-white/80 hover:bg-white/10 hover:text-white',
              ].join(' ')
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  )
}
