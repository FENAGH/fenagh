import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Avatar, Box, Heading, Stack, Text } from '@chakra-ui/react';
import { ImQuotesLeft } from 'react-icons/im'
// Components
import { Container } from '../globals'

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
      <Box
        w="1024px"
        textAlign="center"
        pos="absolute" 
        right="50%"
        top="150px"
        transform="translateX(50%)"
      >
        <Box as={ImQuotesLeft} m="0 auto" fontSize="2rem" fill="#3a8537" mb="1rem"/>
        <Heading as="h2" size="xl" lineHeight="1.4" mb="1rem"> Fanny pack viral sustainable fixie beard mixtape pinterest franzen air plant shabby chic cronut vice vape art party four loko.</Heading>
        <Text fontSize="1.1rem" color="#676767" mb="2rem"> — Luiz Eduardo Villeda de Rezende (Industrias ACME)</Text>
        <Stack isInline justify="center" align="center" spacing="20px">
          <Avatar size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Avatar name="Ryan Florence" opacity="0.5" src="https://bit.ly/ryan-florence" />
          <Avatar name="Kent Dodds" opacity="0.5" src="https://bit.ly/kent-c-dodds" />
        </Stack>
      </Box>
      <Box w="100%">
        <Img
          alt="FENAGH campo de vacas" 
          fluid={data.reviewsImage.childImageSharp.fluid}
          w="100%"
        />
      </Box>
    </Container>
  );
};

export default Reviews;   