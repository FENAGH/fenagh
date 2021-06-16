import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Hero from "../components/hero"

const ConveniosPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "proyectos_page.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fundapanaca: file(relativePath: {eq: "convenios/fundapanaca.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      afiche: file(relativePath: {eq: "convenios/becas_2020.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sembradorI: file(relativePath: {eq: "convenios/convenio_sembrador_I.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sembradorII: file(relativePath: {eq: "convenios/convenio_sembrador_II.webp"}){
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
      <SEO title="Convenios" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-default hero-alignBottom hero-alignLeft"
        headline="Convenios"
        section="Afiliados"
      />
      <Constrain>
        <Content>
          <p>La FENAGH gestiona <strong>alianzas estratégicas</strong> con <strong>organismos públicos y privados</strong> con el propósito de crear <strong>convenios</strong> o programas que ofrezcan a los productores elementos que les permita ya sea adquirir nuevos conocimientos, protección de intereses, mejoras a la producción en si todas aquellas oportunidades que permitan potencializar a nuestros productores.</p>
          <h2>Becas 2020</h2>
          <p>Convenio de gestión de becas internacionales para maestrías con el apoyo del Programa Presidencial Programa Presidencial de Becas 2020.</p>
          <div className="content-media">
            <div className="content-media-item">
              <Img fluid={data.afiche.childImageSharp.fluid} alt="FENAGH reforesta"/>
            </div>
            <figure className="content-caption">Diseño del afiche promocional FENAGH Becas 2020.</figure>
          </div>
          <h2>Becas FUNDAPANACA</h2>
          <p>Convenio de Becas a nivel técnico agropecuario en Colombia, con el apoyo de FUNDAPANACA y Programa Presidencial de Becas 2020</p>
          <div className="content-media">
            <div className="content-media-item">
              <Img fluid={data.fundapanaca.childImageSharp.fluid} alt="Becas FUNDAPANACA"/>
            </div>
            <figure className="content-caption">Becarios de FUNDAPANACA.</figure>
          </div>
          <h2>Cooperación Cargill, FENAGH y El Sembrador</h2>
          <p>Convenio de Cooperación entre cargill, la escuela El Sembrador y FENAGH. Este convenio tiene como propósito establecer relaciones de cooperación y coordinación mutua que fortalezcan la capacitación agrícola, el emprendimiento estudiantil en producción animal y la generación de fondos que provengan de la comercialización de especies para que más jóvenes puedan financiar sus estudios en la Escuela El Sembrador.</p>
          <div className="content-media content-media--fullWidth content-media--double">
            <div className="content-media-items">
              <div className="content-media-item">
                <Img fluid={data.sembradorI.childImageSharp.fluid} alt="Convencio Sembrador"/>
              </div>
              <div className="content-media-item">
                <Img fluid={data.sembradorII.childImageSharp.fluid} alt="Convencio Sembrador"/>
              </div>
            </div>
            <figure className="content-caption">Firma del convenio entre Cargill, FENAGH y El Sembrador.</figure>
          </div>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default ConveniosPage