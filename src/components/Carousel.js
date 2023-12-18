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
        filter: { relativeDirectory: { eq: "revista1" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {data.allFile.edges.map(({ node }) => (
        <div key={node.id}>
          <Img fluid={node.childImageSharp.fluid} alt="Imagen de la revista" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
