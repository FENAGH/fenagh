import React from 'react'
// Components
import Hero from './hero'
import About from './about'
import Sectors from './sectors'
import Benefits from './benefits'
import Reviews from './reviews'
import News from './news'

const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Reviews />
      <News />
      <Sectors />
    </React.Fragment> 
  )
}

export default HomePage
