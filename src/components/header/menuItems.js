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
          display={{ base: show ? "block" : "none", md: "flex" }}
          listStyleType="none"
          zIndex="1001"
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