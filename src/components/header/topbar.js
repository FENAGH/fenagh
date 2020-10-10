import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@chakra-ui/core'
// Components
import { Container, FlexContainer } from '../globals'

const TopBar = ({handleToggle}) => (
	<Box backgroundColor="#fafafa" borderBottom="1px solid #d5dade">
		<Container>
			<FlexContainer spaceBetween>
				<Box display="flex">
					Dirección
				</Box>
				<Box 
					display={{ sm: "block", md: "none" }} 
					backgroundColor="#3A8537"
					cursor="pointer"
					p=".7rem 1rem"
					mr="-1rem"
					onClick={handleToggle}
				>
					<svg
						fill="#fff"
						width="30px"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</Box>
				<Box 
					as={Link}
					to="/"
					display={{base: "none", md: "inline-block"}}
					mr={{small: "-2rem", lg: 0}}
					backgroundColor="#3A8537"
					color="white"
					fontSize="14px"
					fontWeight="medium"
					p="0.8rem 1rem"
				>
					Log In
				</Box>
			</FlexContainer>
		</Container>
	</Box>
)

export default TopBar;