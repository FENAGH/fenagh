import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { Box } from '@chakra-ui/core';
// Components
import MenuItem from './menuItem'

const MenuItems = ({show}) => {
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
          display={{base:"none", md: show ? "flex" : "none", lg: "flex"}}
          w="100%"
          h={{md:"60px", lg: "auto"}}
          px={{md: "2em", lg: "0"}}
          borderTop={{base: "2px solid #3a8537", lg: "0px transparent"}}
          pos={{md: "absolute", lg: "initial"}}
          top="52px"
          left="0"
          bottom="0"
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