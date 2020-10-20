import React from 'react'
import { Link } from 'gatsby'
import { Box, Text } from '@chakra-ui/core'
import { IoMdPin } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'
// Components
import { Container, FlexContainer } from '../globals'

const TopBar = () => (
	<Box 
		backgroundColor="#fafafa" 
		borderBottom="1px solid #d5dade"
		display={{base: "none", lg: "block"}}
	>
		<Container>
			<FlexContainer spaceBetween>
				<Box display="flex" alignItems="center">
					<Box as={IoMdPin} color="#3A8537" mr="5px"/>
					<Text fontSize=".8rem" fontWeight="bold" mr="2px">Tegucigalpa, Honduras</Text>
					<Box as={MdKeyboardArrowDown} />
				</Box>
				<Box display="flex" alignItems="center">
					<Box as="span" fontSize=".9rem" mr=".8rem">Registro Genalógico</Box>
					<Box 
						as={Link}
						to="/"
						display={{base: "none", md: "inline-block"}}
						backgroundColor="#3A8537"
						color="white"
						fontSize=".8rem"
						fontWeight="bold"
						textTransform="uppercase"
						letterSpacing=".2px"
						mr={{small: "-2rem", lg: 0}}
						p="1rem .8rem"
					>
						iniciar sesión
					</Box>
				</Box>
			</FlexContainer>
		</Container>
	</Box>
)

export default TopBar;