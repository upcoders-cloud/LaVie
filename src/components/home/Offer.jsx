const modalities = [
  'RTG (rentgenowskich)',
  'TK (tomografii komputerowej)',
  'MR (rezonansu magnetycznego)',
  'MMG (mammografii)',
]

export default function Offer() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Nasza oferta</p>
          <h2 className="text-2xl font-semibold text-text lg:text-3xl">
            Zapewniamy outsourcing opisów badań:
          </h2>
          <ul className="space-y-3">
            {modalities.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                <span className="text-base text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_60px_-38px_rgba(15,23,42,0.6)]">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/media/radio-photo-6.jpeg"
              alt="System informatyczny do teleradiologii - stanowisko pracy radiologa"
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
        <p className="text-sm text-muted">System informatyczny do teleradiologii</p>
      </div>
    </section>
  )
}
