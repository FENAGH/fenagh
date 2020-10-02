import React from 'react'
import { Box, Heading, Image, Text } from '@chakra-ui/core'

export const Hero = () => {
  return (
    <Box
      as="section"
      pos="relative"
      backgroundColor="#63b746"
    >
      <Box
        color="#fff"
        pos={{md:"absolute"}}
        left={{md: "2rem", lg:"3rem"}}
        top={{md:"50%"}}
        transform={{md:"translateY(-50%)"}}
        p={{base: "4rem 1rem 1rem", md: "0"}}
        w={{base: "100%", md:"400px", lg:"500px"}}
      >
        <Heading
          as="h1"
          fontSize={{base: "4rem", md:"5rem", lg:"7rem"}}
          lineHeight="1.1"
          fontFamily="bebas neue"
        >
          CULTIVATE YOUR FUTURE
        </Heading>
        <Text>Be the provider of choice in financial services for our customers, communities and, stakeholders, recognized for its innovation, its agri-finance focus and its high ethical standards.</Text>
      </Box>
      <Box 
        as="figure"
        pt={{md:"20%", lg:"5rem"}}
      >
        <picture>
          <source 
            type="image/png" 
            srcSet={require('../../images/hero_image_mobile@2x.png')} 
            media="(max-width:768px)"
          />
          <source 
            type="image/png" 
            srcSet={require('../../images/hero_image_desktop@2x.png')} 
            media="(min-width:769px)"
          />
          <Image 
            alt="Fenagh Honduras" 
            src={require('../../images/hero_image_desktop@2x.png')} 
            w="95%"
            m="0 auto"
          />
        </picture>
      </Box>
    </Box>
  )
}
