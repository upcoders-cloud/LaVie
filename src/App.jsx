import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Aria from './pages/Aria.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uslugi" element={<Services />} />
        <Route path="/aria" element={<Aria />} />
        <Route path="/praca" element={<Careers />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </RootLayout>
  )
}

export default App
