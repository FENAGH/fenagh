import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Hero from '../components/hero'

const MessagePage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "PresidenteFerreira.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
 return(
    <Layout>
      <SEO title="Mensaje del Presidente" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignLeft no-overlay"
        headline="Mensaje del Presidente"
        section="nuestra gente"
      />
    </Layout>
  )
}

export default MessagePage