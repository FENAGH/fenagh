import React from 'react'
// Components
import { Container } from '../globals'
import { Hero } from './hero'
import { HeroCanvas } from './heroCanvas'

const HomePage = () => {
  return (
    <Container fluid>
      <Hero />
      <HeroCanvas />
    </Container>
  )
}

export default HomePage
