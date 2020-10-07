import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import { Box, Heading } from '@chakra-ui/core'
// Components
import { Container } from '../globals'
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
    float: left;
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
        >
          <Img 
            fluid={childImageSharp.fluid} 
            alt={base.split(".")[0]} 
            style={{width: "100%"}}
          />
          <Heading 
            as="h3" 
            color="#fff"
            size="lg" 
            textTransform="capitalize"
            pos="absolute"
            bottom="0"
          >
            {`sector ${base.split(".")[0]}`}
          </Heading>
        </Box>
      ))}
    </CustomSliderStyles>
  )
}

const Sectors = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "sectors"}}) {
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
    <Container py="5rem">
      <Box
        maxWidth="520px"
        textAlign="center"
        m="0 auto"
        mb="2rem"
      >
        <Heading 
          as="h3" 
          textTransform="uppercase" 
          fontSize="12px" 
          color="#ef6123"
        >
          sobre nuestros agremiados
        </Heading>
        <Heading 
          as="h2" 
          fontFamily="Bebas Neue" 
          fontSize="4rem"
          textTransform="uppercase"
          lineHeight="1"
          mt="1rem"
        >
          sectores representados
        </Heading>
      </Box>
      <CustomSlider slides={data.allFile.edges} />
    </Container>
  )
}

export default Sectors