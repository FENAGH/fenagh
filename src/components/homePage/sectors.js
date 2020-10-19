import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import { Box, Heading, PseudoBox, Text } from '@chakra-ui/core'
// Components
import { Container, FlexContainer } from '../globals'
// Styles
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

const CustomSliderStyles = styled(Slider)`
  .slick-arrow{
    /* New custom styles */
    display: block;
    background-position: 9px;
    background-repeat: no-repeat;
    background-size: 2rem;
    background-color: transparent;
    border: .2rem solid #3A8537;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    outline: 0;
    transition: background-color .3s ease, border-color .3s ease;
    /* Disabled old arrow icons */
    &:before, &:after{
      content: none;
    }
  }
  .slick-prev.slick-disabled, .slick-arrow.slick-disabled{
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ddd' d='M13.449 12.111l-7.86 7.59a1.916 1.916 0 0 0-.048 2.716 1.93 1.93 0 0 0 2.717.047l9.234-8.918c.386-.372.583-.862.59-1.354.01-.492-.17-.988-.542-1.374L8.622 1.584a1.93 1.93 0 0 0-2.716-.049 1.916 1.916 0 0 0-.047 2.717l7.59 7.86z'/%3E%3C/svg%3E");
    border-color: #ddd;
    cursor: default;
    &:hover{
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ddd' d='M13.449 12.111l-7.86 7.59a1.916 1.916 0 0 0-.048 2.716 1.93 1.93 0 0 0 2.717.047l9.234-8.918c.386-.372.583-.862.59-1.354.01-.492-.17-.988-.542-1.374L8.622 1.584a1.93 1.93 0 0 0-2.716-.049 1.916 1.916 0 0 0-.047 2.717l7.59 7.86z'/%3E%3C/svg%3E");
      background-color: transparent;
    }
  }
  .slick-prev, .slick-next{
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%233A8537' d='M13.449 12.111l-7.86 7.59a1.916 1.916 0 0 0-.048 2.716 1.93 1.93 0 0 0 2.717.047l9.234-8.918c.386-.372.583-.862.59-1.354.01-.492-.17-.988-.542-1.374L8.622 1.584a1.93 1.93 0 0 0-2.716-.049 1.916 1.916 0 0 0-.047 2.717l7.59 7.86z'/%3E%3C/svg%3E");
    &:hover{
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M13.449 12.111l-7.86 7.59a1.916 1.916 0 0 0-.048 2.716 1.93 1.93 0 0 0 2.717.047l9.234-8.918c.386-.372.583-.862.59-1.354.01-.492-.17-.988-.542-1.374L8.622 1.584a1.93 1.93 0 0 0-2.716-.049 1.916 1.916 0 0 0-.047 2.717l7.59 7.86z'/%3E%3C/svg%3E");
      background-color: #3A8537;
    }
  }
  .slick-prev{
    transform: rotate(180deg);
    transform-origin: center 12px;
    z-index: 1;
    left: 25px;
  }
  .slick-next{
    right: 25px;
  }
`

const CustomSlider = ({slides}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  }
  return(
    <CustomSliderStyles {...settings}>
      {slides.map(({node: {base, childImageSharp}}) => (
        <Box 
          key={base}
          pos="relative"
          px="1rem"
          borderRadius="sm"
          overflow="hidden"
        >
          <Img 
            fluid={childImageSharp.fluid} 
            alt={`sector ${base.split(".")[0]}`}
            style={{width: "100%"}}
          />
          <Box
            backgroundColor="rgb(0,0,0)"
            background="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"
            w="calc(100% - 32px)"
            h="80%"
            pos="absolute"
            bottom="0"
          >
            <Heading 
              as="h3" 
              color="#fff"
              size="lg" 
              textTransform="capitalize"
              pos="absolute"
              left="1.5rem"
              bottom="1.5rem"
            >
              {base.split(".")[0]}
            </Heading>
          </Box>
        </Box>
      ))}
    </CustomSliderStyles>
  )
}

const Sectors = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "sectors"}},
        limit: 3
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `) 
  return (
    <Container py="5rem" zIndex="10">
      <Box
        maxWidth="520px"
        textAlign="center"
        m="0 auto"
        mb="3rem"
      >
        <Text
          color="#ef6123"
          fontSize="12px"
          fontWeight="bold"
          textTransform="uppercase" 
          letterSpacing="0.2em"
        >
          sobre nosotros
        </Text>
        <Heading 
          as="h2"
          fontFamily="Bebas Neue" 
          fontSize={{base: "3rem", lg: "4rem"}}
          textTransform="uppercase"
          mt="1rem"
        >
          sectores representados
        </Heading>
      </Box>
      <FlexContainer 
        flexWrap="wrap"
        mx={{md: "-15px"}}
      >
        {data.allFile.edges.map(({node: {base, childImageSharp}}) => (
          <Box
            key={base}
            w="100%"
            flex={{md: "0 0 33.333333%"}}
            maxW={{md: "33.333333%"}}
            borderRadius="md"
            px={{md: "15px"}}
            mb="2.5rem"
            maxW="520px"
            
          >
            <PseudoBox
              as={Link}
              to={`/sectores/${base.split(".")[0]}`}
              display="block"
              borderRadius="md"
              pos="relative"
              overflow="hidden"
            >
              <Img 
                fluid={childImageSharp.fluid} 
                alt={`sector ${base.split(".")[0]}`}
                style={{width: "100%"}}
              />
              <Box 
                w="100%"
                h="80%"
                backgroundColor="rgb(0,0,0)"
                background="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"
                pos="absolute"
                bottom="0"
              />
              <Box
                pos="absolute"
                bottom="40px"
                left="40px"
              >
                <Heading 
                  as="h3"
                  color="#fff"
                  fontFamily="Bebas Neue" 
                  size="2xl"
                  fontWeight="500"
                  zIndex="1"
                >Sector <br/> {base.split(".")[0]}</Heading>
              </Box>
            </PseudoBox>
          </Box>
        ))}
        <Box mt="2rem">
          <PseudoBox 
            as={Link}
            to="/" 
            bg="#3A8537"
            color="#fff" 
            textTransform="uppercase"
            fontWeight="500"
            borderRadius="md"
            display="inline-block"
            p="1.5rem 1.2rem"
          >
            Ver Todos los Sectores
          </PseudoBox>
        </Box>
      </FlexContainer>
    </Container>
  )
}

export default Sectors