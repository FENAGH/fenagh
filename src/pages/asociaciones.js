import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Table, TableHead, TableRow,  Cell } from "../components/globals"
import Hero from "../components/hero"
import { ASOCIACIONES } from '../config/data'

const AssociationsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "solid-bg.webp" }) {
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
      <SEO title="Asociaciones" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom no-overlay"
        headline="Asociaciones"
        section="Afiliados"
      />
      <Constrain>
        <Table>
          <TableHead>
            <Cell data-title="No">No.</Cell>
            <Cell data-title="Siglas">Siglas</Cell>
            <Cell data-title="Nombre">Nombre</Cell>
            <Cell data-title="Presidente">Presidente</Cell>
            <Cell data-title="Teléfono">Teléfono</Cell>
          </TableHead>
          {ASOCIACIONES.map(({id, asociacion, nombre, presidente, telefono}) => (
            <TableRow key={id}>
              <Cell data-title="No">{id}</Cell>
              <Cell data-title="Siglas">{asociacion}</Cell>
              <Cell data-title="Nombre">{nombre}</Cell>
              <Cell data-title="Presidente">{presidente}</Cell>
              <Cell data-title="Teléfono">
                {telefono.length > 0 && (
                  <a href={`tel:${telefono}`} target="_blank" rel="noopener noreferrer">{telefono}</a>
                )}
              </Cell>
            </TableRow>
          ))}
        </Table>
      </Constrain>
    </Layout>
  )
}

export default AssociationsPage