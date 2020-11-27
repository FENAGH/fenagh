import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Container, FlexContainer } from '../globals'

const HeroBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      heroBlog: file(relativePath: { eq: "post-example.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box 
      as="section" 
      bg="brandBG" 
      w="100%" 
      h="100%"
      pt="60px"
      mb="124px"
    >
      <Container pt="1rem" pb="3rem">
        <FlexContainer>
          <Box 
            w="50%"
            maxw="760px"
          >
            <Img
              alt="Blog Post" 
              fluid={data.heroBlog.childImageSharp.fluid}
              w="100%"
            />
          </Box>
          <Flex 
            w="50%"
            flexDir="column"
            align="center"
            justify="center"
          >
            <Text
							color="brandGreen.50"
							fontSize="12px"
							fontWeight="bold"
							textTransform="uppercase" 
							letterSpacing="0.2em"
						>
							post subtexto
						</Text>
            <Heading 
              as="h1" 
              fontSize={{base: "2.5rem", md:"3.5rem"}}
              letterSpacing="1px" 
              lineHeight="1.2"
              maxW="500px"
              textAlign="center"
              m="24px 0"
            >
              Your Thanksgiving Line-Up Could Use More Greens
            </Heading>
            <Box
              fontSize="16px"
              lineHeight="24px"
            >
              <Box as="span">Noviembre 20, 2020</Box>
            </Box>
          </Flex>
        </FlexContainer>
      </Container>
    </Box>
  )
}

export default HeroBlog