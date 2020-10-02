import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Text, PseudoBox } from '@chakra-ui/core'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
// Components
import { Container, FlexContainer } from './globals'
import Logo from './logo'

function Footer() {
  const links = [
    {id: 0, path: "/", value: "Sobre la FENAGH"},
    {id: 1, path: "/", value: "Secciones"},
    {id: 2, path: "/", value: "Registro Genealógico"},
  ]

  const icons = [
    {id: 0, icon: FaFacebookF},
    {id: 1, icon: FaLinkedinIn},
    {id: 2, icon: FaTwitter},
    {id: 3, icon: FaYoutube},
  ]
  return (
    <Box 
      as="footer"
      backgroundColor="#262626"
      color="white"
      w="100%"
    >
      <Container>
        <FlexContainer spaceBetween py="4rem">
          <Flex align="center">
            <Box as="span" mr="4rem">
              <Logo white/>
            </Box>
            <Box fontSize="14px">
              {links.map( link => (
                <PseudoBox 
                  as={Link}
                  key={link.id}
                  to={link.path}
                  _notLast={{mr:"1.5rem"}}
                >
                  {link.value}
                </PseudoBox>
              ))}
            </Box>
          </Flex>
          <Box>
            <Text mb=".5rem" fontSize="12px">Encuentranos en:</Text>
            <Flex>
              {icons.map( ({id, icon}) => (
                <PseudoBox 
                  as={Link} 
                  to="/"
                  _notLast={{mr:"1.5rem"}}
                >
                  <PseudoBox 
                    key={id}
                    as={icon}
                  />
                </PseudoBox>
              ))}
            </Flex>
          </Box>
        </FlexContainer>
      </Container>
      <Box
        backgroundColor="#1f1f1f"
        py="1.5rem"
        w="100%"
      >
        <Container 
          textAlign="center"
          fontSize="14px"
        >
          © FENAGH {new Date().getFullYear()}, Todos los derechos reservados
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
