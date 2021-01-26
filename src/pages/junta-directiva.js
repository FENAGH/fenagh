import React from "react"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container } from "../components/globals"
import TableComponent from "../components/table"

const DirectivePage = () => (
  <Layout>
    <SEO title="Junta Directiva" />
    <Container>
      <h1>Junta Directiva</h1>
      <TableComponent />
    </Container>
  </Layout>
)

export default DirectivePage