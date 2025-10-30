import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { GetStartred } from './components/GetStartred'
import { Services } from './components/Services'
import { Documentation } from './components/Documentation'
import { Statistics } from './components/Statistics'
import { WorkingSpace } from './components/WorkingSpace'
import { Customers } from './components/Customers'
import Carousel from './components/Carousel'
import FAQ from './components/FAQ'
import { Reviews } from './components/Reviews'
import { StartNow } from './components/StartNow'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <GetStartred/>
      <Services/>
      <Documentation/>
      <Statistics/>
      <WorkingSpace/>
      <Customers/>
      <Carousel/>
      <FAQ/>
      <Reviews/>
      <StartNow/>
      <Footer/>
    </>
  )
}

export default App
