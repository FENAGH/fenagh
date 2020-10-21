import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Heading, PseudoBox, Text } from '@chakra-ui/core'
// Components
import Img from "gatsby-image"
import { Container, FlexContainer } from '../globals'

const fakePosts = [
  {
    id: 0, 
    title: " Offal snackwave pork belly messenger bag tbh listicle poutine typewriter.", 
    topics: "Lorem ipsum, Dolor Quantum"
  },
  {
    id: 1, 
    title: "Fixie trust fund celiac 8-bit iPhone listicle occupy messenger bag.", 
    topics: "Lorem ipsum, Dolor Quantum"
  },
  {
    id: 2, 
    title: "Pok pok banh mi pickled copper mug adaptogen tousled echo park.", 
    topics: "Lorem ipsum, Dolor Quantum"
  },
]

const FeaturedArticle = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "post.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      } 
    }
  `)
  return(
    <Box
      w="100%"
    >
      <Box maxW="100%" mb="2rem">
        <Img fluid={data.file.childImageSharp.fluid} style={{width: "100%"}}/>
      </Box>
      <Box>
        <Box as={Link} to="/">
          <Heading as="h2" size="lg" mb="1rem">Ethical kinfolk meditation kale chips, celiac blog hammock selvage williamsburg echo park godard tousled. </Heading>
        </Box>
        <Text color="#676767" mb="1rem">Palo santo kitsch salvia tbh. Pok pok banh mi pickled copper mug adaptogen tousled echo park next level vape affogato ennui flannel vegan venmo. Messenger bag craft beer brunch vice, af lomo blog hexagon farm-to-table cliche.</Text>
        <Text fontSize="0.8rem" color="#3a8537" fontWeight="medium" mb="2.5rem">
          <Box as="span" mr="5px" color="#483e35" fontWeight="bold">Topics:</Box>
          Lorem ipsum, Dolor Quantum
        </Text>
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
    </Box>
  )
}

const News = () => (
  <Box bg="#faf6f1" py="6rem">
    <Container>
      <FlexContainer alignItems="flex-start">
        <Box
          flex="0 0 50%"
          maxWidth="50%"
        >
          <FeaturedArticle />
        </Box>
        <Box
          flex="0 0 33.3333%"
          maxWidth="33.3333%"
          pl="100px"
        >
          {fakePosts.map(post => (
            <Box
              key={post.id}
              borderBottom="2px solid #ddd9d1"
              pb="2rem"
              mb="2rem"
            >
              <Box
                as={Link}
                to="/"
              >
                <Heading as="h2" size="md" mb="1rem" lineHeight="1.4">{post.title}</Heading>
                <Text fontSize="0.8rem" color="#3a8537" fontWeight="medium">
                  <Box as="span" mr="5px" color="#483e35" fontWeight="bold">Topics:</Box>
                  {post.topics}
                </Text>
              </Box>
            </Box>
          ))}
          <Box
            as={Link}
            to="/"
            color="#3a8537"
            fontSize="md"
            fontWeight="bold"
          >
            View All Stories
          </Box>
        </Box>
      </FlexContainer>
    </Container>
  </Box>
)

export default News