import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain } from "../components/globals"
import Hero from "../components/hero"
import Card from '../components/card'
import CardList from '../components/cardList'

const ComercializacionPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "comercializacion-hero.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ejemplares: allEjemplares{
        nodes {
          _id
          raza
          ejemplar
          propietario
          finca
          url
          descatado
        }
      }
    }
  `)
  
  const featuredEjemplar = data.ejemplares.nodes.filter(e => e.descatado)
  const ejemplares = data.ejemplares.nodes.filter(e => !e.destacado)
  return (
    <Layout>
      <SEO title="Comercialización: Ejemplares en Venta" />
      <Hero
        sources={data.hero.childImageSharp.fluid}
        className="hero-short hero-alignBottom"
        headline="Ejemplares en Venta"
      />
      <Constrain>
        <Card 
          featured
          url={featuredEjemplar[0].url}
          raza={featuredEjemplar[0].raza}
          ejemplar={featuredEjemplar[0].ejemplar}
          propietario={featuredEjemplar[0].propietario}
          finca={featuredEjemplar[0].finca}
        />
        <CardList>
          {ejemplares.map(({_id, ejemplar, propietario, finca, raza, url}) => (
            <Card 
              id={_id}
              url={url}
              raza={raza}
              ejemplar={ejemplar}
              propietario={propietario}
              finca={finca}
            />
          ))}
        </CardList>
      </Constrain>
    </Layout>
  )
}

export default ComercializacionPage