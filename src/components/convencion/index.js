import React from 'react';
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { device } from '../../../../landing-fenagh/src/utils/breakpoints';

const Logos = styled.div`
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    .gatsby-image-wrapper{
      position: relative;
      overflow: hidden;
      margin: 0 1rem 1.55rem;
      width: 100%;
      max-width: 60px;
      opacity: .7;
    }
    @media ${device.tablet}{
      .gatsby-image-wrapper{
        margin: 0 1.325rem 1.55rem;
        max-width: 100px;
      }
    }
  }
`

function dataWithImage(WrappedComponent){
  return props => (
    <StaticQuery
      query={graphql`
        query {
          partners: allFile(
            filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "partners"}}
          ) {
            edges {
              node {
                base
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          convocatoria: file(
            relativePath: { eq: "convencion_convocatoria.webp" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          florencia: file(
            relativePath: { eq: "hotel_florencia.webp" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          alameda: file(
            relativePath: { eq: "hotel_alameda.webp" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          minister: file(
            relativePath: { eq: "hotel_minister.webp" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
        }
      `}
      render={ data => <WrappedComponent {...props} imageData={data} /> }
    />
  )
}

const Convocatoria = dataWithImage(props => (
  <>
    <h2>Convocatoria</h2>

    <p className="has-dropcap">La Federación Nacional de Agricultores y Ganaderos de Honduras <strong>(FENAGH)</strong> por este medio  CONVOCA a todas las asociaciones afiliadas a la <strong>LXXXVIII Convención Nacional Ordinaria en memoria del <em>“Sr. Roberto Gallardo Lardizábal”</em></strong>. Que se realizara en el Campo de Exposiciones de la Asociación de Ganaderos y Agricultores de Francisco Morazán <strong>(AGAFAM)</strong> el día <strong>jueves 15 de abril del 2021</strong> a partir de las 10:00 am, de acuerdo con la agenda.</p>

    <div className="content-media">
      <div className="content-media-item">
      <Img fluid={props.imageData.convocatoria.childImageSharp.fluid} alt="Convocatoria LXXXVIII Convención Nacional Ordinaria FENAGH"/>
      </div>
    </div>
    
    <p>A falta de quorum en la primera convocatoria, la convención se reunirá en segunda convocatoria una hora después, en el mismo lugar, cualquiera sea el número de votos de los miembros de FENAGH asistentes.</p>
    
    <p>—</p>

    <p className="signature">
      <span>Lic. Gilberto Moreno</span>
      <span>Secretario | FENAGH</span>
    </p>
  </>
))

const Agenda = () => (
  <>
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
  </>
)

const Registro = () => (
  <>
    <h2>Instrucciones para participar</h2>

    <p>En la Convención Nacional Ordinaria correspondiente al año 2021 se han determinado algunas reglas para lograr una sesión eficiente y con medidas de bioseguridad que deben cumplir los convencionalistas, asistentes, directivos y equipo logístico.</p>

    <p>Las asociaciones miembros deben acreditara su delegado propietario y suplente, para ello se les enviara el formato de credenciales el cual deberán enviar al correo fenagh.oficial@gmail.com una vez estén los datos completos de los delegados. La credencial debe tener firma y sello del secretario de la asociación miembro.</p>

    <p>Siendo que nuestros estatutos fijan que las convenciones deben ser de carácter presencial, se ha determinado realizar la misma en base a las disposiciones estatutarias y conforme las medidas de bioseguridad, que deberán cumplirse estrictamente para la celebración de la convención.</p>

    <h2>DISPOSICIONES GENERALES Y OBLIGATORIAS</h2>

    <p>Cada asociación miembro, que se encuentre al día en el pago de sus obligaciones, deberá remitir a más tardar el día viernes 09 de abril, la acreditación de credenciales delegando al propietario y suplente de la asociación. Únicamente el delegado propietario podrá participar de manera presencial, el delegado suplente deberá conectarse a través de zoom.</p>
    <p>Solo tendrá participación igualitaria de dos delegados por asociación, no se aceptaran más delegados, para mantener el orden y las disposiciones de SINAGER. Un delegado será presencial y el segundo delegado por vía zoom. Recomendamos que el delegado suplente sea quien se conecte por esta vía.</p>
    <p>Para los delegados a la convención, que participaran vía Zoom, se les dará su respectivo acceso de ingreso a la sala, el cual es personal e intransferible. En todo momento el delegado deberá tener activada su cámara, de lo contrario se procederá a retirarlo de la sala de zoom.</p>
    <p>Al ingreso a las instalaciones de AGAFAM los delegados propietarios deben pasar entre las 7:30 am a 9:30 am a realizarse la prueba de antígenos con carácter de obligatorio, para acreditar que se encuentran negativos de covid19. Una vez determinado por las microbiólogas que pueden ingresar al salón de la convención, previo serán registrados y se hará entrega de los documentos y kit de bienvenida. Quien no desee hacerse la prueba, aunque este acreditado no podrá ingresar a la Convención.</p>
    <p>En el salón cada asociación tendrá una mesa debidamente separada, para que se coloque cada delegado según su ingreso.  Cada mesa tendrá un bote de gel.</p>
    <p>Todos los delegados, sin excepción tendrán que usar mascarilla.</p>
    <p>En esta ocasión no habrán invitados especiales a la convención.</p>

    <p>
      <strong>Cualquier duda pueden escribir a los correos: {" "}</strong>
      <a className="external-link" href="mailto:fenagh.oficial@gmail.com" rel="noopener noreferrer" target="_blank">fenagh.oficial@gmail.com</a> y <a className="external-link" href="mailto:kcastellanos@fenagh.net" rel="noopener noreferrer" target="_blank">kcastellanos@fenagh.net</a>
    </p>

  </>
)

const Hoteles = dataWithImage(props => (
  <>
    <h2>Florencia Plaza Hotel</h2>
    <div className="content-media">
      <div className="content-media-item">
      <Img fluid={props.imageData.florencia.childImageSharp.fluid} alt="Hotel Florencia"/>
      </div>
    </div>
    <ul>
      <li>Ubicación: Frente Blvd. Suyapa</li>
      <li>Precios: Sin impuestos</li>
      <li>Habitación sencilla: <strong>L. 1,621.40</strong></li>
      <li>Habitación doble: <strong>L. 1,863.40</strong></li>
      <li>Contacto: Rubén Toledo</li>
      <li>Teléfono: 2229-69000</li>
    </ul>
    <p>Habitaciones incluye: desayuno a la carta, coctel de bienvenida, piscina, terraza, estacionamiento.</p>
    <h2>Hotel Edén</h2>
    <ul>
      <li>Ubicación: Col. Palmira, Avenida Republica de Panamá y Calzado Brasilia</li>
      <li>Precios: Impuestos ya incluidos</li>
      <li>Habitación sencilla (cama unipersonal): <strong>L. 800.00</strong></li>
      <li>Habitación sencilla (cama matrimonial): <strong>L. 900.00</strong></li>
      <li>Habitación sencilla (cama queen): <strong>L. 900.00</strong></li>
      <li>Habitación doble (dos camas unipersonales): <strong>L. 1,000.00</strong></li>
      <li>Habitación doble (dos camas matrimoniales): <strong>L. 1,200.00</strong></li>
      <li>Habitación King con jacuzzi y cama unipersonal: <strong>L. 1,200.00</strong></li>
      <li>Habitación triple (una cama matrimonial y dos camas unipersonales): <strong>L. 1,300.00</strong></li>
      <li>Habitación cuádruple (cuatro camas matrimoniales): <strong>L. 1,500.00</strong></li>
      <li>Contacto: Fanny B.</li>
      <li>Teléfono: 2238-5390 / 2222-0711 / 9841-0118</li>
    </ul>
    <p>Habitaciones incluye: baño privado, agua caliente, aire acondicionado, tv por cable, estacionamiento, wifi.</p>
    <h2>Hotel Alameda</h2>
    <div className="content-media">
      <div className="content-media-item">
      <Img fluid={props.imageData.alameda.childImageSharp.fluid} alt="Hotel Alameda"/>
      </div>
    </div>
    <ul>
      <li>Ubicación: Blvd. Suyapa</li>
      <li>Precios: Impuestos ya incluidos</li>
      <li>Habitación sencilla: <strong>L. 1,455.00</strong></li>
      <li>Habitación doble: <strong>L. 1,720.00</strong></li>
      <li>Habitación triple: <strong>L. 2,010.00</strong></li>
      <li>Teléfono: 9809-0213</li>
    </ul>
    <p>Habitaciones incluye: desayuno, estacionamiento, wifi, piscina, aire acondicionado.</p>

    <h2>Minister Business Hotel</h2>
    <div className="content-media">
      <div className="content-media-item">
      <Img fluid={props.imageData.minister.childImageSharp.fluid} alt="Hotel Minister"/>
      </div>
    </div>
    <ul>
      <li>Ubicación: Blvd. Suyapa, contiguo a Torre Libertad</li>
      <li>Precios: Impuestos ya incluidos</li>
      <li>Habitación sencilla: <strong>L. 2,024.19</strong></li>
      <li>Por cada persona extra en habitación $11.90 (isv incluido)</li>
      <li>Contácto: Christian Rivera</li>
      <li>Teléfono: 2263-6464</li>
    </ul>
    <p>Habitaciones incluye: desayuno, impuestos, wifi, uso del gimnasio, estacionamiento.</p>
  </>
))

const Patrocinadores = dataWithImage(props => (
  <>
    <h2>Con el Patrocinio de</h2>
    <Logos>
      <div>
        {props.imageData.partners.edges.map(({node: {base, childImageSharp}}) => (
          <Img id={base} fluid={childImageSharp.fluid}/>
        ))}
      </div>
    </Logos>
  </>
))

export { Convocatoria, Agenda, Registro, Hoteles, Patrocinadores }