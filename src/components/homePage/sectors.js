import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import { Box, Heading } from '@chakra-ui/react'
// Components
import { Constrain } from '../globals'
// Styles
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Border from '../border'

const SliderBackgroundWrapper = styled(BackgroundImage)`
  position:relative;
  padding: 100px 0;
  width: 100%;
  background-color: #181818;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px){
    padding: 150px 0;
  }
`

const SliderWrapper = styled(Slider)`
  padding: 50px 0;
  margin-bottom: -50px;
  .slick-arrow{
    /* New custom styles */
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1.4rem;
    background-color: #fff;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    cursor: pointer;
    outline: 0;
    transition: transform .267s ease-out,opacity .267s ease-out;

    /* Disabled old arrow icons */
    &:before, &:after{
      content: none;
    }
  }
  .slick-prev.slick-disabled, .slick-arrow.slick-disabled{
    pointer-events: none;
    opacity: 0;
    cursor: default;
  }
  .slick-prev{
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M10 4q0.414 0 0.707 0.293t0.293 0.707q0 0.422-0.297 0.711l-5.289 5.289h15.586q0.414 0 0.707 0.293t0.293 0.707-0.293 0.707-0.707 0.293h-15.586l5.289 5.289q0.297 0.289 0.297 0.711 0 0.414-0.293 0.707t-0.707 0.293q-0.422 0-0.711-0.289l-7-7q-0.289-0.305-0.289-0.711t0.289-0.711l7-7q0.297-0.289 0.711-0.289z'/%3E%3C/svg%3E");
  }
  .slick-next{
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M14 4q0.422 0 0.711 0.289l7 7q0.289 0.289 0.289 0.711t-0.289 0.711l-7 7q-0.289 0.289-0.711 0.289-0.43 0-0.715-0.285t-0.285-0.715q0-0.422 0.289-0.711l5.297-5.289h-15.586q-0.414 0-0.707-0.293t-0.293-0.707 0.293-0.707 0.707-0.293h15.586l-5.297-5.289q-0.289-0.289-0.289-0.711 0-0.43 0.285-0.715t0.715-0.285z'/%3E%3C/svg%3E");
  }
  .slick-prev{
    top: calc(100% - 50px);
    left: 10px;
  }
  .slick-next{
    right: 10px;
    top: calc(100% - 50px);
  }
`

const CustomSlider = ({children}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
  return(
  <SliderWrapper {...settings}>{children}</SliderWrapper>
  )
}

const SliderCard = ({base, childImageSharp}) => (
  <Box
    w="100%"
    flex={{md: "0 0 33.333333%"}}
    px="10px"
    mb="2.5rem"
    maxW="520px"
  >
    <Box
      as={Link}
      // to={`/sectores/${base.split(".")[0]}`}
      to="/"
      display="block"
      pos="relative"
      overflow="hidden"
    >
      <Box w="100%" maxH="160px" overflow="hidden">
        <Img 
          fluid={childImageSharp.fluid} 
          alt={`sector ${base.split(".")[0]}`}
          style={{width: "100%"}}
        />
      </Box>
      <Heading 
        as="h3"
        color="#fff"
        fontFamily="Roboto" 
        size={{base: "sm", md: "md", lg: "lg"}}
        textTransform="capitalize"
        fontWeight="medium"
        zIndex="1"
        mt=".8rem"
      >Sector {base.split(".")[0]}</Heading>
    </Box>
  </Box>
)

const Sectors = () => {
  const data = useStaticQuery(graphql`
    query {
      sliderBg: file(relativePath: { eq: "sectors-bg.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      allFile(
        filter: {extension: {regex: "/(webp)/"}, relativeDirectory: {eq: "sectors"}}
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
    <SliderBackgroundWrapper
      Tag="section"
      fluid={data.sliderBg.childImageSharp.fluid}
      backgroundColor={`#000`}
    >
      <Border top/>
      <Constrain>
        <Heading 
          as="h2"
          color="#fff"
          fontSize={{base: "2rem", md: "2.6rem", lg: "3.2rem"}}
          fontWeight="light"
          letterSpacing="1px"
          lineHeight="1.1"
          textAlign="center"
        >Sectores Representados</Heading>
        <CustomSlider>
          {data.allFile.edges.map(({node: {base, childImageSharp}}) => (
            <SliderCard 
              key={base}
              base={base}
              childImageSharp={childImageSharp}
            />
          ))}
        </CustomSlider> 
      </Constrain>
      <Border bottom/>
    </SliderBackgroundWrapper>
  )
}

export default Sectors