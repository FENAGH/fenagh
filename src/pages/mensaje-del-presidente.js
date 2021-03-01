import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Hero from '../components/hero'

const MessagePage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "message.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <SEO title="Mensaje del Presidente" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignLeft no-overlay"
        headline="Mensaje del Presidente"
        section="nuestra gente"
      />
      <Constrain>
        <Content>
          <p className="has-dropcap">En este especial momento que pasa nuestro País, el sector Agropecuario representado por la Federación Nacional de Agricultores y Ganaderos de Honduras-FENAGH- ha estado trabajando para brindar su apoyo a todos los sectores productivos que proveen la canasta básica de todos los hondureños.</p>

          <p>De nadie pasa desapercibido que vivimos momentos especiales en nuestra historia humana, y en nuestro caso como sociedad Hondureña, nos enfrentamos a nuevos retos que no serán fáciles de solventar pero sabemos que la sociedad en su conjunto quiere avanzar con esperanza y propuestas innovadoras hacia el futuro, los ciudadanos de este país queremos progreso y a esto apuesta el sector agropecuario.</p>

          <p>Estamos dispuestos a hacer crecer mucho más y de mejor manera a nuestros sectores, valorando el respeto a la propiedad privada, con normativas modernas, donde el sector privado pueda asumir desafíos mayores para levantar nuestra economía, que sabemos estará bien golpeada en los próximos años.</p>

          <p>Es importante resaltar que debemos trabajar aún más por el pequeño productor, con apoyo en tecnologías y acceso al crédito, sin dejar de lado la mediana y grande empresa que son generadores importantes de empleos y que también requieren un fuerte apoyo apuntalando políticas de disponibilidad financiera a largo plazo y tasas de interés de fomento.</p>

          <p>Pero, el aspecto económico no es el único en el que la FENAGH ha estado trabajando. Una de las áreas en las que hemos puesto nuestro esfuerzo y empeño es en fortalecer los programas sanitarios, la trazabilidad bovina la cual permitirá a las autoridades y consumidores encontrar y seguir el rastro de un alimento, una ración, un animal destinado a la producción de productos alimenticios o una sustancia destinada a ser incorporada en alimentos o raciones a través de todas las etapas de producción, trasformación y distribución, entre otros programas.</p>

          <p>La convergencia de todos los esfuerzos, que se han estado dando de manera constante y sostenida han dado buenos frutos; ya que nos ha permitido hacer planteamientos sólidos, que han beneficiado a muchas instituciones y gremiales de las cuales esperamos para años venideros una mayor incorporación a la prestación de servicios a sus agremiados, obteniendo esa identificación y reconocimiento por la sociedad.</p>

          <p>En términos generales, consideramos que vamos por buen camino, no obstante que la Pandemia generada por el COVID-19, los fenómenos naturales provocados por la inclemencia del cambio climático, que han afectado a todo el país y al mundo, el sistema agroalimentario no se ha detenido, en unos pocos meses se afectó la comercialización al consumidor final, pero se están retomando los ritmos marcados por su crecimiento precedente.</p>
          
          <p>Creo que la visión dejada por los dirigentes que me han antecedido en esta prestigiosa organización, está siendo llevada de manera responsable y más que todo con las aspiraciones de todo productor o dirigente gremial que se resumen en: seguridad jurídica, mercados y apoyo en normativas para su desarrollo.</p>

          <p>Amigos, directivos, presidentes de las más de 45 organizaciones afiliadas a la FENAGH los invito a poner todo nuestro esfuerzo para poder dar un salto en el desarrollo,  en bien de todos los habitantes de este noble pueblo.</p>

          <p>Muchas gracias.</p>

          <p>—</p>

          <p className="signature">
            <span>Ing. Anabel Gallardo Ponce</span>
            <span>Presidente FENAGH | 2019-2021</span>
          </p>

        </Content>
      </Constrain>
    </Layout>
  )
}

export default MessagePage