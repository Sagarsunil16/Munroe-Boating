import React from 'react'
import Home from './pages/Home'
import Hero from './components/Hero'
import Services from './components/Services'
import Booking from './components/Booking'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
const App = () => {
  return (
    <div>
    <Home/>
    <Hero/>
    <Services/>
    <Packages/>
    <Booking/>
   
    <Testimonials/>
    </div>
  )
}

export default App
