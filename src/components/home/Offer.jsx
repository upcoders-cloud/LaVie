import { StackedCards } from 'components/StackedCards/StackedCards.jsx'

const modalities = [
  {
    name: 'RTG (rentgenowskie)',
    description: 'Szybkie opisy badań przesiewowych i kontrolnych.',
  },
  {
    name: 'TK (tomografia komputerowa)',
    description: 'Diagnostyka urazowa oraz ocena narządów wewnętrznych.',
  },
  {
    name: 'MR (rezonans magnetyczny)',
    description: 'Dokładna analiza tkanek miękkich i struktur neurologicznych.',
  },
  {
    name: 'MMG (mammografia)',
    description: 'Wsparcie badań przesiewowych i diagnostyki piersi.',
  },
]

export default function Offer() {
  return (
    <section className="space-y-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
            Czym są zdalne opisy badań?
          </p>
          <h3 className="text-2xl font-semibold text-text lg:text-3xl">
            Bezpieczny outsourcing opisów badań obrazowych
          </h3>
          <p className="text-base text-muted">
            Przekazujemy badania do doświadczonych radiologów, którzy pracują w ustandaryzowanym środowisku i zapewniają
            spójne opisy. Dzięki temu skracasz czas oczekiwania na wynik i odciążasz własny zespół.
          </p>
          <ul className="space-y-4">
            {modalities.map((item) => (
              <li key={item.name} className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <span className="h-2 w-2 rounded-full bg-primary-600" />
                </span>
                <div>
                  <p className="text-base font-semibold text-text">{item.name}</p>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_60px_-38px_rgba(15,23,42,0.6)]">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/media/radio-photo-6.jpeg"
                alt="System informatyczny do zdalnych opisów badań - stanowisko pracy radiologa"
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="border-t border-border bg-white px-4 py-3 text-sm text-muted">
              System informatyczny do zdalnych opisów badań
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-2xl border border-border bg-white">
              <img
                src="/media/radio-photo-10.jpeg"
                alt="Przegląd obrazów medycznych"
                className="h-28 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-white">
              <img
                src="/media/radio-photo-11.jpeg"
                alt="Analiza danych diagnostycznych"
                className="h-28 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
