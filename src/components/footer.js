import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import { Box, Flex, PseudoBox } from '@chakra-ui/core'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'
// Components
import { Container, FlexContainer } from './globals'
import Logo from './logo'

const FooterLinks = () => {
  return(
    <StaticQuery
      query={graphql`
        query FooterNavigationLinks {
          site {
            siteMetadata {
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={ data => (
        <React.Fragment>
          {data.site.siteMetadata.menuLinks.map(({name, link}) => (
            <Box 
              as={Link}
              key={name}
              to={link}
              flex={{base:"0 0 50%", sm:"0 0 20%", md:"0 0 11.1111%"}}
              maxWidth={{base:"50%", sm:"20%", md:"11.1111%"}}
              pt={{base: "2rem", md: "0"}}
            >  
              {name}
            </Box>
          ))}
        </React.Fragment>
      )}
    />
  )
}



function Footer() {
  const icons = [
    {id: 0, icon: FaFacebookF},
    {id: 1, icon: FaInstagram},
    {id: 2, icon: FaTwitter},
    {id: 3, icon: FaLinkedinIn},
  ]
  return (
    <Box 
      as="footer"
      backgroundColor="#262626"
      color="white"
      w="100%"
    >
      <Container>
        <FlexContainer py="4rem" flexWrap="wrap" justifyContent="flex-start">
          <Box 
            as="span" 
            flex={{md:"0 0 33.33333%"}}
            width="100%"
            maxWidth={{md:"33.33333%"}}
          >
            <Logo white/>
          </Box>
          <FooterLinks />
        </FlexContainer>
      </Container>
      <Box
        backgroundColor="#1f1f1f"
        py="1.5rem"
        w="100%"
      >
        <Container>
          <FlexContainer 
            spaceBetween
            fontSize="14px"
          >
            <Box as="span">
              © {new Date().getFullYear()} FENAGH
            </Box>
            <Flex>
            {icons.map( ({id, icon}) => (
              <PseudoBox 
                key={id}
                as={Link} 
                to="/"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px solid rgba(60, 62, 66, 0.5)"
                borderRadius="50%"
                w="2rem"
                h="2rem"
                _notLast={{mr:"1.5rem"}}
              >
                <PseudoBox as={icon}/>
              </PseudoBox>
            ))}
            </Flex>
          </FlexContainer>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
