import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Content, StyledLink } from "../components/globals"
import Border from "../components/border"
import Hero from "../components/hero"

const AssociationsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "comercializacion-hero.webp" }) {
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
      <SEO title="Comercialización" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-default hero-alignBottom"
        headline="Comercializacion de ejemplares"
      />
      <Border />
      <Constrain>
        <Content>
          <h2>Que es el Servicio de Comercialización?</h2>
          <p>Typewriter seitan meditation swag distillery gentrify DIY austin prism art party affogato. Locavore post-ironic swag austin vaporware hella. Cliche enamel pin meh, four loko williamsburg sriracha church-key occupy. Vice waistcoat bespoke, roof party normcore deep v vexillologist pour-over portland health goth skateboard before they sold out iPhone pop-up tattooed. Whatever ethical mlkshk humblebrag portland venmo. Vaporware vice slow-carb kombucha, mumblecore portland cardigan celiac squid bicycle rights enamel pin biodiesel copper mug yr. Tumeric cray bicycle rights locavore blue bottle kale chips.</p>
          <h2>Como funciona?</h2>
          <p>Typewriter seitan meditation swag distillery gentrify DIY austin prism art party affogato. Locavore post-ironic swag austin vaporware hella. Cliche enamel pin meh, four loko williamsburg sriracha church-key occupy. Vice waistcoat bespoke, roof party normcore deep v vexillologist pour-over portland health goth skateboard before they sold out iPhone pop-up tattooed. Whatever ethical mlkshk humblebrag portland venmo. Vaporware vice slow-carb kombucha, mumblecore portland cardigan celiac squid bicycle rights enamel pin biodiesel copper mug yr. Tumeric cray bicycle rights locavore blue bottle kale chips.</p>
          <p className="center has-link">
            <StyledLink to="/ejemplares-en-venta" className="primary">Ver Ejemplares</StyledLink>
          </p>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default AssociationsPage