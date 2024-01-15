import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Table, TableHead, TableRow,  Cell } from "../components/globals"
import Hero from "../components/hero"
import { PERSONAL } from '../config/data'

const PersonalPage = () => {
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
      <SEO title="Personal Administrativo" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-default hero-alignBottom hero-alignLeft"
        headline="Personal Administrativo"
        section="Nuestra Gente"
      />
      <Constrain>
        <Table>
          <TableHead>
            <Cell data-title="Nombre">Nombre</Cell>
            <Cell data-title="Cargo">Cargo</Cell>
            <Cell data-title="Correo">Correo</Cell>
            <Cell data-title="Telefono">Telefono</Cell>
          </TableHead>
          {PERSONAL.map(({id, cargo, email, nombre,telefono}) => (
            <TableRow key={id}>
              <Cell data-title="Nombre">{nombre}</Cell>
              <Cell data-title="Cargo">{cargo}</Cell>
              <Cell data-title="Correo">
                {email.length > 0 && (
                  <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a>
                )}
              </Cell>
              <Cell data-title="Telefono">{telefono}</Cell>
            </TableRow>
          ))}
        </Table>
      </Constrain>
    </Layout>
  )
}

export default PersonalPage