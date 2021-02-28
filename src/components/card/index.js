import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Icon, Image } from '@chakra-ui/react'
import { MdVerifiedUser } from 'react-icons/md'
import Img from "gatsby-image"

import { CardWrapper } from './styles'

const Card = ({url, raza, ejemplar, featured, propietario, finca}) => {
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "ejemplar-destacado.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <CardWrapper featured={featured}>
      <div className="card-image-wrapper">
        <div className="card-badge">
          <Icon as={MdVerifiedUser} w={8} h={8} fill="#fff"/>
        </div>
        <div className="card-image">
          <Image 
            src={url} 
            alt={`${raza} - ${ejemplar}`}
            w="100"
          />
        </div>
        {featured && (
          <div className="card-image-secondary">
            <Box
              as={Img}
              fluid={data.bgImage.childImageSharp.fluid} 
              w={["100%", null, "80%"]}
              h={["auto", null, "100%"]}
              opacity="0.1"
            />
          </div>
        )}
      </div>
      <Link to="/" className="card-content">
        <h2 className="card-content__title">
          <small className="card-content__title-intro">{raza}</small>
          {ejemplar}
        </h2>
        <div className="card-content__description">
          <p className="card-content__description--item">
            <span>Propietario:</span> {propietario}
          </p>
          <p className="card-content__description--item">
            <span>Finca:</span>{finca}
          </p>
        </div>
      </Link>
    </CardWrapper>
  )
}

export default Card