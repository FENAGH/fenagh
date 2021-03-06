import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Box } from '@chakra-ui/react'
import AccordionItem from './accordionItem'

const MobileNavItem = ({link, value, subMenu}) => {
  const [ expanded, setExpanded ] = useState(false)

  return (
	<Box
		as="section"
		pos="relative"
		padding="0"
	>
		{ link ? (
			<Box 
				as={Link} 
				to={link}
				w="100%"
				py="8px"
				px={{base: "15px", md: "30px"}}
				fontFamily="Bebas neue, sans-serif"
				fontSize="1.2rem"
				letterSpacing="1px"
				display="inline-block"
			>{value}</Box>
		) : (
      <AccordionItem 
        expanded={expanded}
        setExpanded={setExpanded}
        value={value}
        subMenu={subMenu}
      />
		)}
	</Box>
)}

export default MobileNavItem