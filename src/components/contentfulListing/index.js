import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Box, Heading, Text } from '@chakra-ui/react'
// Components
import { Container } from '../globals'
import CardList from '../cardList'
import { CardWrapper } from '../card/styles'

const Article = ({title, excerpt, tag, image, slug}) => {
  return (
    <CardWrapper>
      <Link to={`/noticias-y-eventos/${slug}`}>
        <Box
          posinterevents="none" 
          zIndex="3" 
          pos="absolute" 
          top="0" 
          lef="0" 
          pt="66.5%" 
          w="100%"
          textAlign="center"
        >
          <Heading 
            as="h4"
            size="sm"
            fontWeight="normal"
            display="inline-block"
            mb="20px"
            letterSpacing="2px"
            pointerEvents="auto" 
            transform="translateY(-50%)"
          >
            <Box 
              as="span" 
              bg="brandGreen.50" 
              color="#fff"
              p="6px 14px 4px 14px"
              display="inline-block"
              userSelect="none"
              transition="background-color .267s ease, color .267s ease"
            >{tag}</Box>
          </Heading>
        </Box>
        <div className="card-image">
          <Img 
            fluid={image.fluid} 
            alt={image.title}
            style={{width:"100%", height: "260px"}}
          />
        </div>
        <Box px="10px" transform="translateZ(0)" textAlign="center">
          <Heading as="h3" fontSize={{base:"20px", lg: "28px"}} lineHeight="125%" fontWeight="regular" mb="6px">{title}</Heading>
          <Box mt="4px">
            <Text fontSize={{base: "12px", lg: "14px"}} lineHeight="150%">{excerpt.excerpt}</Text>
          </Box>
        </Box>
      </Link>
    </CardWrapper>
  )
}

const ContentfulListing = ({posts, intro}) => (
  <Container mt={{base: "50px", md: "100px"}}>
    {intro && (
      <Heading 
        as="h2"
        color="#000"
        fontSize={{base: "2rem", md: "2.4rem", lg: "2.8rem"}}
        fontWeight="light"
        letterSpacing="2px"
        lineHeight="1.1"
        textAlign="center"
        mb="30px"
      >{intro}</Heading>
    )}
    <CardList>
      {posts.nodes.map(({id, title, excerpt, image, tag, slug}) => (
        <Article 
          key={id}
          title={title}
          excerpt={excerpt}
          tag={tag}
          image={image}
          slug={slug}
        />
      ))}
    </CardList>
  </Container>
)

export default ContentfulListing