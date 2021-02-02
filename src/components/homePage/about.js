import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Box, Heading, Text } from '@chakra-ui/react'
// Components
import Img from "gatsby-image"
import { Condensed, Container } from '../globals'

const About = () => {
	const data = useStaticQuery(graphql`
		query {
      mobile: file(relativePath: { eq: "about-sm.webp" }) {
        childImageSharp {
          fluid(maxWidth: 520, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tablet: file(relativePath: { eq: "about-md.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktop: file(
        relativePath: { eq: "about.webp" }
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
		<Container fluid>
				<Box textAlign="center" maxW="620px" m="0 auto" mt="100px" >
					<Heading
						as="h4"
						color="brandGreen.50"
						fontSize={{base: "14px", md:"16px"}}
						fontWeight="light"
						letterSpacing="0.2em"
						mb="1rem"
					>
						sobre nosotros
					</Heading>
					<Heading 
						as="h2"
						color="#000"
						fontSize={{base: "2rem", md: "2.6rem", lg: "3.2rem"}}
						letterSpacing="1px"
						lineHeight="1.1"
					>somos el organismo cúpula <br/>del sector agropecuario</Heading>
					<Text mt="1.5rem" fontSize={{base: "14px", md: "16px"}}>Hoy por hoy <strong>FENAGH</strong> es el organismo cúpula del Sector agropecuario de <strong>Honduras</strong> y actualmente está gestionando importantes leyes a fin de expandir las capacidades del gremio y de potenciar cada vez más a nuestro sector.</Text>
			</Box>
			<Box w="100%">
				<Img 
					fluid={sources} 
					style={{width:"100%"}}
				/>
			</Box>
		</Container>
	)
}

export default About