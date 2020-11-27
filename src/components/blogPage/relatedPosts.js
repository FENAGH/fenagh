import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { ButtonLink, Container, FlexContainer } from '../globals'

const RelatedPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      relatedOne: file(relativePath: { eq: "related-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      relatedTwo: file(relativePath: { eq: "related-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      relatedThree: file(relativePath: { eq: "related-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return (
    <Box 
      as="section" 
      bg="brandBG" 
      w="100%" 
      h="100%"
      pt="112px"
      pb="112px"
    >
      <Container pt="1rem" pb="3rem" textAlign="center">
        <Heading 
          as="h3" 
          fontSize="3rem"
          letterSpacing="1px" 
          fontWeight="normal"
          lineHeight="1.2"
        >Articulos Relacionados</Heading>
        <FlexContainer spaceBetween pt="3rem" pb="6rem">
          <Box 
            w="32%"
            maxW="760px"
          >
            <Box mb="2rem">
              <Img
                alt="Blog Post" 
                fluid={data.relatedOne.childImageSharp.fluid}
                style={{
                  width: "100%",
                  height: "538px"
                }}
              />
            </Box>
            <Text textAlign="left" fontSize="xl" fontWeight="500" pr="100px">Companies Battling Climate Change</Text>
          </Box>
          <Box 
            w="32%"
            maxW="760px"
          >
            <Box mb="2rem">
              <Img
                alt="Blog Post" 
                fluid={data.relatedTwo.childImageSharp.fluid}
                style={{
                  width: "100%",
                  height: "538px"
                }}
              />
            </Box>
            <Text textAlign="left" fontSize="xl" fontWeight="500" pr="100px">Companies Battling Climate Change</Text>
          </Box>
          <Box 
            w="32%"
            maxW="760px"
          >
            <Box mb="2rem">
              <Img
                alt="Blog Post" 
                fluid={data.relatedThree.childImageSharp.fluid}
                style={{
                  width: "100%",
                  height: "538px"
                }}
              />
            </Box>
            <Text textAlign="left" fontSize="xl" fontWeight="500" pr="100px">Companies Battling Climate Change</Text>
          </Box>
        </FlexContainer>
        <Flex justifyContent="center">
          <ButtonLink brand>ver todos</ButtonLink>
        </Flex>
      </Container>
    </Box>
  )
}

export default RelatedPosts