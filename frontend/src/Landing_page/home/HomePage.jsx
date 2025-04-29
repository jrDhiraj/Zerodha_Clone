import React from 'react'
import Navbar from '../Navbar.jsx'
import Openaccount from '../Openaccount.jsx'
import Footer from '../Footer.jsx'
import Pricing from './Pricing.jsx'
import Awards from './Awards.jsx'
import Stats from './Stats.jsx'
import Education from './Education.jsx'
import Hero from './Hero.jsx'

function HomePage() {
  return (
   <>

   <Hero />
   <Awards />
   <Stats /> 
   <Pricing /> 
   <Education />
   <Openaccount />
  
   </>
  )
}

export default HomePage