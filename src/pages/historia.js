import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Heading } from "@chakra-ui/react"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container, PostContainer } from "../components/globals"
import Border from "../components/border"

const HistoryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "home-sm.webp" }) {
        childImageSharp {
          fluid(maxWidth: 520, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tablet: file(relativePath: { eq: "home-md.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktop: file(
        relativePath: { eq: "home.webp" }
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
      ...data.mobile.childImageSharp.fluid,
      media: "(max-width: 520px)",
    },
    {
      ...data.tablet.childImageSharp.fluid,
      media: "(min-width: 521px) and (max-width: 1024px)",
    },
    {
      ...data.desktop.childImageSharp.fluid,
      media: `(min-width: 1025px)`,
    },
  ]
  return (
    <Layout>
      <SEO title="Historia" />
      <Container 
        fluid
        pos="relative"
        h={{base: "175vw", md: "60.25vw"}}
        minH={{base: "150vw", md: "52.25vw"}}
        maxH="calc(100vh - 10px);"
        overflow="hidden"
      >
        <Box
          w="100%"
          h="100%"
          pos="absolute"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="flex-end"
          px={{base: "15px", md:"30px"}}
          pb={{base: "60px", lg:"100px"}}
          zIndex="10"
        >
          <Heading 
            as="h4"
            display="inline-block"
            mb="20px"
            fontFamily="Roboto"
            fontSize="12px"
            lineHeight="22px"
            letterSpacing="1px"
            textTransform="uppercase"
          >
            <Box 
              as="span" 
              display="inline-block"
              bg="#fff"
              p="0 13px 0 14px"
              color="#232323"
            >Institución</Box>
          </Heading>
          <Heading
            as="h1"
            color="#fff"
            fontSize={{base: "4rem", md:"5rem", lg: "7.2rem"}}
            fontWeight="light"
            lineHeight="1.1"
            textAlign="center"
            maxW={{base:"90%", md:"76%"}}
          >
            Nuestra Historia
          </Heading>
        </Box>
        <Box w="100%" pos="relative">
          <Img fluid={sources} style={{width: "100%"}}/>
          <Box 
            w="100%"
            h="100%"
            backgroundColor="rgb(0,0,0)"
            background="linear-gradient(180deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,0) 100%)"
            pos="absolute"
            bottom="0"
          />
        </Box>
      </Container>

      <Border />

      <PostContainer>
        <h1>HISTORIA</h1>
        <p>Entre 1940 y 1950, surgen los primeros movimientos que van a constituir la base de la que hoy es la entidad que genuinamente representa a empresarios dedicados a las labores agrícolas y ganaderas en Honduras y fue hasta el 26 de junio de 1966 que la Federación Nacional de Agricultores y Ganaderos de Honduras (FENAGH) inicia sus actividades en la ciudad de San Pedro Sula.</p>

        <p>Los miembros fundadores que integraron la histórica reunión son el Doctor Arturo Bendaña y Don Miguel  A. Cubero Dacosta designados presidente y secretario respectivamente, a ellos se agregan prominentes productores como ser: Jorge J. Handal, José Andonie Fernández, Salvador Quiroz, Héctor Callejas Valentine, Vicente Murillo Durón, Arturo Álvarez C., Manuel de J. Mercado, Enrique Javier Maradiaga entre otros.</p>

        <p>A través de los años la FENAGH ha enfrentado muchos retos como ser la invasión de tierras; acoso a la propiedad privada; velar por el cumplimiento de las leyes, como en su momento fue la Ley de la Reforma Agraria; enfrentar la severa crisis económica a mediados de los ochenta; así como los embates de la naturaleza (ej. Huracán Mitch); velar por la democracia e Institucionalidad entre otros.</p>
        
        <p>En todos estos años la FENAGH ha sabido defender los intereses de sus miembros y ha logrado salir adelante con sus retos mejorando la proyección hacia sus socios y aumentando la nómina de los mismos que ven en esta institución el interés por defender sus derechos y ayudarles en su desarrollo. La FENAGH ha ido cobrando cada vez un papel más protagónico y dinámico, logrando también, alianzas importantes con instituciones afines y tratados comerciales con la visión de ser la Institución líder e integradora que propicie las condiciones para el desarrollo de un sector agropecuario fuerte, competitivo y exitoso. Hoy por hoy FENAGH es el organismo cúpula del Sector agropecuario de Honduras y actualmente está gestionando importantes leyes a fin de expandir las capacidades del gremio y de potenciar cada vez más a nuestro sector.</p>
      </PostContainer>
    </Layout>
  )
}

export default HistoryPage
