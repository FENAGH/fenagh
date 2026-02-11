import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain} from "../components/globals"
import Hero from "../components/hero"
import { PERSONAL } from '../config/data'
import PersonalCard from '../components/PersonalCard/PersonalCard'

const PersonalPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "Empleados"}}) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
      }
      file(relativePath: { eq: "administrativo.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // 🔹 Crear mapa de imágenes por ruta
  const imageMap = {}
  data.allFile.nodes.forEach(node => {
    imageMap[node.relativePath] = node.childImageSharp.gatsbyImageData
  })

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
        <div className="personal-grid">
          {PERSONAL.map(persona => (
            <PersonalCard
              key={persona.id}
              {...persona}
              imageData={imageMap[persona.foto.replace(/^\//, "")]} // quitar el slash inicial
            />
          ))}
        </div>
      </Constrain>
    </Layout>
  )
}

export default PersonalPage