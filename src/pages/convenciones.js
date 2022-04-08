import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Hero from "../components/hero"
import { Convencion } from '../components/convencion'

const ConvencionContent = [
  {
    id: 0,
    name: 'Asamblea 2022',
    content: <Convencion />
  },
]

const ConvencioPage = () => {
  const [active, setActive] = useState(ConvencionContent[0].id);
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "asamblea_2022_page.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <SEO title="Asambleas" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom hero-alignLeft"
        headline='Asambleas'
      />
      <Constrain>
        <Content>
          <section className="page-meta">
            <div className="page-meta__files">
              <span className="page-meta__files--title">Archivos descargables: </span>
              <a 
               // href='https://images.ctfassets.net/e4da5bv5j8g0/6xC2eTm9bvikOc5a9Ymuos/1d802ea6e4fe9ccd739bc6750acc4aec/convocatoria_2022.jpeg' 
                download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
                Convocatoria 2022
              </a>
              <a 
               // href='https://assets.ctfassets.net/e4da5bv5j8g0/zMLoXX6gevxxcxqMKlrRI/63c7222fe2840fb5a13352e02011e190/CREDENCIAL_2022.pdf' 
                download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
               Credencial 2022
              </a>
              <a 
               // href='https://assets.ctfassets.net/e4da5bv5j8g0/6wzKdKIH5qegE0uWIOSxUV/170f40088521d027471af35d22545ec8/HOTELES_SUGERIDOS_CONVENCION_FENAGH_2022.pdf' 
                download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
                Hoteles Sugeridos
              </a>
            </div>
            <nav className="page-meta__nav">
              <ul className="page-meta__nav--list">
              {ConvencionContent.map(({id, name}) => (
                <li
                  key={id}  
                  className={`list-item ${active === id ? 'list-item__active': ''}`}
                  onClick={() => setActive(id)}
                >
                  <span>
                    <div className="tag-name">
                      {name}
                      <hr />
                    </div>
                  </span>
                  
                </li>
              ))}
              </ul>
            </nav>
          </section>
          <>{ConvencionContent[active].content}</>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default ConvencioPage