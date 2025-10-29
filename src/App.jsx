import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { GetStartred } from './components/GetStartred'
import { Services } from './components/Services'
import { Documentation } from './components/Documentation'
import { Statistics } from './components/Statistics'

function App() {
  return (
    <>
      <Navbar/>
      <GetStartred/>
      <Services/>
      <Documentation/>
      <Statistics/>
    </>
  )
}

export default App
