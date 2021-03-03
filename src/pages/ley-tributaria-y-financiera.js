import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Content } from "../components/globals"
import Hero from "../components/hero"

const LeyTributarioFinancieroPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "leyes_page.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leyFinanciero: contentfulDocumentList(id: {eq: "a513caf2-d08c-523a-b06e-8a980455deae"}) {
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
      leyTributario: contentfulDocumentList(id: {eq: "3b3d265a-bfea-5ae1-84e2-a77d3ba36b38"}) {
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
      <SEO title="Leyes: Tributaria y Fincanciera" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom hero-alignLeft"
        headline="Tributatario y Financiero"
        section="Leyes"
      />
      <Constrain>
        <Content>
          <p>En este espacio tienes acceso a las leyes vigentes en Honduras que están relacionadas al pago de impuestos establecidos por ley.</p>
          <h2>{data.leyFinanciero.title}</h2>
          <ul>
            {data.leyFinanciero.assets.map(asset => (
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
          <h2>{data.leyTributario.title}</h2>
          <ul>
            {data.leyTributario.assets.map(asset => (
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

export default LeyTributarioFinancieroPage