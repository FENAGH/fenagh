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

          <h2>Instrucciones para participa</h2>

          <p>En la Convención Nacional Ordinaria correspondiente al año 2021 se han determinado algunas reglas para lograr una sesión eficiente y con medidas de bioseguridad que deben cumplir los convencionalistas, asistentes, directivos y equipo logístico.</p>

          <p>Las asociaciones miembros deben acreditara su delegado propietario y suplente, para ello se les enviara el formato de credenciales el cual deberán enviar al correo fenagh.oficial@gmail.com una vez estén los datos completos de los delegados. La credencial debe tener firma y sello del secretario de la asociación miembro.</p>

          <p>Siendo que nuestros estatutos fijan que las convenciones deben ser de carácter presencial, se ha determinado realizar la misma en base a las disposiciones estatutarias y conforme las medidas de bioseguridad, que deberán cumplirse estrictamente para la celebración de la convención.</p>

          <h2>DISPOSICIONES GENERALES Y OBLIGATORIAS</h2>

          <p>Cada asociación miembro, que se encuentre al día en el pago de sus obligaciones, deberá remitir a más tardar el día viernes 09 de abril, la acreditación de credenciales delegando al propietario y suplente de la asociación. Únicamente el delegado propietario podrá participar de manera presencial, el delegado suplente deberá conectarse a través de zoom.</p>
          <p>Solo tendrá participación igualitaria de dos delegados por asociación, no se aceptaran más delegados, para mantener el orden y las disposiciones de SINAGER. Un delegado será presencial y el segundo delegado por vía zoom. Recomendamos que el delegado suplente sea quien se conecte por esta vía.</p>
          <p>Para los delegados a la convención, que participaran vía Zoom, se les dará su respectivo acceso de ingreso a la sala, el cual es personal e intransferible. En todo momento el delegado deberá tener activada su cámara, de lo contrario se procederá a retirarlo de la sala de zoom.</p>
          <p>Al ingreso a las instalaciones de AGAFAM los delegados propietarios deben pasar entre las 7:30 am a 9:30 am a realizarse la prueba de antígenos con carácter de obligatorio, para acreditar que se encuentran negativos de covid19. Una vez determinado por las microbiólogas que pueden ingresar al salón de la convención, previo serán registrados y se hará entrega de los documentos y kit de bienvenida. Quien no desee hacerse la prueba, aunque este acreditado no podrá ingresar a la Convención.</p>
          <p>En el salón cada asociación tendrá una mesa debidamente separada, para que se coloque cada delegado según su ingreso. Cada mesa tendrá un bote de gel.</p>
          <p>Todos los delegados, sin excepción tendrán que usar mascarilla.</p>
          <p>En esta ocasión no habrán invitados especiales a la convención.</p>

          <p>
            <strong>Cualquier duda pueden escribir a los correos: {" "}</strong>
            <a className="external-link" href="mailto:fenagh.oficial@gmail.com" rel="noopener noreferrer" target="_blank">fenagh.oficial@gmail.com</a> y <a className="external-link" href="mailto:kcastellanos@fenagh.net" rel="noopener noreferrer" target="_blank">kcastellanos@fenagh.net</a>
          </p>

        </Content>
      </Constrain>
    </Layout>
  )
}

export default ConvencioAgendaPage