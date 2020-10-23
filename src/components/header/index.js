import React, { useState } from 'react'
import { Link } from 'gatsby';
import { Box, Button, Flex, PseudoBox } from "@chakra-ui/core";
import { MdChevronRight } from 'react-icons/md'
// Components
import { Container, FlexContainer } from '../globals';
import Logo from '../logo';
import MenuItems from './menuItems';

const ToggleMobileMenu = ({handleToggle}) => (
  <Box 
		onClick={handleToggle}
    display={{ base: "block", lg: "none" }} 
    cursor="pointer"
    p=".7rem 1rem"
		pos="fixed"
		right="0"
		top="0"
		zIndex="21"
  >
    <svg
      fill="#0d0e11"
      width="30px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </Box>
)

const MobileNav = ({show}) => (
	<Box
		bg="#fff"
		boxShadow={show ? "rgba(51, 51, 51, 0.5) 0px 0px 30px -15px" : "rgba(51, 51, 51, 0) 0px 0px 30px -15px"}
		transform={show ? "translateX(0%)" : "translateX(100%)"}
		w={{base: "calc(2.5vw * 36)", md: "calc(2.5vw * 21)"}}
		h="auto"
		pl="calc(2.5vw * 2.5)"
		
		zIndex="20"
		transition="box-shadow 200ms ease-in-out 0s, opacity 200ms ease-in-out 0s, transform 200ms ease-in-out 0s"

		pos="fixed"
		top="0"
		right="0"
		
		display={{ base: "flex", lg: "none" }} 
		flexDir="column"

		style={{
			inset:"0px 0px 0px auto",
		}}
	>
		<Flex
			h="50px"
			flexDir="row"
			alignItems="center"
		>
			<Box
				as={Link}
				to="/"
			>
				<Logo />
			</Box>
		</Flex>
		<Box
			as="nav"
			flexGrow="2"
			overflow="hidden scroll"
			scrollbarWidth="thin"
			pos="absolute"
			top="50px"
			bottom="calc(30px + 20vw)"
			w="100%"
		>
			<Box 
				as="ul"
				role="menubar"
				margin="0"
				listStyleType="none"
				pt="calc(2.5vw * 1)"
				pb={{base: "calc(2.5vw * 14)", md: "0"}}
			>
				<Box 
					as="li"
					py="calc(2.5vw * 1.25)"
				>
					<Button 
						variant="link"
						rightIcon={MdChevronRight}
						color="rgb(13, 14, 17)"
						fontSize="14px"
						letterSpacing="0.25px"
						py="10px"
					>
						Product
					</Button>
				</Box>
				<Box 
					as="li"
					py="calc(2.5vw * 1.25)"
				>
					<Button 
						variant="link"
						rightIcon={MdChevronRight}
						color="rgb(13, 14, 17)"
						fontSize="14px"
						letterSpacing="0.25px"
						py="10px"
					>
						Education
					</Button>
				</Box>
				<Box 
					as="li"
					py="calc(2.5vw * 1.25)"
				>
					<Button 
						variant="link"
						rightIcon={MdChevronRight}
						color="rgb(13, 14, 17)"
						fontSize="14px"
						letterSpacing="0.25px"
						py="10px"
					>
						Blog
					</Button>
				</Box>
				<Box 
					as="li"
					py="calc(2.5vw * 1.25)"
				>
					<Button 
						variant="link"
						rightIcon={MdChevronRight}
						color="rgb(13, 14, 17)"
						fontSize="14px"
						letterSpacing="0.25px"
						py="10px"
					>
						Community & Events
					</Button>
				</Box>
				<Box 
					as="li"
					py="calc(2.5vw * 1.25)"
				>
					<Button 
						variant="link"
						rightIcon={MdChevronRight}
						color="rgb(13, 14, 17)"
						fontSize="14px"
						letterSpacing="0.25px"
						py="10px"
					>
						Enterprise
					</Button>
				</Box>
			</Box>
		</Box>
		<Box
			display={{base: "flex", md: "none"}}
			alignItems="center"
			pl="calc(2.5vw * 2.5)"
			w={{base: "calc(2.5vw * 36)", md: "calc(2.5vw * 21)"}}
			h="calc(30px + 20vw)"
			zIndex="30"
			pos="fixed"
			style={{
				inset:"auto 0px 0px auto"
			}}
		>
			<Box 
				as="a" 
				href="#"
				h="45px"
				lineHeight="45px"
				bg="#3A8537"
				color="#fff"
				px="1.2rem"
				fontSize="14px"
				fontWeight="600"
				textTransform="uppercase"
			>Iniciar Sesión</Box>
		</Box>
		<Box
			pointerEvents="none"
			h="auto"
			w="100%"
			position="fixed"
			zIndex="30"
			style={{
				inset:"50px 0px 0px auto",
			}}
		>
			<Box 
				background="rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%) repeat scroll 0% 0%"
				h="calc(2.5vw * 2)"
				pos="absolute"
				left="0"
				right="0"
				top="0"
				pointerEvents="none"
				zIndex="22"
				transform="rotate(180deg)"
			/>
			<Box 
				background="rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%) repeat scroll 0% 0%"
				h="calc(2.5vw * 6)"
				pos="absolute"
				left="0"
				right="0"
				bottom="calc(30px + 20vw)"
				pointerEvents="none"
				zIndex="22"
			/>
		</Box>
	</Box>
)


export default function(){
	const [show, setShow] = useState(false);
	const handleToggle = () => setShow(!show);
	
	return (
		<PseudoBox
			as="header"
			backgroundColor="#fff"
			position="fixed"
			zIndex="20"
			w="100%"
		>
			<Container>
				<FlexContainer justifyContent="space-between">
					<Box 
						display="flex" 
						alignItems="center"
						minH="50px"
					>
						<Box 
							as="figure"
							opacity={show ? "0.5" : "1"}
							mr="2rem"
							transition="filter 200ms ease-in-out 0s"
							style={show  ? { filter:  "blur(0.125rem)" } : {}}
						>
							<Box
								as={Link}
								to="/"
							>
								<Logo />
							</Box>
						</Box>
						<MenuItems />
					</Box>

					<PseudoBox
						as="a"
						href="#"
						display={{base: "none", md: "inline-block"}}
						h={{md: "50px", lg: "60px"}}
						lineHeight={{md: "50px", lg: "60px"}}
						bg="#3A8537"
						color="#fff"
						px="1.2rem"
						fontSize="14px"
						fontWeight="600"
						textTransform="uppercase"
						mr={{md: "2rem", lg: "0"}}
					>
						Iniciar Sesión
					</PseudoBox>

					<ToggleMobileMenu handleToggle={handleToggle}/>
					
					<MobileNav show={show}/>

					<Box
						display={{base: "block", lg: "none"}}
						background="rgb(0, 0, 0) none repeat scroll 0% 0%"
						pos="fixed"
						top="0px"
						left="0px"
						bottom="0px"
						w="100%"
						zIndex="18"
						opacity={show ? "0.22" : "0"}
						pointerEvents="none"
						transition="opacity 200ms ease-in-out 0s"
					/>
						
				</FlexContainer>
			</Container>
		</PseudoBox>
	)
}
  