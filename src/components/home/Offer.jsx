import { StackedCards } from 'components/StackedCards/StackedCards.jsx'

const stackedStudies = [
  {
    title: 'RTG (rentgen)',
    description:
      'Podstawowe badanie obrazowe kości i klatki piersiowej, wykonywane szybko i bezinwazyjnie. ' +
      'Pozwala wykryć urazy, zmiany zapalne oraz kontrolować przebieg leczenia.',
    image: '/media/radio-photo-10.jpeg',
  },
  {
    title: 'TK (tomografia komputerowa)',
    description:
      'Dokładne skanowanie przekrojowe narządów wewnętrznych i struktur kostnych. ' +
      'Stosowane w diagnostyce urazowej, onkologicznej i naczyniowej.',
    image: '/media/radio-photo-6.jpeg',
  },
  {
    title: 'MR (rezonans magnetyczny)',
    description:
      'Najlepsze badanie tkanek miękkich, stawów i układu nerwowego. ' +
      'Zapewnia wysoką rozdzielczość bez użycia promieniowania jonizującego.',
    image: '/media/radio-photo-11.jpeg',
  },
  {
    title: 'MMG (mammografia)',
    description:
      'Badanie przesiewowe piersi wykrywające zmiany na wczesnym etapie. ' +
      'Kluczowe w profilaktyce i szybkiej diagnostyce.',
    image: '/media/radio-photo-11.jpg',
  },
]

export default function Offer() {
  return (
    <section className="space-y-12">
      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-700">
          Opisy badań obrazowych
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-text sm:text-3xl">
          Bezpieczny outsourcing opisów badań obrazowych
        </h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Spójny standard raportowania i szybkie opisy dla Twojej placówki.
        </p>
      </div>
      <StackedCards items={stackedStudies} />
    </section>
  )
}
