import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Content } from "../components/globals"
import Hero from "../components/hero"

const LeySanitariaPage = () => {
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
      <SEO title="Leyes: Sanitaria" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom hero-alignLeft"
        headline="Ley Sanitaria"
        section="Leyes"
      />
      <Constrain>
        <Content>
          <p>En este espacio tienes acceso a las leyes vigentes en Honduras que están relacionadas a la inocuidad de los alimentos, salud de los animales y preservación de los vegetales para consumo humano.</p>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default LeySanitariaPage