import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Content } from "../components/globals"
import Hero from "../components/hero"

const LeyCuotaPecuariaPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "leyes_page.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Ley Cuota Pecuaria" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom hero-alignLeft"
        headline="Ley Cuota Pecuaria"
      />
      <Constrain>
        <Content>
          <h2>Que es la Ley de Cuota Pecuaria?</h2>
          <p>La ley del <strong>FONACSAH</strong> tiene por objeto mantener y fomentar el sector agropecuario nacional dentro de un marco de sostenibilidad y conservación del medio ambiente y hacerle frente a los efectos de la globalización y tratados comerciales.</p>
          <p>A través del siguiente enlace todos lo importadores nacionales pueden realizar los trámites correspondientes de los productos contenidos en la ley de la cuota pecuaria de Honduras.</p>
          <p>
            <a className="external-link" href="https://www.facebook.com/pg/camarafomentoganaderodehonduras/" rel="noopener noreferrer" target="_blank">camarafomentoganaderodehonduras</a>
          </p>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default LeyCuotaPecuariaPage