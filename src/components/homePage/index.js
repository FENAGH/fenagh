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
      tablet: file(relativePath: { eq: "home-md.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktop: file(
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
  const sources = [
    {
      ...data.tablet.childImageSharp.fluid,
      media: "(min-width: 521px) and (max-width: 1024px)",
    },
    {
      ...data.desktop.childImageSharp.fluid,
      media: `(min-width: 1025px)`,
    },
  ]
  return (
    <>
      <Hero
        sources={sources}
        className="hero-default"
        headline="Cultivando el futuro de Honduras"
      />
      <Border />
      <About />
      <SectionWithImage />
      <Border />
      <Objectives />
      <Sectors />
      <News />
    </> 
  )
}

export default HomePage
