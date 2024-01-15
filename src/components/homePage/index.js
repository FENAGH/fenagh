import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
// Components
import Hero from '../hero'
import About from './about'
import Sectors from './sectors'
import News from './news'
import Border from '../border'
import Objectives from './objectives'
import SectionWithImage from './sectionWithImage'

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(
        relativePath: { eq: "home.webp" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Hero 
         sources={data.bgImage.childImageSharp.fluid}
        className="hero-default"
        headline="Cultivando el futuro de Honduras"
      />
      <About />
      <SectionWithImage />
      <Border />
      <Objectives />
      <Sectors />
    </> 
  )
}

export default HomePage
