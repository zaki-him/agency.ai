import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import TrustedBy from './sections/TrustedBy'
import Services from './sections/Services'
import OurWork from './sections/OurWork'
import Team from './sections/Team'
import Contact from './sections/Contact'

const App: React.FC = () => {
  return (
    <div className='relative flex flex-col items-center '>
      <Header />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Team />
      <Contact />
    </div>
  )
}

export default App