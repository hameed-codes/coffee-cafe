import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import MobileStores from './components/MobileStores'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <MobileStores/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
