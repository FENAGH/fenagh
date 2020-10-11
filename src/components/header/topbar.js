import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@chakra-ui/core'
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
				<Box display="flex">
					Dirección
				</Box>
				<Box 
					as={Link}
					to="/"
					display={{base: "none", md: "inline-block"}}
					backgroundColor="#3A8537"
					color="white"
					fontSize="14px"
					fontWeight="medium"
					textTransform="uppercase"
					mr={{small: "-2rem", lg: 0}}
					p="0.8rem 1rem"
				>
					registro
				</Box>
			</FlexContainer>
		</Container>
	</Box>
)

export default TopBar;