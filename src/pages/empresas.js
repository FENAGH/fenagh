import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Table, TableHead, TableRow,  Cell } from "../components/globals"
import Hero from "../components/hero"
import { EMPRESAS } from '../config/data'

const DirectivePage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "administrativo.webp" }) {
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
      <SEO title="Empresas" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom hero-alignCenter"
        headline="Empresas"
        section="Socios"
      />
      <Constrain>
        <Table>
          <TableHead>
            <Cell data-title="No.">No.</Cell>
            <Cell data-title="Siglas">Siglas</Cell>
            <Cell data-title="Nombre">Nombre</Cell>
          </TableHead>
          {EMPRESAS.map(({id, siglas, nombre}) => (
            <TableRow key={id}>
              <Cell data-title="No.">{id}</Cell>
              <Cell data-title="Siglas">{siglas}</Cell>
              <Cell data-title="Nombre">{nombre}</Cell>
            </TableRow>
          ))}
        </Table>
      </Constrain>
    </Layout>
  )
}

export default DirectivePage