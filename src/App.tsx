import React from 'react'
import { AboutSection, HeroSection, Navbar, ServiceSection } from './components'

const App:React.FC = () => {
  return (
    <section>
      <Navbar/>
      <HeroSection />
      <AboutSection/>
      <ServiceSection/>
    </section>
  )
}

export default App