import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Heading } from '@chakra-ui/react'
// Components
import { Container } from '../globals'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "home-sm.webp" }) {
        childImageSharp {
          fluid(maxWidth: 520, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tablet: file(relativePath: { eq: "home-md.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktop: file(
        relativePath: { eq: "home.webp" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const sources = [
    {
      ...data.mobile.childImageSharp.fluid,
      media: "(max-width: 520px)",
    },
    {
      ...data.tablet.childImageSharp.fluid,
      media: "(min-width: 521px) and (max-width: 1024px)",
    },
    {
      ...data.desktop.childImageSharp.fluid,
      media: `(min-width: 1025px)`,
    },
  ]
  return (
    <Container
      fluid
      pos="relative"
      h={{base: "175vw", md: "60.25vw"}}
      minH={{base: "150vw", md: "52.25vw"}}
      maxH="calc(100vh - 10px);"
      overflow="hidden"
    >
      <Box
        w="100%"
        h="100%"
        pos="absolute"
        display="flex"
        flexDir="column"
        // alignItems="center"
        justifyContent="flex-end"
        px={{base: "15px", md:"30px"}}
        pb={{base: "60px", lg:"100px"}}
        zIndex="10"
      >
        <Heading
          as="h1"
          color="#fff"
          fontSize={{base: "4rem", md:"5rem", lg: "7.2rem"}}
          fontWeight="light"
          lineHeight="1.1"
          maxW={{base:"90%", md:"76%"}}
        >
          Cultivando el <br />futuro de Honduras
        </Heading>
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

{/* <Box
  as="a"
  href="#about-us"
  p="0"
  color="#fff"
  border="0"
  bg="transparent"
  transition="color 0.267s ease"
  w="60px" 
  h="60px"
  userSelect="none"
  cursor="pointer"
  pos="relative"
  display="inline-flex"
  alignItems="center"
  justifyContent="center"
  mb="2rem"
>
  <Box 
    as="svg" 
    viewBox="0 0 24"
    display="inline-block"
    fill="currentColor"
    w="24px"
    h="24px"
    pos="relative"
    display="inline-block"
    zIndex="2"
  >
    <path d="M16.707 13.293c-0.391-0.391-1.023-0.391-1.414 0l-2.293 2.293v-7.586c0-0.552-0.447-1-1-1s-1 0.448-1 1v7.586l-2.293-2.293c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l4.707 4.707 4.707-4.707c0.391-0.391 0.391-1.023 0-1.414z" />
  </Box>
  <Box 
    pos="absolute"
    top="0"
    left="0"
    w="100%"
    h="100%"
    bgColor="brandGreen.50"
    borderRadius="50%"
  />
</Box> */}