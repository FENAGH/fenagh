import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Flex, Heading, PseudoBox, Text } from '@chakra-ui/core'
import Img from "gatsby-image"
// Components
import { Container, FlexContainer } from '../globals'

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
			backgroundColor="#e6e1dd"
			pt="5rem"
		>
			<Container>
				<FlexContainer 
					spaceBetween 
					isResponsive
					alignItems="flex-start"
				>
					<Box
						w="100%"
						display="block"
						flex={{md: "0 0 41.66666667%"}}
						maxWidth={{base: "100%", md:"41.66666667%"}}
						mb={{base: "40px", md: "0"}}
						ml={{md: "12%", lg:"8.33333333%"}}
					>
						
						<Text
							color="#5a5957"
							fontSize="12px"
							fontWeight="bold"
							textTransform="uppercase" 
							letterSpacing="0.2em"
						>
							sobre nosotros
						</Text>
						<Heading 
							as="h2"
							fontFamily="Bebas Neue" 
							fontSize={{base: "3rem", lg: "4rem"}}
							textTransform="uppercase"
							mt="1rem"
						>
							We’re leader in agriculture market
						</Heading>
						<Text 
							color="#676767" 
							mt="1.5rem"
							mb="2rem"
						>
							There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
						</Text>
						<PseudoBox
							as={Link}
							to="/"
							bg="#e2b51e"
							color="#000"
							fontSize="sm"
							fontWeight="bold"
							textTransform="uppercase"
							p="1rem 1.5rem"
							transition="background-color .3s ease"
							_hover={{
								backgroundColor: "#d2a818",
							}}
						>
							Learn more
						</PseudoBox>
					</Box>
					<Box
						w="100%"
						maxWidth="460px"
						pos="relative"
						boxShadow="0px 15px 30px 0px rgba(0,0,0,.4)"
						zIndex="2"
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