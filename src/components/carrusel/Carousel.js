import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import './Carousel.css'; 
const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "Revista3" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 1200, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    adaptiveHeight: false,
    lazyLoad: "ondemand", 
  }

  return (
    <div className="carousel-isolation">
  <Slider {...settings}>
    {data.allFile.edges.map(({ node }) => (
      <div key={node.id} className="carousel-slide">
        <Img
          fluid={node.childImageSharp.fluid}
          alt="Imagen de la revista"
          className="carousel-image"
          imgStyle={{ objectFit: 'contain' }}
        />
      </div>
    ))}
  </Slider>
</div>
  )
}

export default Carousel