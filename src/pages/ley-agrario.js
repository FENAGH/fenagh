import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Content } from "../components/globals"
import Hero from "../components/hero"

const LeyAgrarioPage = () => {
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
      <SEO title="Leyes: Agrario" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom hero-alignLeft"
        headline="Derecho Agrario"
        section="Leyes"
      />
      <Constrain>
        <Content>
          <p>En este espacio tienes acceso a las leyes vigentes en Honduras que están relacionadas al derecho agrario, regulación de la propiedad entre otros.</p>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default LeyAgrarioPage