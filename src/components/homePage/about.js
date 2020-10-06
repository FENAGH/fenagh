import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, PseudoBox, Text } from '@chakra-ui/core'
import { FaLongArrowAltRight } from 'react-icons/fa'
// Components
import { Container, FlexContainer } from '../globals'

const About = () => (
	<Container fluid backgroundColor="#fafafa">
		<Container>
			<FlexContainer spaceBetween>
				<Box>
					<Box>
						<Heading as="h3" textTransform="uppercase" fontSize="12px" color="#ef6123">
							Sobre Nosotros
						</Heading>
						<Heading as="h2" fontFamily="Bebas Neue" size="2xl">Texto de Introducción</Heading>
						<Text color="#676767">Be the provider of choice in financial services for our customers, communities and, stakeholders, recognized for its innovation, its agri-finance focus and its high ethical standards.</Text>
						<PseudoBox 
							as={Link}
							to="/" 
							color="#3A8537" 
							display="flex"
							alignItems="center"
							textTransform="uppercase"
							fontSize="12px"
							fontWeight="bold"
						>
							Continuar leyendo
							<PseudoBox as={FaLongArrowAltRight} size="1rem" ml="6px"/>
						</PseudoBox>
					</Box>
				</Box>
			</FlexContainer>
		</Container>
	</Container>
)

export default About