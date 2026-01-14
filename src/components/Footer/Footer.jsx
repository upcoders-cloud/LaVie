import { Link } from 'react-router-dom'
import { navItems } from 'components/NavBar/navItems.js'
import MapEmbed from './MapEmbed.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/40 bg-slate-950 text-slate-200">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_1fr]">
          <div className="space-y-4">
            <div className="text-lg font-semibold text-white">Centrum Zdrowia La Vie</div>
            <p className="text-sm text-slate-300">
              Profesjonalna teleradiologia i wsparcie opisów badań obrazowych dla placówek medycznych.
            </p>
            <div className="space-y-1 text-sm text-slate-300">
              <a
                href="tel:662668669"
                className="block font-semibold text-white/90 transition hover:text-white"
              >
                tel. 662 668 669
              </a>
              <a
                href="https://www.klinikalavie.pl"
                target="_blank"
                rel="noreferrer"
                className="block font-semibold text-white/90 transition hover:text-white"
              >
                www.klinikalavie.pl
              </a>
              <div>ul. Paczkowska 9a</div>
              <div>60-171 Poznań</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Nawigacja
            </div>
            <div className="grid gap-2 text-sm">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-medium text-slate-300 transition hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Mapa dojazdu
            </div>
            <MapEmbed />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Centrum Zdrowia La Vie.</span>
          <span>Radiologia i teleradiologia.</span>
        </div>
      </div>
    </footer>
  )
}
