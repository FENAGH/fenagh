import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Hero from "../components/hero"


const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "proyectos_page.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fenaghproductores1: file(relativePath: {eq: "productores/registro_de_ productores.jpg"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      } 
    }
  `)
  return(
    <Layout>
      <SEO title="Registro de Productores" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom"
        headline="Registro de Productores"
      />
      <Constrain>
        <Content>
          <h2>Lineamientos para Inscribirse</h2>
          <p>Las solicitudes para el registro de productores son atendidas por: <br></br>  
          Bessy Gómez<br></br>
          INFOAGRO<br></br>
          correo: productores_isv@infoagro.hn </p> 
          
         
          <div className="content-media content-media--fullWidth content-media--double">
            <div className="content-media-items">
              <div className="content-media-item">
                <Img fluid={data.fenaghproductores1.childImageSharp.fluid} alt="FENAGH productores"/>
                
              </div>
            
            </div>
            
          </div>
          
          
         
        </Content>
      </Constrain>
    </Layout>
  )
}

export default ProjectsPage