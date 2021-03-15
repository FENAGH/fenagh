import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// Components
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import { Content, Constrain } from "../../components/globals"
import Hero from "../../components/hero"

const ConvencioAgendaPage = () => {
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

          <h2>Agenda</h2>

          <ul>
            <li>Inscripción de Convencionales</li>
            <li>Nombramiento de la Comisión de Credenciales</li>
            <li>Informe de la Comisión de Credenciales (instalación de la convención)</li>
            <li>Entrega de Reconocimiento Homenaje Póstumo al Sr. Roberto Gallardo Lardizábal</li>
            <li>Informe del Tesorero y Aprobación del Presupuesto de Ingresos y Egresos 2021</li>
            <li>Informe de la Junta Fiscalizadora</li>
            <li>Informe del Presidente</li>
            <li>Elección de la Junta Directiva Periodo 2021-2023</li>
            <li>Juramentación de la Junta Directiva</li>
            <li>Toma de Posesión</li>
            <li>Puntos Varios</li>
            <li>Lectura, Discusión y Aprobación del Acta de la Asamblea</li>
            <li>Cierre de la Sesión</li>
          </ul>

        </Content>
      </Constrain>
    </Layout>
  )
}

export default ConvencioAgendaPage