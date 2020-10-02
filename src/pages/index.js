import React from "react"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import HomePage from "../components/homePage"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <HomePage />
  </Layout>
)

export default IndexPage
