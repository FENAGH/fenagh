import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby';
import { Box, Button, PseudoBox } from "@chakra-ui/core";
// Components
import { Container, FlexContainer } from '../globals';
import Logo from '../logo';
import MenuItems from './menuItems';

const ToggleMobileMenu = ({handleToggle}) => (
  <Box 
    display={{ base: "block", lg: "none" }} 
    backgroundColor="#3A8537"
    cursor="pointer"
    p=".7rem 1rem"
    mr={{base: "-1rem", md: "-2rem"}}
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
)


export default function(){
	const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
	// const [scrolling, setScrolling] = useState(false)
	// useEffect(() => {
	// 	const onScroll = () => {
	// 		if(window.pageYOffset > 0) {
	// 			setScrolling(true);
	// 		}else{
	// 			setScrolling(false);
	// 		}
  //   };
  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
	// }, [scrolling])
	
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
					>
						<Box
							as={Link}
							to="/"
							mr={{base: "0", md:"2rem"}}
						>
							<Logo />
						</Box>
						<MenuItems />
						<ToggleMobileMenu handleToggle={handleToggle}/>
					</Box>
					<PseudoBox
						as="a"
						href="#"
						h="60px"
						lineHeight="60px"
						bg="#3A8537"
						color="#fff"
						px="1.2rem"
						fontSize="14px"
						fontWeight="600"
						textTransform="uppercase"
					>
						Iniciar Sesión
					</PseudoBox>
				</FlexContainer>
			</Container>
		</PseudoBox>
	)
}
  