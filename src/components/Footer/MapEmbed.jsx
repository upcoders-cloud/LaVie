export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.8)]">
      <div className="aspect-[4/3]">
        <iframe
          title="Mapa dojazdu do Centrum Zdrowia La Vie"
          src="https://maps.google.com/maps?q=ul.%20Paczkowska%209a%2060-171%20Pozna%C5%84&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
          allowFullScreen
        />
      </div>
      <div className="px-4 py-3 text-xs text-slate-300">
        <a
          href="https://maps.google.com/?q=ul.%20Paczkowska%209a%2060-171%20Pozna%C5%84"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-white/90 transition hover:text-white"
        >
          Otwórz w mapach
        </a>
      </div>
    </div>
  )
}
