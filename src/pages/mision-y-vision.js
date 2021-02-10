import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Hero from "../components/hero"
import Border from "../components/border"

const MisionVisionPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "mision-vision.webp"}){
        childImageSharp {
          fluid(maxWidth: 1822) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Misión & Visión" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-default hero-alignBottom"
        headline="Misión y Visión"
        section="Acerca de FENAGH"
      />
      <Border />
      <Constrain>
        <Content>
          <div className="content-fact">
            <h1>MISIÓN</h1>
            <p>Dinamizar el sector agropecuario a través de la representación, gestión y promoción de los intereses generales del gremio, de sus organizaciones miembros y de los productores nacionales para que sean más competitivos.</p>
          </div>
          <div className="content-fact">
            <h1>VISIÓN</h1>
            <p>Ser la institución líder e integradora que propicie las condiciones para el desarrollo de un sector agropecuario fuerte, competitivo y exitoso.</p>
          </div>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default MisionVisionPage
