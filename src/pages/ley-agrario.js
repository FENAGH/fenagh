import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Content } from "../components/globals"
import Hero from "../components/hero"

const LeyAgrarioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "leyes_page.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      derechoPropiedad: contentfulDocumentList(id: {eq: "1853f804-d948-528a-bd63-2f902277f42c"}) {
        title
        assets {
          id
          title
          file {
            url
            fileName
            contentType
          }
        }
      }
      derechoAmbiental: contentfulDocumentList(id: {eq: "1a639816-ed60-5e5f-aa69-bf2f601fa572"}) {
        title
        assets {
          id
          title
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Leyes: Agrario" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom hero-alignLeft"
        headline="Derecho Agrario"
        section="Leyes"
      />
      <Constrain>
        <Content>
          <p>En este espacio tienes acceso a las leyes vigentes en Honduras que están relacionadas al derecho agrario, regulación de la propiedad entre otros.</p>
          <h2>{data.derechoPropiedad.title}</h2>
          <ul>
            {data.derechoPropiedad.assets.map(asset => (
              <li key={asset.id}>
                <a 
                  href={asset.file.url} 
                  download
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  {asset.title}
                </a>
              </li>
            ))}
          </ul>
          <h2>{data.derechoAmbiental.title}</h2>
          <ul>
            {data.derechoAmbiental.assets.map(asset => (
              <li key={asset.id}>
                <a
                  href={asset.file.url} 
                  download
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  {asset.title}
                </a>
              </li>
            ))}
          </ul>

        </Content>
      </Constrain>
    </Layout>
  )
}

export default LeyAgrarioPage