import React from 'react'
import { Box } from '@chakra-ui/react'
// Components
import { Constrain } from './globals'
import Logo from './logo'

function Footer() {
  return (
    <Box backgroundColor="brandGreen.70">
      <Constrain>
        <Box
          w="100%" 
          pos="relative"
          py={{base: "1rem", md: "2rem"}}
          display="flex"
          flexDir={{base: "column", md: "row"}}
          alignItems={{base: "flex-start",md: "center" }}
          justifyContent="space-between" 
          color="#fff"
          fontSize="12px"
          lineHeight="20px"
          fontWeight="bold"
        >
          <Box 
            order={{base: "3", md: "0"}}
            textAlign={{base: "center", md: "left"}}
            w={{base: "100%", md: "auto"}}
            borderTop={{base: "1px solid", md: "0px solid"}}
            borderTopColor={{base: "rgba(255, 255, 255, .3)", md: "transparent"}}
            mt={{base: "1rem", md: 0}}
            pt={{base: "1rem", md: 0}}
          >
            <Box as="span" opacity=".8">
              © {new Date().getFullYear()}, FENAGH todos los derechos reservados
            </Box>
          </Box>
          <Box 
            pos={{md: "absolute"}}
            left={{md: "50%"}}
            transform={{md: "translateX(-50%)"}}
            mb={{base: "1rem", md: "0"}}
          >
            <Logo white/>
          </Box>
          <Box textAlign={{md: "right" }} opacity=".8">
            <Box as="span" display="block">Col. Ruben Dario, Calle Real de Minas, Frente a Edificio El Faro</Box>
            <Box as="span" display="block">Casa 701, Tegucigalpa, Honduras</Box>
            <Box as="span" display="block">Tel. 3147-0400, 3215-6959</Box>
          </Box>
        </Box>
      </Constrain>
    </Box>
  )
}

export default Footer
