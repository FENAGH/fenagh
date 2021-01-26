import React from 'react';
import { Box } from '@chakra-ui/react';
// Components
import MenuItem from './menuItem'

const MenuItems = ({scrolling, links}) => (
  <Box
    as="nav"
    backgroundColor={{base: "#fff", lg: "transparent"}}
    display={{base: "none", lg: "flex"}}
  >
  {links.map((menuLink, index) => (
    <MenuItem
      key={index} 
      link={menuLink.link} 
      value={menuLink.name}
      subMenu={menuLink.subMenu}
      scrolling={scrolling}
    />
  ))}
  </Box>
)

export default MenuItems;