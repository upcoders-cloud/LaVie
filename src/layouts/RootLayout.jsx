import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import NavBar from 'components/NavBar/NavBar.jsx'
import Footer from 'components/Footer/Footer.jsx'
import ScrollToTop from 'react-scroll-to-top'
import { FaArrowUp } from 'react-icons/fa6'

const ScrollToTopStyles = { display: "flex", justifyContent:'center', alignItems: 'center' }

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

export default function RootLayout({ children }) {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.1,
      effects: true,
      smoothTouch: 0.1,
    })

    return () => smoother.kill()
  }, [])

  return (
    <div className="min-h-screen bg-bg text-text">
      <NavBar />

      <div id="smooth-wrapper" ref={wrapperRef} className="h-full overflow-hidden">
        <div id="smooth-content" ref={contentRef} className="will-change-transform">
          <main className="mx-auto w-full max-w-6xl px-4 pb-10 pt-0">
            {children}
          </main>

          <Footer />
        </div>
      </div>

      <ScrollToTop smooth component={<FaArrowUp />} style={ScrollToTopStyles}/>
    </div>
  )
}
