import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share'
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain, Content, FlexContainer } from '../components/globals'

const Blog = ({data}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      {/* <BlogPage /> */}
      <Box bg="#000" h="60px" pos="fixed" zIndex="10" left="0" top="0" w="100%" />
      <Box 
        as="section" 
        bg="brandBG" 
        w="100%" 
        h="100%"
        pt="120px"
        pb="60px"
        mb="124px"
      >
        <Box bg="#000" h="60px" pos="fixed" zIndex="10" left="0" top="0" w="100%" />
        <Constrain>
          <FlexContainer>
            <Box 
              w="50%"
              maxw="760px"
              h="400px"
              overflow="hidden"
            >
              <Img
                fluid={data.contentfulBlogPost.image.fluid} 
                alt={data.contentfulBlogPost.image.title}
                style={{ height: '100%'}}
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
              >
                {data.contentfulBlogPost.tag}
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
                {data.contentfulBlogPost.title}
              </Heading>
              <Box
                fontSize="16px"
                lineHeight="24px"
              >
                <Box as="span">{data.contentfulBlogPost.customDate}</Box>
              </Box>
            </Flex>
          </FlexContainer>
        </Constrain>
      </Box>
      <Constrain>
        <Content>
          {renderRichText(data.contentfulBlogPost.body)}
          {data.contentfulBlogPost.body.references.length > 1 ? (
            <div className="content-media content-media--fullWidth content-media--double">
              <div className="content-media-items">
                {data.contentfulBlogPost.body.references.map(reference => (
                  <div 
                    key={reference.contentful_id}
                    className="content-media-item"
                  >
                    <Img fluid={reference.fluid} alt={reference.title}/>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="content-pull">
              <div className="content-media">
                <div className="content-media-item">
                  <Img fluid={data.contentfulBlogPost.body.references[0]?.fluid} alt="Sector Lácteo"/>
                </div>
              </div>
            </div>
          )}
          <Box
            borderTop="1px solid rgba(9,33,14,.2)"
            mt="60px"
            mb="140px"
            maxW="620px"
            m="0 auto"
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
                <Box
                  as="span"
                  w="52px"
                  h="52px"
                  borderRadius="50%"
                  background="brandGreen.50"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  target="_blank"
                  href="facebook.com"
                >
                  <FacebookShareButton
                    url={`https://fenagh.netlify.app/noticias-y-eventos/${data.contentfulBlogPost.slug}`}
                    quote={data.contentfulBlogPost.title}
                  >
                    <Icon as={FaFacebookF} color="brandGreen.30" boxSize={6} mb="4px"/>
                  </FacebookShareButton>
                </Box>
                <Box
                  as="span"
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
                  <TwitterShareButton
                    url={`https://fenagh.netlify.app/noticias-y-eventos/${data.contentfulBlogPost.slug}`}
                    quote={data.contentfulBlogPost.title}
                  >
                    <Icon as={FaTwitter} color="brandGreen.30" boxSize={6} mb="4px"/>
                  </TwitterShareButton>
                </Box>
                <Box
                  as="span"
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
                   <WhatsappShareButton
                    url={`https://fenagh.netlify.app/noticias-y-eventos/${data.contentfulBlogPost.slug}`}
                    quote={data.contentfulBlogPost.title}
                  >
                    <Icon as={FaWhatsapp} color="brandGreen.30" boxSize={6} mb="4px"/>
                  </WhatsappShareButton>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Content>
      </Constrain>
    </Layout>
)
}

export default Blog

export const query = graphql`
  query BlogPost($id: String!) {
    contentfulBlogPost(id: {eq: $id}) {
      title
      tag
      slug
      customDate
      body{
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            fluid(maxWidth: 620) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
      image{
        title
        fluid(maxWidth: 720){
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`