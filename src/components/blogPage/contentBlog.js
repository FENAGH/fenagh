import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled'
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'

import { Heading, Text, Icon, Box, Flex, Link } from '@chakra-ui/react'
import { Container } from '../globals'

const Content = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 0 25px;
  font-size: 18px;
  line-height: 28px;
  &:first-child{
    &:first-letter{
      font-size: 52px;
      font-weight: 700;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: -.26px;
      float: left;
      margin-right: 15px;
    }
  }
  p{
    margin-bottom: 1.5rem;
    font-weight: 400;
  }
  h3 + p{
    margin-top: 18px;
  }
  a{
    color: #0212ee; 
    text-decoration: underline;
  }
`

const ContentBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      blogImage: file(relativePath: { eq: "blog-post-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 660) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container py="1rem">
      <Content>
        <Text>
          Thanksgiving might be a little, well…different this year. While our holiday season likely means less travel and guests, we’re viewing the end of 2020 as an opportunity to cook up something a little unexpected.
        </Text>
        <Text>
          Sure, we love the hearty and familiar flavors of Thanksgiving, but even the classics could use a refresh. In an effort to honor tradition while embracing this moment of change, we’ve created a few starter and salad recipes to share in your turkey dinner spotlight.
        </Text>
        <Heading 
          as="h3" 
          fontSize="3rem"
          letterSpacing="1px" 
          fontWeight="normal"
          lineHeight="1.2"
        >Creamy Yogurt-Feta Dip with Bowery Baby Romaine and Vegetables</Heading>
        <Text>
          Most of the lettuce grown in the Salinas Valley or in Yuma is grown on large, industrial farms whose environmentally-costly practices take a toll both on the quality of greens they produce and the long-term viability of the land. Lettuce grown in these large farms is aided by the liberal use of synthetic fertilizers, <a href="https://www.nytimes.com/2017/07/27/climate/nitrogen-fertilizers-climate-change-pollution-waterways-global-warming.html" target="_blank" rel="noopener noreferrer">which can cause harmful algae blooms</a> that reduce levels of oxygen and lead to dead zones. In order to support growth, these farms divert water from natural aquifers and rely heavily on the use of pesticides to protect against pests and other bacteria. However, extreme weather related to climate change is already making the lettuce harvest more unpredictable, and natural sources of irrigation like the Colorado River are rapidly drying up due to climate change, overuse, and poor management.
        </Text>
        <Text>
          <Img 
            fluid={data.blogImage.childImageSharp.fluid}
            alt="Image blog"
          />
        </Text>
        <Text>Traditional lettuce grown in California or Arizona has to be shipped across the country in trucks like these, often taking up to two weeks in transport.</Text>
        <Text>Once ready for harvest, conventional lettuce is machine-picked and processed, which can cause <a href="https://www.nytimes.com/2017/07/27/climate/nitrogen-fertilizers-climate-change-pollution-waterways-global-warming.html" target="_blank"  rel="noopener noreferrer">quality issues and waste from mechanical damage</a>. Because it’s grown outdoors with pesticides, conventional lettuce is often triple-washed to reduce the risk of contamination like that which caused the <a href="https://www.nytimes.com/2017/07/27/climate/nitrogen-fertilizers-climate-change-pollution-waterways-global-warming.html" target="_blank"  rel="noopener noreferrer">recent E. Coli outbreak</a> — an incredibly water costly process. It’s then vacuum cooled, packaged, and picked up by long-haul refrigerated diesel trucks that transport it thousands of miles across the country. Once it reaches its destination, it’s handed off to multiple short-haul distributors, who eventually deliver it to retailers.</Text>
        <Text>Today, with more people prioritizing local produce, transparent supply chains, and sustainable growing practices, agricultural standards are changing. At Bowery, we are proud to be part of this movement towards a more responsible food system.</Text>
        <Box
          borderTop="1px solid rgba(9,33,14,.2)"
          mt="60px"
          mb="140px"
        >
          <Box
            mt="40px"
          >
            <Box 
              as="span"
              fontSize="12px"
              lineHeight="20px"
              letterSpacing="2px"
              mb="2rem"
            >COMPARTELO EN TUS REDES</Box>
            <Flex
              maxW="200px"
              h="100%"
              mt="20px"
              justify="space-between"
            >
              <Link
                w="56px"
                h="56px"
                borderRadius="50%"
                background="brandGreen.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                target="_blank"
                href="facebook.com"
              >
                <Icon as={FaFacebookF} color="brandGreen.30" boxSize={6}/>
              </Link>
              <Link
                w="56px"
                h="56px"
                borderRadius="50%"
                background="brandGreen.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                target="_blank"
                href="facebook.com"
              >
                <Icon as={FaTwitter} color="brandGreen.30" boxSize={6}/>
              </Link>
              <Link
                w="56px"
                h="56px"
                borderRadius="50%"
                background="brandGreen.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                target="_blank"
                href="facebook.com"
              >
                <Icon as={FaWhatsapp} color="brandGreen.30" boxSize={6}/>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Content>
    </Container>
  )
}

export default ContentBlog