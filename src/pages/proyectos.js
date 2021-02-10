import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Hero from "../components/hero"
import Border from "../components/border"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "fields.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
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
        headline="Proyectos"
      />
      <Border />
      <Constrain>
        <Content>
          <h2>Programa “FENAGH Reforesta</h2>
          <p>Gracias a un convenio firmado entre la FENAGH y el Instituto de Conservación Forestal en junio del 2019. A la fecha se han reforestado 1365 manzanas de distintos productores a nivel nacional. Se han instalado 2 viveros en las asociaciones de la FENAGH (AGATC, AGASE).</p>
          <h2>Programas de Capacitación a traves de Webinar</h2>
          <p>Desarrollo de WEBINARS con diferentes instituciones en temas técnicos a través de plataformas virtuales. Se han capacitado más de dos mil productores a nivel nacional.</p>
          <h2>Estrategias para la Consolidación de las MIPYMES</h2>
          <p>Se capacitaron a más de 30 agro empresas en los siguientes temas: Promoción Comercial, Empoderamiento de Mujeres, Cultura de Mejora y Aprendizaje constante, Desarrollo de Nuevos Productos y/o Servicios - Calidad y responsabilidad social y mejora ambiental.</p>
          <h2>Convenios</h2>
          <p>Convenio de gestión de becas internacionales para maestrías con el apoyo del Programa Presidencial Programa Presidencial de Becas 2020.</p>
          <p>Convenio de Becas a nivel técnico agropecuario en Colombia, con el apoyo de FUNDAPANACA y Programa Presidencial de Becas 2020</p>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default ProjectsPage