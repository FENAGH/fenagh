import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Hero from "../components/hero"
//import { Convencion } from '../components/convencion'

const ConvencionContent = [
  {
    id: 0,
    name: '',
   // content: <Convencion />
  }, 
]

const ConvencioPage = () => {
  const [active, setActive] = useState(ConvencionContent[0].id);
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "AsambleaActual.jpg" }) {
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
                  //href= 'https://images.ctfassets.net/e4da5bv5j8g0/SN3dg27wKJLkx7X2tgsvq/af3e02777e60c8cece7cf736667a3fd9/FENAGH_C-3_CONVOCATORIA_XC_ASAMBLEA.jpg'
                //href='https://images.ctfassets.net/e4da5bv5j8g0/16VXCPlQnZBAOKwPg2KDxp/eed40f5935a31e622aa4092fce11e0fa/FENAGH_CONVOCATORIA_2024.jpg' 
                download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
                Convocatoria 2025.
              </a>
              <a 
              //href= 'https://assets.ctfassets.net/e4da5bv5j8g0/5XFeStLaOvBfYNq8U9Yvkd/fabe30d0d06f5604720629a05c9fef7d/CREDENCIAL_2023.pdf'
               // href='https://assets.ctfassets.net/e4da5bv5j8g0/zMLoXX6gevxxcxqMKlrRI/63c7222fe2840fb5a13352e02011e190/CREDENCIAL_2022.pdf'
              //href= 'https://assets.ctfassets.net/e4da5bv5j8g0/5XFeStLaOvBfYNq8U9Yvkd/fabe30d0d06f5604720629a05c9fef7d/CREDENCIAL_2023.pdf'
              // href= 'https://assets.ctfassets.net/e4da5bv5j8g0/1UDVAkrdDsqBSEmJSv40PJ/519dfa04f3e8805d71f372aca022d8c1/CREDENCIAL_2024.pdf' 
                download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
               Credencial 2025.
              </a>
              <a 
               // href='https://assets.ctfassets.net/e4da5bv5j8g0/1jc9AADdF04GKGeEO2WqNE/8cd52d60f510d0509c9e78a7de20e9fb/Fenagh_Hoteles.pdf'
               // href='https://assets.ctfassets.net/e4da5bv5j8g0/6wzKdKIH5qegE0uWIOSxUV/170f40088521d027471af35d22545ec8/HOTELES_SUGERIDOS_CONVENCION_FENAGH_2022.pdf' 
              // href='https://assets.ctfassets.net/e4da5bv5j8g0/4iwSPlwnK4OgwdPJIeT8Jj/bb56fe8c06e0f3f164756ce7d121e93f/Hoteles_Sugeridos_FENAGH_AGAA_2024.pdf' 
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
          <>{ConvencionContent[active].content}</>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default ConvencioPage