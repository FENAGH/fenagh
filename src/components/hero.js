import React from 'react'
import Img from "gatsby-image"
import { Box, Heading } from '@chakra-ui/react'
import { Container } from './globals'

const Hero = ({align, sources, taxonomyName, headline}) => {
  return (
    <Container 
      fluid
      pos="relative"
      maxH="calc(100vh - 10px);"
      overflow="hidden"
    >
      <Box
        w="100%"
        h="100%"
        pos="absolute"
        display="flex"
        flexDir="column"
        alignItems={align}
        justifyContent="flex-end"
        px={{base: "15px", md:"30px"}}
        pb={{base: "40px", lg:"60px"}}
        zIndex="10"
      >
        {taxonomyName && (
          <Heading 
            as="h4"
            display="inline-block"
            mb="20px"
            fontFamily="Roboto"
            fontSize="12px"
            lineHeight="22px"
            letterSpacing="1px"
            textTransform="uppercase"
          >
            <Box 
              as="span" 
              display="inline-block"
              bg="#fff"
              p="0 13px 0 14px"
              color="#232323"
            >{taxonomyName}</Box>
          </Heading>
        )}
        <Heading
          as="h1"
          color="#fff"
          fontSize={{base: "4rem", md:"5rem", lg: "6.2rem"}}
          fontWeight="light"
          lineHeight="1.1"
          maxW={{base:"90%", md:"60%"}}
        >{headline}</Heading>
      </Box>
      <Box w="100%" pos="relative">
        <Img fluid={sources} style={{width: "100%"}}/>
        <Box 
          w="100%"
          h="100%"
          backgroundColor="rgb(0,0,0)"
          background="linear-gradient(180deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,0) 100%)"
          pos="absolute"
          bottom="0"
        />
      </Box>
    </Container>
  )
}

export default Hero