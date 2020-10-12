import React, { useState } from 'react';
import { Link } from 'gatsby'
import { Box } from '@chakra-ui/core';
import { keyframes } from "@emotion/core"
// Components
import { Container } from '../globals';
import Logo from '../logo';
import MenuItems from './menuItems'
import MobileNav from '../mobileNav';

const barSlideDown = keyframes`
  0%  { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`

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

const BottomBar = ({ showOnScroll }) => {
  const [show, setShow] = useState(false);
	const handleToggle = () => setShow(!show);
  return (
    <Box 
      backgroundColor="#fff"
      position={{base: "fixed", lg: showOnScroll ? "fixed" : "relative"}}
      top={{base: 0, lg: showOnScroll ? 0 : "unset"}}
      left={{base: 0, lg: showOnScroll ? 0 : "unset"}}
      zIndex="1"
      w="100%"
      animation={{base: "none", lg: showOnScroll && `${barSlideDown} .3s`}}
    >
      <Container>
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent={{base: "space-between", lg: "flex-start"}}
        >
          <Box
            as={Link}
            to="/"
            pr={{base: "0", md:"5"}}
            mr={{base: "0", md:"5"}}
            borderRight={{sm: "0px transparent", lg: "1px solid #d5dade"}}
          >
            <Logo />
          </Box>
          <MenuItems />
          <MobileNav showNav={show}/>
          <ToggleMobileMenu handleToggle={handleToggle}/>
        </Box>
      </Container>
    </Box>
  );
}


export default BottomBar;