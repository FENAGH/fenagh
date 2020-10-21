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

const SliderWrapper = styled(Slider)`
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
    left: -10px;
  }
  .slick-next{
    right: -10px;
  }
`

const CustomSlider = ({children}) => {
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
  <SliderWrapper {...settings}>{children}</SliderWrapper>
  )
}

const SliderCard = ({base, childImageSharp}) => (
  <Box
    w="100%"
    flex={{md: "0 0 33.333333%"}}
    maxW={{md: "33.333333%"}}
    px={{md: "15px"}}
    mb="2.5rem"
    maxW="520px"
  >
    <PseudoBox
      as={Link}
      // to={`/sectores/${base.split(".")[0]}`}
      to="/"
      display="block"
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
        background="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
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
)

const Sectors = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "sectors"}}
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
    <Container 
      fluid
      bg="#e6e1dd"
      pt="5rem" 
      zIndex="10"
    >
      <Container>
        <FlexContainer 
          spaceBetween 
          isResponsive
          alignItems="flex-start"
          pt="2rem"
          mb="120px"
        >
          <Box
						w="100%"
						display="block"
						flex={{md: "0 0 41.66666667%"}}
            maxWidth={{base: "100%", md:"41.66666667%"}}
            ml={{md: "12%", lg:"8.33333333%"}}
						mb={{base: "40px", md: "0"}}
					>
            <Text
							color="#5a5957"
							fontSize="12px"
							fontWeight="bold"
							textTransform="uppercase" 
							letterSpacing="0.2em"
						>
							our innovation
						</Text>
						<Heading 
							as="h2"
							fontFamily="Bebas Neue" 
							fontSize={{base: "3rem", lg: "4rem"}}
							textTransform="uppercase"
							mt="1rem"
						>
							Sectores Representados
						</Heading>
          </Box>
          <Box>
            <Text 
							color="#676767" 
							mb="2.5rem"
						>
							There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable, there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
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
        </FlexContainer>
        <Box
          textAlign="center"
          m="0 auto"
          mb="3rem"
        >
          <Heading 
            as="h3"
            fontSize={{base: "1.1rem", lg: "1.5rem"}}
            mb=".5rem"
          >
            Where we started, and where we're heading
          </Heading>
          <Text color="#676767">
            We're continuing our strong legacy and mission lorem ipsum.
          </Text>
        </Box>
        <CustomSlider>
          {data.allFile.edges.map(({node: {base, childImageSharp}}) => (
            <SliderCard 
              key={base}
              base={base}
              childImageSharp={childImageSharp}
            />
          ))}
        </CustomSlider>
      </Container>
      <Box 
        bg="#000"
        w="100%"
        h="400px"
        mt="-300px"
      />
    </Container>
  )
}

export default Sectors