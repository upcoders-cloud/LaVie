import NavBar from '../components/NavBar/NavBar.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <NavBar />

      <main className="mx-auto w-full max-w-6xl px-4 py-10">
        {children}
      </main>

      <Footer />
    </div>
  )
}
