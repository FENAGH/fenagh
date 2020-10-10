import React from 'react';
import { Link } from 'gatsby'
import { Box } from '@chakra-ui/core';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core"
// Components
import { Container } from '../globals';
import Logo from '../logo';
import MenuItems from './menuItems'

const barSlideDown = keyframes`
  0%  { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`

const AnimatedBar = styled.div(({showOnScroll}) => ({
  backgroundColor:"#fff",
  position: showOnScroll && "fixed",
  top: showOnScroll && 0,
  left: showOnScroll && 0,
  zIndex:"1001",
  width:"100%",
  animation: showOnScroll && `${barSlideDown} .3s;`,
}))


const BottomBar = ({showOnScroll, show}) => {
  return (
    <AnimatedBar showOnScroll={showOnScroll}>
      <Container>
        <Box display="flex" alignItems="center">
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
        </Box>
      </Container>
    </AnimatedBar>
  );
}


export default BottomBar;