import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Heading, Text } from '@chakra-ui/react'
// Components
import Img from "gatsby-image"
import { ButtonLink, Container, FlexContainer } from '../globals'

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
    <Box w="100%"> 
      <Box maxW="100%" mb="2rem">
        <Img fluid={data.file.childImageSharp.fluid} style={{width: "100%"}}/>
      </Box>
      <Box>
        <Box as={Link} to="/blog">
          <Heading as="h3" fontSize="2rem" lineHeight="1.2" fontWeight="normal" mb="1rem">Ethical kinfolk meditation kale chips, celiac blog hammock selvage williamsburg echo park godard tousled. </Heading>
        </Box>
        <Text color="rgba(0,0,0,0.8)" mb="1rem">Palo santo kitsch salvia tbh. Pok pok banh mi pickled copper mug adaptogen tousled echo park next level vape affogato ennui flannel vegan venmo. Messenger bag craft beer brunch vice, af lomo blog hexagon farm-to-table cliche.</Text>
        <Text fontSize="0.8rem" color="#3a8537" fontWeight="medium">
          <Box as="span" mr="5px" color="rgba(0,0,0,0.6)" fontWeight="bold">Topics:</Box>
          Lorem ipsum, Dolor Quantum
        </Text>
      </Box>
    </Box>
  )
}

const News = () => (
  <Box bg="brandBG" py="6rem">
    <Container>
      <FlexContainer alignItems="flex-start">
        <Box
          flex="0 0 50%"
          maxWidth="50%"
          pr="2rem"
          borderRight="1px solid #ddd9d1"
        >
          <FeaturedArticle />
        </Box>
        <Box
          flex="0 0 33.3333%"
          maxWidth="33.3333%"
          pl="2rem"
        >
          {fakePosts.map(post => (
            <Box
              key={post.id}
              borderBottom="1px solid #ddd9d1"
              pb="2rem"
              mb="2rem"
            >
              <Box
                as={Link}
                to="/"
              >
                <Heading 
                  as="h3" 
                  fontSize="1.6rem" 
                  fontWeight="normal" 
                  lineHeight="1.2"
                  mb="1rem" 
                >{post.title}</Heading>
              </Box>
              <Text fontSize="0.8rem" color="brandGreen.50" fontWeight="medium">
                <Box as="span" mr="5px" color="rgba(0,0,0,0.6)" fontWeight="bold">Topics:</Box>
                {post.topics}
              </Text>
            </Box>
          ))}
          <ButtonLink brand fullWidth>Ver Todo</ButtonLink>
        </Box>
      </FlexContainer>
    </Container>
  </Box>
)

export default News