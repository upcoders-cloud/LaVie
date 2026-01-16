import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from 'ui/Button.jsx'

export default function Hero() {
  const imageRef = useRef(null)
  const rafRef = useRef(null)
  const targetRef = useRef(0)
  const currentRef = useRef(0)
  const reduceMotionRef = useRef(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotion = (event) => {
      reduceMotionRef.current = event.matches
    }
    reduceMotionRef.current = media.matches
    if (media.addEventListener) {
      media.addEventListener('change', handleMotion)
    } else {
      media.addListener(handleMotion)
    }

    const animate = () => {
      const target = targetRef.current
      const current = currentRef.current
      const next = current + (target - current) * 0.12
      currentRef.current = next

      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(0, ${next}px, 0) scale(1.06)`
      }

      if (Math.abs(target - next) > 0.1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        rafRef.current = null
      }
    }

    const handleScroll = () => {
      if (reduceMotionRef.current) return
      targetRef.current = window.scrollY * 0.18
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (media.removeEventListener) {
        media.removeEventListener('change', handleMotion)
      } else {
        media.removeListener(handleMotion)
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [])

  return (
    <section className="relative isolate min-h-[70vh] sm:min-h-[72vh] lg:min-h-[88vh] w-screen max-w-none -ml-[50vw] left-1/2 right-1/2 overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img
          src="/media/radio-photo-4.jpeg"
          alt="Badania obrazowe - plansze z wynikami"
          ref={imageRef}
          className="h-full w-full object-cover will-change-transform"
          style={{ transform: 'translate3d(0, 0, 0) scale(1.06)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/88 via-slate-900/82 to-primary-900/72" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-44">
        <div className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide backdrop-blur md:inline-flex">
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
