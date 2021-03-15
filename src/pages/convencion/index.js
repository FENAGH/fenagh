import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// Components
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import { Content, Constrain } from "../../components/globals"
import Hero from "../../components/hero"

const ConvencioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "convencion_page.webp" }) {
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
      <SEO title="Convenios" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-default hero-alignBottom hero-alignRight"
        headline="LXXXVIII CONVENCIÓN ORDINARIA"
      />
      <Constrain>
        <Content>
          <section className="page-meta">
            <nav className="page-meta__nav">
              <ul className="page-meta__nav--list">
                <li className="list-item">
                  <Link to="/convencion">
                    <div className="tag-name">
                      Convocatoria
                      <hr />
                    </div>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/convencion/agenda">
                    <div className="tag-name">
                      Agenda
                      <hr />
                    </div>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/convencion/como-participar">
                    <div className="tag-name">
                      Como Participar?
                      <hr />
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
          <h2>Convocatoria</h2>
          <p className="has-dropcap">La Federación Nacional de Agricultores y Ganaderos de Honduras <strong>(FENAGH)</strong> por este medio  CONVOCA a todas las asociaciones afiliadas a la <strong>LXXXVIII Convención Nacional Ordinaria en memoria del <em>“Sr. Roberto Gallardo Lardizábal”</em></strong>. Que se realizara en el Campo de Exposiciones de la Asociación de Ganaderos y Agricultores de Francisco Morazán <strong>(AGAFAM)</strong> el día <strong>jueves 15 de abril del 2021</strong> a partir de las 10:00 am, de acuerdo con la agenda (<strong><Link to="/convencion/agenda">Ver Agenda</Link></strong>).</p>
          
          <p>A falta de quorum en la primera convocatoria, la convención se reunirá en segunda convocatoria una hora después, en el mismo lugar, cualquiera sea el número de votos de los miembros de FENAGH asistentes.</p>
          
          <p>—</p>

          <p className="signature">
            <span>Lic. Gilberto Moreno</span>
            <span>Secretario FENAGH</span>
          </p>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default ConvencioPage