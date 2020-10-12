import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { Box } from '@chakra-ui/core';
// Components
import MenuItem from './menuItem'

const MenuItems = () => {
  return(
    <StaticQuery
      query={graphql`
        query NavigationLinks { 
          site {
            siteMetadata {
              menuLinks {
                name
                link
                subMenu{
                  name,
                  link
                }
              }
            }
          }
        }
      `}
      render={ data => (
        <Box
          as="nav"
          backgroundColor={{base: "#fff", lg: "transparent"}}
          display={{base: "none", lg: "flex"}}
          w="100%"
        >
        {data.site.siteMetadata.menuLinks.map((menuLink, index) => (
          <MenuItem
            key={index} 
            link={menuLink.link} 
            value={menuLink.name}
            subMenu={menuLink.subMenu}
          />
        ))}
        </Box>
      )}
    />
  )
}

export default MenuItems;