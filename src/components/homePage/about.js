import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Heading, Text } from '@chakra-ui/react'
// Components
import Img from "gatsby-image"
import { ButtonLink, Container, FlexContainer } from '../globals'

const About = () => {
	const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
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
			backgroundColor="white"
			py="6rem"
		>
			<Container>
				<FlexContainer spaceBetween isResponsive>
					<Box
						w="100%"
						display="block"
						flex={{md: "0 0 41.66666667%"}}
						maxWidth={{base: "100%", md:"41.66666667%"}}
						mb={{base: "40px", md: "0"}}
						ml={{md: "12%", lg:"8.33333333%"}}
					>
						
						<Text
							color="brandGreen.50"
							fontSize="12px"
							fontWeight="bold"
							textTransform="uppercase" 
							letterSpacing="0.2em"
						>
							sobre nosotros
						</Text>
						<Heading 
							as="h2"
							color="#000"
							fontSize={{base: "3rem", lg: "4rem"}}
							textTransform="uppercase"
							letterSpacing="1px"
							lineHeight="1.1"
							mt="1rem"
						>
							We’re leader in agriculture market
						</Heading>
						<Text 
							color="rgba(0,0,0,0.5)"
							mt="1.5rem"
							mb="2rem"
						>
							There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
						</Text>
						<ButtonLink brand>Ver más</ButtonLink>
					</Box>
					<Box
						w="100%"
						maxWidth="460px"
						pos="relative"
					>
						<Img 
							fluid={data.file.childImageSharp.fluid} 
							style={{width:"100%"}}
						/>
					</Box>
				</FlexContainer>
			</Container>
		</Container>
	)
}

export default About