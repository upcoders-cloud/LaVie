import { Link } from 'react-router-dom'
import Button from 'ui/Button.jsx'

export default function Hero() {
  return (
    <section className="relative isolate w-screen max-w-none -ml-[50vw] left-1/2 right-1/2 overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img
          src="/media/radio-photo-4.jpeg"
          alt="Badania obrazowe - plansze z wynikami"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/88 via-slate-900/82 to-primary-900/72" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide backdrop-blur">
          Teleradiologia z Centrum Zdrowia La Vie
        </div>

        <div className="mt-5 space-y-6">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Szybki i bezpieczny dostęp do specjalistów radiologii
          </h1>
          <p className="max-w-3xl text-base text-white/85 sm:text-lg">
            W Centrum Zdrowia La Vie zapewniamy nowoczesną usługę teleradiologii, czyli zdalnego opisu badań obrazowych
            przez doświadczonych lekarzy radiologów. Dzięki bezpiecznym systemom informatycznym placówki medyczne
            otrzymują stały dostęp do profesjonalnych opisów oraz znacząco krótszy czas oczekiwania na wynik.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button as={Link} to="/kontakt" variant="primary" size="md">
              Skontaktuj się
            </Button>
            <Button as={Link} to="/uslugi" variant="ghost" size="md">
              Poznaj usługi
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
