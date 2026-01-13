export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-muted">
        © {new Date().getFullYear()} LaVie — miejsce na stopkę i linki informacyjne.
      </div>
    </footer>
  )
}
