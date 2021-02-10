import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Table, TableHead, TableRow,  Cell } from "../components/globals"
import Hero from "../components/hero"
import Border from '../components/border'
import { JUNTA } from '../config/data'

const DirectivePage = () => {
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
      <SEO title="Junta Directiva" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom no-overlay"
        headline="Junta Directiva"
        section="Nuestra Gente"
      />
      <Border />
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