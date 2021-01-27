import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Box, Button, ButtonGroup, Heading, Text } from '@chakra-ui/react'
// Components
import Img from "gatsby-image"
import { Container, ButtonLink } from '../globals'

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
			<Box 
				w="100%" 
				minH="100vh" 
				pos="relative" 
				display="flex" 
				alignItems="center" 
				justifyContent="center" 
				mt={{base: "50px", md: "200px"}}
			>
				<Box w="100%" mt="250px">
					<Img 
						fluid={sources} 
						style={{width:"100%"}}
					/>
				</Box>
				<Box w={{base: "90vw", md: "70vw",lg: "50vw"}} pos="absolute" top="0px">
					<Box textAlign="center">
						<Text
							color="brandGreen.50"
							fontSize={{base: "10px", md:"12px"}}
							fontWeight="bold"
							textTransform="uppercase" 
							letterSpacing="0.2em"
							mb="1rem"
						>
							sobre nosotros
						</Text>
						<Heading 
							as="h2"
							color="#000"
							fontSize={{base: "2rem", md: "2.8rem", lg: "4rem"}}
							fontSize={{base: "2rem", md: "2.6rem", lg: "3.2rem"}}
							letterSpacing="2px"
							lineHeight="1.1"
						>somos el organismo cúpula <br/>del sector agropecuario</Heading>
						<Text mt="1.5rem" mb="2rem" fontSize={{base: "sm", md: "md", lg: "lg"}}>Hoy por hoy <strong>FENAGH</strong> es el organismo cúpula del Sector agropecuario de Honduras y actualmente está gestionando importantes leyes a fin de expandir las capacidades del gremio y de potenciar cada vez más a nuestro sector.</Text>
						<Box>
							<ButtonLink path="/historia" mb={{base: "1rem", md: "0"}} mr={{base: "0", md: "1rem"}}>Nuestra Historia</ButtonLink>
							<ButtonLink path="/objetivos" inverted>Objetivos</ButtonLink>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	)
}

export default About