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
    name: '',
    content: <Convencion />
  }, 
]

const ConvencioPage = () => {
  const [active, setActive] = useState(ConvencionContent[0].id);
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "AsambleaActual.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90) {
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
                  href= 'https://assets.ctfassets.net/e4da5bv5j8g0/1aKkB6N4vh0ZEXjFycEtst/d015cad3104861ab29715d331912ca71/FENAGH_EH__C-6_CONVOCATORIA_2026_260314_135502.pdf'
                
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
                Convocatoria 2026.
              </a>
              <a 
              href= 'https://assets.ctfassets.net/e4da5bv5j8g0/50bFIVwzehELez7994PtfV/9c35579760b6ae03ca0a122380ed242e/CREDENCIAL_2026.pdf' 
                download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
               Credencial 2026.
              </a>
              <a 
                href='https://assets.ctfassets.net/e4da5bv5j8g0/6EhRThNjkLV8XW3Nw9z4Eb/74097211bf08d81513d343a5b04082ea/Hoteles_Sugeridos_San_Esteban_Olancho_2026.pdf'
               
               download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
                Hoteles Sugeridos.
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

{ConvencionContent[active].content}
          
        </Content>
      </Constrain>
    </Layout>
  )
}

export default ConvencioPage