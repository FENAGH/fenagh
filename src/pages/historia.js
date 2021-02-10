import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Border from "../components/border"
import Hero from "../components/hero"

const HistoryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      media: file(relativePath: {eq: "historia_media_01.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, maxHeight: 930) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tablet: file(relativePath: { eq: "about-page-md.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktop: file(
        relativePath: { eq: "about-page.webp" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const sources = [
    {
      ...data.tablet.childImageSharp.fluid,
      media: "(max-width: 1024)",
    },
    {
      ...data.desktop.childImageSharp.fluid,
      media: `(min-width: 1025px)`,
    },
  ]
  return (
    <Layout>
      <SEO title="Historia" />
      <Hero
        sources={sources}
        className="hero-short hero-alignBottom"
        headline="Nuestra Historia"
        section="Acerca de FENAGH"
      />
      <Border />
      <Constrain>
        <Content>
          <p>Entre 1940 y 1950, surgen los primeros movimientos que van a constituir la base de la que hoy es la entidad que genuinamente representa a empresarios dedicados a las labores agrícolas y ganaderas en Honduras y fue hasta el 26 de junio de 1966 que la Federación Nacional de Agricultores y Ganaderos de Honduras (FENAGH) inicia sus actividades en la ciudad de San Pedro Sula.</p>

          <p>Los miembros fundadores que integraron la histórica reunión son el Doctor Arturo Bendaña y Don Miguel  A. Cubero Dacosta designados presidente y secretario respectivamente, a ellos se agregan prominentes productores como ser: Jorge J. Handal, José Andonie Fernández, Salvador Quiroz, Héctor Callejas Valentine, Vicente Murillo Durón, Arturo Álvarez C., Manuel de J. Mercado, Enrique Javier Maradiaga entre otros.</p>

          <div className="content-pull content-pull--left">
            <figure className="content-media">
              <div className="content-media-item">
                <Img fluid={data.media.childImageSharp.fluid} alt="Historia de FENAGH"/>
                <figcaption class="content-caption">Yabou Diallo, from Kandia Village, was married at 18. Diallo is a mediator within her community. She didn’t play a leadership role until the Grandmother Project empowered her to do so, and now she feels like she has earned respect that she did not have before.</figcaption>
              </div>
            </figure>
          </div>

          <p>A través de los años la FENAGH ha enfrentado muchos retos como ser la invasión de tierras; acoso a la propiedad privada; velar por el cumplimiento de las leyes, como en su momento fue la Ley de la Reforma Agraria; enfrentar la severa crisis económica a mediados de los ochenta; así como los embates de la naturaleza (ej. Huracán Mitch); velar por la democracia e Institucionalidad entre otros.</p>
          
          <p>En todos estos años la FENAGH ha sabido defender los intereses de sus miembros y ha logrado salir adelante con sus retos mejorando la proyección hacia sus socios y aumentando la nómina de los mismos que ven en esta institución el interés por defender sus derechos y ayudarles en su desarrollo. La FENAGH ha ido cobrando cada vez un papel más protagónico y dinámico, logrando también, alianzas importantes con instituciones afines y tratados comerciales con la visión de ser la Institución líder e integradora que propicie las condiciones para el desarrollo de un sector agropecuario fuerte, competitivo y exitoso. Hoy por hoy FENAGH es el organismo cúpula del Sector agropecuario de Honduras y actualmente está gestionando importantes leyes a fin de expandir las capacidades del gremio y de potenciar cada vez más a nuestro sector.</p>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default HistoryPage
