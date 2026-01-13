import NavBar from '../components/NavBar/NavBar.jsx'

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <NavBar />

      <main className="mx-auto w-full max-w-6xl px-4 py-10">
        {children}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-muted">
          © {new Date().getFullYear()} LaVie — miejsce na stopkę i linki informacyjne.
        </div>
      </footer>
    </div>
  )
}
