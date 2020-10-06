import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Heading, PseudoBox, Text } from '@chakra-ui/core'
import { FaLongArrowAltRight } from 'react-icons/fa'
// Components
import { Container, FlexContainer } from '../globals'
import Img from "gatsby-image"

const About = () => {
	const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "about-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
	return (
		<Container 
			fluid 
			as="section" 
			backgroundColor="#fafafa"
			py={{base: "2.5rem"}}
		>
			<Container>
				<FlexContainer spaceBetween isResponsive>
					<Box
						w="100%"
						display="block"
						flex={{base: "0 0 41.66666667%"}}
						maxWidth={{base: "100%", md:"41.66666667%"}}
						mb={{base: "40px", md: "0"}}
					>
						<Heading 
							as="h3" 
							textTransform="uppercase" 
							fontSize="12px" 
							color="#ef6123"
						>
							news of the week
						</Heading>
						<Heading 
							as="h2"
							fontFamily="Bebas Neue" 
							fontSize="4rem"
							textTransform="uppercase"
							lineHeight="1"
							mt="1rem"
						>
							our company is chanching
						</Heading>
						<Text 
							color="#676767" 
							mt="1rem"
						>
							Be the provider of choice in financial services for our customers, communities and, stakeholders, recognized for its innovation, its agri-finance focus and its high ethical standards.
						</Text>
						<PseudoBox 
							as={Link}
							to="/" 
							color="#3A8537" 
							textTransform="uppercase"
							fontSize="12px"
							fontWeight="bold"
							display="flex"
							alignItems="center"
							mt="2rem"
						>
							Continuar leyendo
							<PseudoBox as={FaLongArrowAltRight} size="1.2rem" ml="6px"/>
						</PseudoBox>
					</Box>
					<Box
						ml={{md:"8.33333333%"}}
						w="100%"
						maxWidth="540px"
					>
						<Img fluid={data.aboutImage.childImageSharp.fluid} style={{width: "100%"}}/>
					</Box>
				</FlexContainer>
			</Container>
		</Container>
	)
}

export default About