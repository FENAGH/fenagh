import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Icon, Image } from '@chakra-ui/react'
import { MdVerifiedUser } from 'react-icons/md'
import { ImArrowRight2 } from 'react-icons/im'
import Img from "gatsby-image"

import { CardWrapper } from './styles'

const Card = ({url, raza, ejemplar, featured, propietario, finca, especie}) => {
  const data = useStaticQuery(graphql`
    query {
      bovino: file(relativePath: { eq: "ejemplar-bovino-destacado.webp" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      equino: file(relativePath: { eq: "ejemplar-equino-destacado.webp" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(featured, especie)
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
              fluid={especie === "BOVINO" && featured ? data.bovino.childImageSharp.fluid : data.equino.childImageSharp.fluid}
              w={["100%", null, "80%"]}
              h={["auto", null, "100%"]}
              opacity="0.1"
            />
          </div>
        )}
      </div>
      <div className="card-content">
        <Link to="/">
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
        {featured && (
          <Box 
            as={Link} 
            to="/"
            color="#1d1d1d"
            fontFamily="Bebas neue, sans-serif"
            fontSize="1rem"
            letterSpacing="2px"
            lineHeight="100%"
            mt="6px"
            ml="-20px"
            p="12px 20px"
            position="relative"
            height="auto"
            display="inline-block"
            transition="color 0.267s ease"
            _hover={{
              color: "#15640f"
            }}
          >
            <Box 
              as="span"
              position="relative"
              zIndex="2"
              display="flex"
              alignItems="center"
            >
              <Box as="span">ver perfil</Box>
              <Icon as={ImArrowRight2} w={3} h={3} ml="2px"/>
            </Box>
          </Box>
        )}
      </div>
    </CardWrapper>
  )
}

export default Card