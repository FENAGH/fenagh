import React from 'react'
// Components
import Hero from './hero'
import About from './about'
import Sectors from './sectors'
import Benefits from './benefits'
import Reviews from './Reviews'

const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Reviews />
      <Sectors />
      <Benefits />
    </React.Fragment>
  )
}

export default HomePage
