import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Heading, Text } from '@chakra-ui/react'
import Img from "gatsby-image"
// Components
import { Container } from '../globals'
import CardList from '../cardList'
import { CardWrapper } from '../card/styles'

const fakePosts = [
  {
    id: 0, 
    title: "Photo essay: In the kitchen of Mère Brazier", 
    body: "Photographer Etienne Maury offers a rare behind-the-scenes glimpse of a legendary Lyonnais kitchen.",
    tag: "evento"
  },
  {
    id: 1, 
    title: "The perfect day in Shanghai", 
    body: "Scour the markets, get your fill of dumplings, and take in the sights of this hypermodern Chinese megalopolis.",
    tag: "noticia"
  },
  {
    id: 2, 
    title: "Photo essay: the tattoo artists of Shanghai", 
    body: "Shanghai is the center of China’s burgeoning ink scene.",
    tag: "evento"
  },
  {
    id: 3, 
    title: "The perfect day in Santa Fe", 
    body: "Grab a burrito and stroll around the railroad yards, restaurants, and groovy art installations of Santa Fe.",
    tag: "noticia"
  },
  {
    id: 4, 
    title: "EME ALFONSO ON OLD AND NEW CHALLENGES FOR CUBAN MUSICIANS", 
    body: "Eme Alfonso on Cuban music education, new challenges for Cuban musicians, and growing up as the daughter of Cuban rock royalty.",
    tag: "noticia"
  },
]

const Article = ({title, body, tag}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "post-placeholder.webp" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <CardWrapper>
      <Link to="/">
        <Box
          posinterEvents="none" 
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
            fluid={data.file.childImageSharp.fluid} 
            style={{width:"100%"}}
          />
        </div>
        <Box px="10px" transform="translateZ(0)" textAlign="center">
          <Heading as="h3" fontSize={{base:"20px", lg: "28px"}} lineHeight="125%" fontWeight="regular" mb="6px">{title}</Heading>
          <Box mt="4px">
            <Text fontSize={{base: "12px", lg: "14px"}} lineHeight="150%">{body}</Text>
          </Box>
        </Box>
      </Link>
    </CardWrapper>
  )
}

const News = () => (
  <Container mt={{base: "50px", md: "100px"}}>
    <Heading 
      as="h2"
      color="#000"
      fontSize={{base: "2rem", md: "2.4rem", lg: "2.8rem"}}
      fontWeight="light"
      letterSpacing="2px"
      lineHeight="1.1"
      textAlign="center"
      mb="30px"
    >Noticias Destacadas</Heading>
    <CardList>
      {fakePosts.map(data => (
        <Article 
          key={data.id}
          title={data.title}
          body={data.body}
          tag={data.tag}
        />
      ))}
    </CardList>
  </Container>
)

export default News