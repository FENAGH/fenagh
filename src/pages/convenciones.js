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
                  href= 'https://assets.ctfassets.net/e4da5bv5j8g0/15F5edwgDISAFoVhOZt9eY/2b3edf2324278b23226dc00fe5fd6bff/Convocatoria_Asamblea_25_04_2025.pdf'
                //href='https://images.ctfassets.net/e4da5bv5j8g0/16VXCPlQnZBAOKwPg2KDxp/eed40f5935a31e622aa4092fce11e0fa/FENAGH_CONVOCATORIA_2024.jpg' 
                download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
                Convocatoria 2025.
              </a>
              <a 
              href= 'https://assets.ctfassets.net/e4da5bv5j8g0/4Ltxb3w9u8Ay7Fa1kPohHb/ccd8f87eb5fe3af015aa6336aa50700a/CREDENCIAL_2025.pdf' 
                download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
               Credencial 2025.
              </a>
              <a 
                href='https://assets.ctfassets.net/e4da5bv5j8g0/62D5PlaHCQZnmVut98mmbj/114264f815714fb392c558f5778c7675/Programa_Asamblea_FENAGH_2025.pdf'
               
               download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
                Agenda 2025.
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