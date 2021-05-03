import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Table, TableHead, TableRow,  Cell } from "../components/globals"
import Hero from "../components/hero"
import { JUNTA } from '../config/data'

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
      <SEO title="Junta Directiva" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-default hero-alignBottom hero-alignLeft"
        headline="Junta Directiva 2021-2023"
        section="Nuestra Gente"
      />
      <Constrain>
        <Table>
          <TableHead>
            <Cell data-title="No">Nombre</Cell>
            <Cell data-title="Siglas">Cargo</Cell>
          </TableHead>
          {JUNTA.map(({id, cargo, nombre}) => (
            <TableRow key={id}>
              <Cell data-title="Nombre">{nombre}</Cell>
              <Cell data-title="Cargo">{cargo}</Cell>
            </TableRow>
          ))}
        </Table>
      </Constrain>
    </Layout>
  )
}

export default DirectivePage