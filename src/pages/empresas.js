import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { Box } from "@chakra-ui/layout"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain } from "../components/globals"
import Hero from "../components/hero"

const DirectivePage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "administrativo.webp" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      dinant: file(relativePath: { eq: "logo-dinant.png" }) {
  childImageSharp {
    fluid(maxWidth: 600, quality: 100) {
      ...GatsbyImageSharpFluid
    }
  }
},
lacthosa: file(relativePath: { eq: "logo-lacthosa.png" }) {
  childImageSharp {
    fluid(maxWidth: 600, quality: 100) {
      ...GatsbyImageSharpFluid
    }
  }
},
molino: file(relativePath: { eq: "logo-molino-harinero.png" }) {
  childImageSharp {
    fluid(maxWidth: 600, quality: 100) {
      ...GatsbyImageSharpFluid
    }
  }
},
      
    
    }
  `)
  return (
    <Layout>
      <SEO title="Empresas" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-default hero-alignBottom"
        headline="Empresas"
        section="Afiliados"
      />
      <Constrain>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <Box 
            as={Img}
            fluid={data.dinant.childImageSharp.fluid}
            w={["100%", "calc(50% - 20px)",  "calc(25% - 20px)", "calc(20% - 25px)"]}
          />
          
        
          <Box 
            as={Img}
            fluid={data.molino.childImageSharp.fluid}
            w={["100%", "calc(50% - 20px)",  "calc(25% - 20px)", "calc(20% - 25px)"]}
          />
          
        
        </Box>
      </Constrain>
    </Layout>
  )
}

export default DirectivePage