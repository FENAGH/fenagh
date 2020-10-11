import React, { useState } from 'react';
import { Link } from 'gatsby'
import { Box } from '@chakra-ui/core';
import styled from "@emotion/styled";
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

const AnimatedBar = styled.div(({showOnScroll}) => ({
  backgroundColor:"#fff",
  position: showOnScroll ? "fixed" : "relative",
  top: showOnScroll && 0,
  left: showOnScroll && 0,
  zIndex:"1001",
  width:"100%",
  animation: showOnScroll && `${barSlideDown} .3s;`,
}))


const BottomBar = ({ showOnScroll }) => {
  const [show, setShow] = useState(false);
	
	const handleToggle = () => setShow(!show);
  return (
    <AnimatedBar showOnScroll={showOnScroll}>
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
            borderRight={{sm: "0px", md: "1px"}}
            borderRightColor={{sm:"transparent", md:"#d5dade"}}
          >
            <Logo />
          </Box>
          <MenuItems show={show}/>
          <MobileNav show={show}/>
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
        </Box>
      </Container>
    </AnimatedBar>
  );
}


export default BottomBar;