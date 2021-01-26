import React from "react"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container } from "../components/globals"

const MisionVisionPage = () => (
  <Layout>
    <SEO title="Misión & Visión" />
    <Container>
      <h1>MISIÓN</h1>
      <p>Dinamizar el sector agropecuario a través de la representación, gestión y promoción de los intereses generales del gremio, de sus organizaciones miembros y de los productores nacionales para que sean más competitivos.</p>
      <h1>VISIÓN</h1>
      <p>Ser la institución líder e integradora que propicie las condiciones para el desarrollo de un sector agropecuario fuerte, competitivo y exitoso.</p>
    </Container>
  </Layout>
)

export default MisionVisionPage
