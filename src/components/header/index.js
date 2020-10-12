import React, { useEffect, useState, useRef } from 'react'
import { Box } from "@chakra-ui/core";
// Components
import TopBar from './topbar';
import BottomBar from './bottombar';


export default function(){
	const [showOnScroll, setShowOnScroll] = useState(false)
	const headerRef = useRef(null)
	useEffect(() => {
		const elementHeight = headerRef.current.offsetHeight
		const hanldeScroll = () => {
			const currentScrollY = window.scrollY;
			if(elementHeight < currentScrollY && !showOnScroll){
				setShowOnScroll(true)
			}
			if(elementHeight > currentScrollY && showOnScroll){
				setShowOnScroll(false) 
			}
		}
		window.addEventListener('scroll', hanldeScroll, { passive: true })
		return ()=> window.removeEventListener('scroll', hanldeScroll)
	}, [showOnScroll])
  
    return (
      <Box 
        ref={headerRef}
        as="header"
        w="100%"
        h={{base: "52px", lg:"107px"}}
				zIndex="1000"
				pos={{base: "fixed", lg: "unset"}}
      >
				<TopBar />
        <BottomBar showOnScroll={showOnScroll} />
      </Box>
    )
  }
  