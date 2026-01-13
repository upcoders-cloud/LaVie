const text =
  'W Centrum Zdrowia La Vie zapewniamy nowoczesną usługę teleradiologii, czyli zdalnego opisu badań obrazowych przez doświadczonych lekarzy radiologów. Dzięki bezpiecznym systemom informatycznym placówki medyczne otrzymują stały dostęp do profesjonalnych opisów oraz znacząco krótszy czas oczekiwania na wynik.'

const modalities = ['RTG (rentgen)', 'TK (tomografia komputerowa)', 'MR (rezonans magnetyczny)', 'MMG (mammografia)']

export default function Offer() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Nasza oferta</p>
        <h2 className="text-2xl font-semibold text-text">Teleradiologia z Centrum Zdrowia La Vie</h2>
        <p className="text-base text-muted">{text}</p>
        <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_14px_45px_-35px_rgba(15,23,42,0.45)]">
          <h3 className="text-lg font-semibold text-text">Zapewniamy outsourcing opisów badań:</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {modalities.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary-50 text-[10px] font-bold text-primary-700 ring-1 ring-primary-100">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-primary-50/50 to-transparent blur-3xl" />
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_60px_-38px_rgba(15,23,42,0.6)]">
          <img
            src="/media/radio-photo-6.jpeg"
            alt="Zestawienie badań RTG, TK, MR i MMG"
            className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
