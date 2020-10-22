import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Box, Heading, PseudoBox } from '@chakra-ui/core'
// Components
import { Container } from '../globals'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container
      fluid
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
        zIndex="2"
      >
        <Heading
          as="h1"
          fontSize={{base: "4rem", md:"5rem", lg:"7rem"}}
          lineHeight="1.1"
          fontFamily="bebas neue"
          mb="1rem"
        >
          CULTIVATE YOUR FUTURE
        </Heading>
        <PseudoBox
          as={Link}
          to="/"
          bg="#e2b51e"
          color="#000"
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
          p="1rem 1.5rem"
          transition="background-color .3s ease"
          _hover={{
            backgroundColor: "#d2a818",
          }}
        >
          Learn more
        </PseudoBox>
      </Box>
      <Box w="100%" pos="relative">
        <Img fluid={data.file.childImageSharp.fluid} style={{width: "100%"}}/>
        <Box 
          w="100%"
          h="100%"
          backgroundColor="rgb(0,0,0)"
          background="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"
          pos="absolute"
          bottom="0"
        />
      </Box>
    </Container>
  )
}

export default Hero 