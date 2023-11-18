import React from 'react'
import { AboutSection, HeroSection, Navbar } from './components'

const App:React.FC = () => {
  return (
    <section>
      <Navbar/>
      <HeroSection />
      <AboutSection/>
    </section>
  )
}

export default App