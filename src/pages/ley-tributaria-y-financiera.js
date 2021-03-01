import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Content } from "../components/globals"
import Hero from "../components/hero"

const LeyTributarioFinancieroPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ley-tributaria.jpg" }) {
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
      <SEO title="Leyes: Tributaria y Fincanciera" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom hero-alignLeft"
        headline="Tributataria y Financiera"
        section="Leyes"
      />
      <Constrain>
        <Content>
          <p>En este espacio tienes acceso a las leyes vigentes en Honduras que están relacionadas al pago de impuestos establecidos por ley.</p>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default LeyTributarioFinancieroPage