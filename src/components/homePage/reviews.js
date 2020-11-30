import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Heading, Flex } from '@chakra-ui/react'
// Components
import { ButtonLink, Container } from '../globals'

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query {
      reviewsImage: file(relativePath: { eq: "cows.png" }) {
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
      mt="-1.5rem"
      pos="relative"
    >
      <Box w="100%">
        <Img
          alt="FENAGH campo de vacas" 
          fluid={data.reviewsImage.childImageSharp.fluid}
          w="100%"
        />
      </Box>
      <Flex
        flexDir="column"
        maxW="810px"
        w="100%"
        textAlign="center"
        align="center"
        pos="absolute" 
        right="50%"
        top="150px"
        transform="translateX(50%)"
      >
        <Heading 
          as="h3" 
          size="xl"
          fontSize={{base: "3rem", lg: "4rem"}}
          lineHeight="1.2"
          letterSpacing="1px"
          mb="2rem"
        > 
          World-changing flavor starts on your plate. Get cooking.
        </Heading>
        <ButtonLink brand>our produce</ButtonLink>
      </Flex>
    </Container>
  );
};

export default Reviews;   