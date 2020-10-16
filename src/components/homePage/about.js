import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Flex, Heading, PseudoBox, Text } from '@chakra-ui/core'
// Components
import { Container, FlexContainer } from '../globals'
import Img from "gatsby-image"

const LeftBlock = () => (
	<Box
		w="100%"
		display="block"
		flex={{md: "0 0 41.66666667%"}}
		maxWidth={{base: "100%", md:"41.66666667%"}}
		mb={{base: "40px", md: "0"}}
	>
		<Heading 
			as="h3" 
			color="#ef6123"
			fontSize="12px"
			textTransform="uppercase" 
			letterSpacing="0.2em"
		>
			sobre nosotros
		</Heading>
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
			mt="2.5rem"
		>
			There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
		</Text>
		<Flex
			flexDirection={{base: "column", sm: "row"}}
			alignItems={{sm: "center"}}
			my="40px"
		>
			<Flex 
				flexDirection={{base: "column", sm: "row"}}
				alignItems={{base: "flex-start", sm: "center"}}
			>
				<Flex
					bg="#eddd5e"
					color="#fff"
					fontSize="1.3rem"
					fontWeight="bold"
					borderRadius="50%"
					mr={{base: "0", sm: "10px"}}
					mb={{base: "10px", sm: "0"}}
					alignItems="center"
					justifyContent="center"
				>
					<Box
						h="50px"
						w="50px"
						lineHeight="50px"
						textAlign="center"
					>
						1
					</Box>
				</Flex>
				<Text
					fontSize="20px"
					fontWeight="600"
					m="0"
				>Growing Fruits and Vegetables</Text>
			</Flex>
			<Flex 
				flexDirection={{base: "column", sm: "row"}}
				alignItems={{base: "flex-start", sm: "center"}}
				ml={{sm: "18px"}}
				mt={{base: "18px", sm: "0"}}
			>
				<Flex
					bg="#eddd5e"
					color="#fff"
					fontSize="1.3rem"
					fontWeight="bold"
					borderRadius="50%"
					mr={{base: "0", sm: "10px"}}
					mb={{base: "10px", sm: "0"}}
					alignItems="center"
					justifyContent="center"
				>
					<Box
						h="50px"
						w="50px"
						lineHeight="50px"
						textAlign="center"
					>
						2
					</Box>
				</Flex>
				<Text
					fontSize="20px"
					fontWeight="600"
					m="0"
				>Tips for Ripening your Fruits</Text>
			</Flex>
		</Flex>
		<Text color="#676767">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>
		<Box mt="2rem">
			<PseudoBox 
				as={Link}
				to="/" 
				bg="#3A8537"
				color="#fff" 
				textTransform="uppercase"
				fontWeight="500"
				borderRadius="md"
				display="inline-block"
				p="1.5rem 1.2rem"
			>
				continuar leyendo
			</PseudoBox>
		</Box>
	</Box>
)

const RightBlock = ({bigImage, smallImage}) => (
	<Box
		ml={{md: "12%", lg:"8.33333333%"}}
		w="100%"
		maxWidth="450px"
		pos="relative"
	>
		<Img fluid={bigImage} />
		<Box
			display={{base: "none", lg: "block"}}
			pos="absolute"
			right="170px"
			bottom="-112px"
			w="370px"
		>
			<Img fluid={smallImage} style={{width: "100%", borderRadius:"5px"}}/>
		</Box>
	</Box>
)

const About = () => {
	const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "about-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      },
			aboutImageSmall: file(relativePath: { eq: "about-2.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 370) {
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
			py="5rem"
		>
			<Container>
				<FlexContainer spaceBetween isResponsive>
					<LeftBlock />
					<RightBlock 
						bigImage={data.aboutImage.childImageSharp.fluid}
						smallImage={data.aboutImageSmall.childImageSharp.fluid}
					/>
				</FlexContainer>
			</Container>
		</Container>
	)
}

export default About