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
          fluid(maxWidth: 1200, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Leyes: Comercial" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom hero-alignLeft"
        headline="Ley Comercial"
        section="Leyes"
      />
      <Constrain>
        <Content>
          <p>En este espacio tienes acceso a las leyes vigentes en Honduras que están relacionadas al derecho mercantil, el cual es el responsable de vigilar que la actividad económica se desenvuelva de manera correcta.</p>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default LeyAgrarioPage