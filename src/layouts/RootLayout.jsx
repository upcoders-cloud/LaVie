import NavBar from 'components/NavBar/NavBar.jsx'
import Footer from 'components/Footer/Footer.jsx'
import ScrollToTop from 'react-scroll-to-top'
import { FaArrowUp } from 'react-icons/fa6'

const ScrollToTopStyles = { display: "flex", justifyContent:'center', alignItems: 'center' }

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <NavBar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-10 pt-0">
        {children}
      </main>

      <Footer />
      <ScrollToTop smooth component={<FaArrowUp />} style={ScrollToTopStyles}/>
    </div>
  )
}

