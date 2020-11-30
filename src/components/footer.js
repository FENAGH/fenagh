import React from 'react'
import { Box, Flex, IconButton, Input, List, ListItem, Text } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
// Components
import { Container, FlexContainer } from './globals'
import Logo from './logo'
import { Link } from 'gatsby'

const NewsLetter = () => (
  <Box
    pos="relative"
  >
    <Input 
      type="email" 
      placeholder="Correo electronico"
      fontSize="1.5rem"
      fontWeight="medium"
      lineHeight="32px"
      color="white !important"
      p="0 50px 0 0!important"
      w="100%"
      h="70px"
      display="flex"
      alignItems="center"
      background="transparent"
      border="none !important"
      borderBottom="1.5px solid #b9df3c !important"
      borderRadius="0 !important"
      outline="none !important"
      transition="border-bottom .2s cubic-bezier(1,0,0,1)"
      focusBorderColor="none"
    />
    <IconButton
      size="lg"
      aria-label="Registrate" 
      icon={<FaArrowRight />}
      color="brandGreen.30"
      pos="absolute"
      backgroundColor="transparent"
      border="none"
      right="0"
      top="50%"
      transform="translateY(-50%)"
      transition="right .2s cubic-bezier(1,0,0,1)"
      _hover={{
        backgroundColor: "transparent",
        right: "-5px"
      }}
      _focus={{
        boxShadow: "0 0 0 0 rgba(66, 153, 225, 0)"
      }}
      _active={{
        background: "transparent"
      }}
    />
  </Box>
)

function Footer() {
  return (
    <Box 
      as="footer"
      backgroundColor="brandGreen.70"
      color="white"
      w="100%"
    >
      <Container>
        <FlexContainer py="4rem" flexWrap="wrap" justifyContent="flex-start" alignItems="flex-start">
          <Box flex={{md:"0 0 50%"}} w={{md:"50%"}}>
            <Box
              w="100%"
              h="100%"
              maxW="394px"
              mb="48px"
            >
              <Box w="100%" h="auto">
                <Box mb="1rem">
                  <Text 
                    m="0" 
                    color="brandGreen.30" 
                    textTransform="uppercase" 
                    fontSize="sm" 
                    fontWeight="bold" 
                    letterSpacing="1px"
                  >
                    registrate para recibir noticias
                  </Text>
                </Box>
                <NewsLetter />
              </Box>
            </Box>
          </Box>
          <Box flex={{md:"0 0 50%"}} w={{md:"50%"}}>
            <Flex
              w="100%"
              h="100%"
              justify="flex-end"
              wrap="wrap"
            >
              <Box
                w="33.3333%"
              >
                <Box 
                  as="span"
                  display="block" 
                  color="brandGreen.30" 
                  textTransform="uppercase" 
                  fontSize="sm"
                  letterSpacing="1px"
                  fontWeight="bold" 
                  pb="1.5rem"
                >sobre fenagh</Box>
                <Box>
                  <List spacing={3}>
                    <ListItem fontWeight="bold">
                      <Link to="/">Historia</Link>
                    </ListItem>
                    <ListItem fontWeight="bold">
                      <Link to="/">Misión & Visión</Link>
                    </ListItem>
                    <ListItem fontWeight="bold">
                      <Link to="/">Objetivos</Link>
                    </ListItem>
                    <ListItem fontWeight="bold">
                      <Link to="/">Contactanos</Link>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box
                w="33.3333%"
              >
                <Box 
                  as="span"
                  display="block" 
                  color="brandGreen.30" 
                  textTransform="uppercase" 
                  fontSize="sm"
                  letterSpacing="1px"
                  fontWeight="bold" 
                  pb="1.5rem"
                >afiliados</Box>
                <Box>
                  <List spacing={3}>
                    <ListItem fontWeight="bold">
                      <Link to="/">Asociaciones</Link>
                    </ListItem>
                    <ListItem fontWeight="bold">
                      <Link to="/">Empresas</Link>
                    </ListItem>
                    <ListItem fontWeight="bold">
                      <Link to="/">Proyectos</Link>
                    </ListItem>
                    <ListItem fontWeight="bold">
                      <Link to="/">Convenios Firmados</Link>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box
                w="22%"
              >
                <Box 
                  as="span"
                  display="block" 
                  color="brandGreen.30" 
                  textTransform="uppercase" 
                  fontSize="sm"
                  letterSpacing="1px"
                  fontWeight="bold" 
                  pb="1.5rem"
                >otros</Box>
                <Box>
                  <List spacing={3}>
                    <ListItem fontWeight="bold">
                      <Link to="/">Cuota Pecuaria</Link>
                    </ListItem>
                    <ListItem fontWeight="bold">
                      <Link to="/">Noticias</Link>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Flex>
          </Box>
        </FlexContainer>
        <Flex align="center" w="100%" justify="space-between" pb="2rem" mt="10rem" pos="relative">
          <Box
            fontSize="12px"
            lineHeight="20px"
            letterSpacing="1px"
            textTransform="uppercase"
            fontWeight="bold"
          >
            © {new Date().getFullYear()}, FENAGH todos los derechos reservados
          </Box>
          <Box 
            pos="absolute"
            left="50%"
            transform="translateX(-50%)"
          >
            <Logo white/>
          </Box>
          <Box
            fontSize="12px"
            lineHeight="20px"
            letterSpacing="1px"
            textTransform="uppercase"
            fontWeight="bold"
          >
            blvd suyapa, casa 1707, Tegucigalpa, Honduras
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
