import React from "react"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container } from "../components/globals"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Proyectos" />
    <Container>
      <h1>PROYECTOS</h1>
      <h2>PROGRAMA “FENAGH REFORESTA”</h2>
      <p>Gracias a un convenio firmado entre la FENAGH y el Instituto de Conservación Forestal en junio del 2019. A la fecha se han reforestado 1365 manzanas de distintos productores a nivel nacional. Se han instalado 2 viveros en las asociaciones de la FENAGH (AGATC, AGASE).</p>
      <h2>PROGRAMAS DE CAPACITACIÓN A TRAVES DE WEBINAR</h2>
      <p>Desarrollo de WEBINARS con diferentes instituciones en temas técnicos a través de plataformas virtuales. Se han capacitado más de dos mil productores a nivel nacional.</p>
      <h2>PROYECTO DE DISEÑO E IMPLEMENTACIÓN DE UNA ESTRATEGIA PARA LA VINCULACIÓN, CAPACITACIÓN Y CONSOLIDACIÓN DE LAS MIPYMES DE MÉXICO Y HONDURAS: CONFORMACIÓN DE NÚCLEOS EMPRESARIALES DEL SECTOR AGROINDUSTRIAL.</h2>
      <p>Se capacitaron a más de 30 agro empresas en los siguientes temas: Promoción Comercial, Empoderamiento de Mujeres, Cultura de Mejora y Aprendizaje constante, Desarrollo de Nuevos Productos y/o Servicios - Calidad y responsabilidad social y mejora ambiental</p>
      <h1>CONVENIOS</h1>
      <p>Convenio de gestión de becas internacionales para maestrías con el apoyo del Programa Presidencial Programa Presidencial de Becas 2020.</p>
      <p>Convenio de Becas a nivel técnico agropecuario en Colombia, con el apoyo de FUNDAPANACA y Programa Presidencial de Becas 2020</p>
    </Container>
  </Layout>
)

export default ProjectsPage