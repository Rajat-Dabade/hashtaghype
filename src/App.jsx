import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import NavbarDark from './components/navbar/navbar-dark'
import Landing from './components/landing/landing'
import ContactUs from './components/contact-us/contact-us'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  const [navbar, setNavbar] = useState(1)

  return (
    <>
      <BrowserRouter>
        {navbar === 1?
         <Navbar />: <NavbarDark />}
        <Routes>
          <Route path="/" element={<Landing setNavbar={setNavbar} />} />
          <Route path="/contact" element={<ContactUs setNavbar={setNavbar} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
