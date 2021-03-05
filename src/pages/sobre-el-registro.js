import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Content } from "../components/globals"
import Hero from "../components/hero"

const SobreRegistroPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "registro_page.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Empresas" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-default hero-alignBottom hero-alignRight"
        headline="Sobre el Registro"
        section="Registro Genealógico"
      />
      <Constrain>
        <Content>
          <h2>¿SABIAS QUE PUEDES CERTIFICAR LA GENEALOGIA DE TU GANADO?</h2>
          <p>Si no lo sabias, te decimos como hacerlo…</p>
          <p>En la FENAGH, llevamos el control de la genealogía, descendencia o ascendencia de los animales bovinos y equinos de todas las razas.</p>
          <p>Lo hacemos por medio del programa del registro genealógico de ganado de honduras, el cual tiene como función inscribir la genealogía del ganado bovino y equino de las diferentes razas, formar, certificar y extender cuadros genealógicos de los ejemplares inscritos a nivel nacional.</p>
          <h2>¿QUE TIPO DE GANADO PUEDES REGISTRAR?</h2>
          <p>Todas las razas bovinas y equinas, en sus diferentes encastes, definidas así:</p>
          <ul>
            <li>Puro</li>
            <li>Purificado</li>
            <li>Encastados</li>
          </ul>
          <h2>¿PARA QUE ME SIRVE INSCRIBIR MIS EJEMPLARES?</h2>
          <ul>
            <li>La genealogía es útil para mostrar características físicas que se transmiten de generación en generación.</li>
            <li>Es la única forma de determinar el grado de pureza de un ejemplar bovino y/o equino.</li>
            <li>Aumenta el valor del animal al tener un certificado genealógico.</li>
            <li>Su uso se vuelve casi obligatorio cuando se vendes animales para la reproducción, entre muchos otros beneficios.</li>
            <li>Llámanos, estamos dispuestos a ayudarte para que sigas el proceso de registro adecuado y puedas darle mayor valor económico a tu hato.</li>
          </ul>
          <br />
          <h3 className="highlights">¡RECUERDA, TU GANADO REGISTRADO VALE MÁS!</h3>
          <h3 className="highlights"><em>¡POR UN POTENCIAL GENETICO, REGISTRA TUS ANIMALES!</em></h3>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default SobreRegistroPage