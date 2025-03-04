import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image" 
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain } from "../components/globals"
import Hero from "../components/hero"
//import ContentfulListing from "../components/contentfulListing"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "proyectos_page.webp" }) {
      
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    Imagen1: file(relativePath: {eq: "AFICHEREFORMADO.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    }
  `)
  return(
    <Layout>
      <SEO title="Proyectos" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom"
        headline="Noticias y Eventos"
      />
      <Constrain>
      <div className="content-media-item">
                <Img fluid={data.Imagen1.childImageSharp.fluid}/>
              </div>
      </Constrain>
     
    </Layout>
  )
}

export default ProjectsPage