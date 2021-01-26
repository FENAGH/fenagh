import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { Box } from '@chakra-ui/react';
// Components
import MenuItem from './menuItem'

const MenuItems = ({scrolling}) => {
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
      `}
      render={ data => (
        <Box
          as="nav"
          backgroundColor={{base: "#fff", lg: "transparent"}}
          display={{base: "none", lg: "flex"}}
        >
        {data.site.siteMetadata.menuLinks.map((menuLink, index) => (
          <MenuItem
            key={index} 
            link={menuLink.link} 
            value={menuLink.name}
            subMenu={menuLink.subMenu}
            scrolling={scrolling}
          />
        ))}
        </Box>
      )}
    />
  )
}

export default MenuItems;