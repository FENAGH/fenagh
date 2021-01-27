import React from 'react'
// Components
import Hero from './hero'
import About from './about'
import Sectors from './sectors'
import Reviews from './reviews'
import News from './news'
import Border from '../border'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Border />
      <About />
      <Border />
      <News />
      <Reviews />
      <Sectors />
    </> 
  )
}

export default HomePage
