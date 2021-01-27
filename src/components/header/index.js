import React, { useEffect, useRef, useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import { Box } from "@chakra-ui/react"
import styled from '@emotion/styled'
import { css } from '@emotion/react'
// Components
import { Container, FlexContainer } from '../globals'
import Logo from '../logo'
import MenuItems from './menuItems'
import MobileNav from '../mobileNav'

const PanelBackgorund = styled.div`
	background-color:#fff;
	position:fixed;
	top:0;
	left:0;
	width:100vw;
	height: 100vh;
	transform: scaleY(0);
	transition: transform .267s ease;
	transform-origin: 0 0;
	z-index: 1;
	${props => props.show && css`
		transform: scaleY(1);
	`}
	@media(min-width: 1024px){
    display: none;
  }
`

const ToggleMobileMenu = ({handleToggle, show}) => (
  <Box 
		onClick={handleToggle}
    display={{ base: "flex", lg: "none" }} 
    cursor="pointer"
    p=".5rem"
		right="0"
		top="0"
		zIndex="21"
		backgroundColor="#000"
    borderRadius="50%"
    w="40px"
    h="40px"
    alignItems="center"
    justifyContent="center"
  >
    <svg
      fill="#fff"
      w="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d={show ? "M19 4q0.43 0 0.715 0.285t0.285 0.715q0 0.422-0.289 0.711l-6.297 6.289 6.297 6.289q0.289 0.289 0.289 0.711 0 0.43-0.285 0.715t-0.715 0.285q-0.422 0-0.711-0.289l-6.289-6.297-6.289 6.297q-0.289 0.289-0.711 0.289-0.43 0-0.715-0.285t-0.285-0.715q0-0.422 0.289-0.711l6.297-6.289-6.297-6.289q-0.289-0.289-0.289-0.711 0-0.43 0.285-0.715t0.715-0.285q0.422 0 0.711 0.289l6.289 6.297 6.289-6.297q0.289-0.289 0.711-0.289z" : "M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z"} />
    </svg>
  </Box>
)

export default function(){
	const [show, setShow] = useState(false);
	const [ scrolling, setScrolling ] = useState(false)
	
	const data = useStaticQuery(graphql`
    query HeaderQuery {
			site {
				siteMetadata {
					menuLinks {
						name
						link
						subMenu{
							flayOutName,
							flayOutMenu{
								flayOutMenu_name,
								flayOutMenu_link
							}
						}
					}
				}
			}
    }
	`)
	
	const handleToggle = () => setShow(!show);

	const headerRef = useRef(null)

  useEffect(() => {
    const elementHeight = headerRef.current.offsetHeight
    const hanldeScroll = () => {
      const currentScrollY = window.scrollY;
      if(300 < currentScrollY && !scrolling){
        setScrolling(true)
      }
      if(elementHeight > currentScrollY && scrolling){
        setScrolling(false) 
      }
    }
    window.addEventListener('scroll', hanldeScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', hanldeScroll)
	}, [scrolling])	
	
	return (
		<Box
			as="header"
			ref={headerRef}
			position="fixed"
			bgColor={scrolling ? "#fff" : "transparent"}
			boxShadow={scrolling ? "rgb(0 0 0 / 5%) 0px 10px 20px" : ""}
			transition="background-color .3s ease"
			w="100%"
			zIndex="20"
			>
			<Container>
				<FlexContainer justifyContent="space-between" height="60px">
					<Box 
						display="flex" 
						alignItems="center"
						zIndex="30"
					>
						<Box as={Link} to="/">
							<Logo />
						</Box>
					</Box>
					<MenuItems 
						scrolling={scrolling} 
						links={data.site.siteMetadata.menuLinks}
					/>
					<ToggleMobileMenu 
						show={show} 
						handleToggle={handleToggle} 
					/>
					<MobileNav 
						show={show} 
						links={data.site.siteMetadata.menuLinks}
					/>
					<PanelBackgorund show={show} />
				</FlexContainer>
			</Container>
		</Box>
	)
}
  