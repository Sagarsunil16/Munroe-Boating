import React from 'react'
import Home from './pages/Home'
import Hero from './components/Hero'
import Services from './components/Services'
import Booking from './components/Booking'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import About from './components/About'
const App = () => {
  return (
    <div>
    <Home/>
    <Hero/>
    <About/>
    <Services/>
    <Packages/>
    <Booking/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default App
