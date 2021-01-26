import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Box } from '@chakra-ui/react'
import MobileNavItem from './navItem'

const MobileNavPanel = styled.section`
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	width:100vw;
	height: 100vh;
	pointer-events: none;
	opacity: 0;
	transition: opacity .267s ease;
	z-index:20;
	${props => props.show && css`
		opacity: 1;
		pointer-events: auto;
		transition-delay: .267s;
	`}
`

const MobileNav = ({show, links}) => (
  <MobileNavPanel show={show}>
    <Box
      transform="translateZ(0)"
      minWidth="calc(100vw + 30px)"
      w="100%"
      maxHeight="100%"
      h="100vh"
      pr="30px"
      overflowY="scroll"
    >
      <Box
        as="section"
        transform="translateZ(0)"
        mt="56px"
      >
        <Box 
          as="nav"
          pt="35px"
          pb="40px"
        >
        {links.map((menuLink, index) => (
          <MobileNavItem
            key={index} 
            indexValue={index}
            link={menuLink.link}
            value={menuLink.name}
            subMenu={menuLink.subMenu}
          />
        ))}
        </Box>
      </Box>
    </Box>
  </MobileNavPanel>
)

export default MobileNav