import React from 'react';
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled';

const Logos = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    .gatsby-image-wrapper{
      position: relative;
      overflow: hidden;
      margin: 0 1rem 1.55rem;
      width: 100%;
      max-width: 60px;
      opacity: .7;
    }
    @media (min-width: 1024px){
      .gatsby-image-wrapper{
        margin: 0 1.325rem 1.55rem;
        max-width: 200px;
      }
    }
  }
`

function dataWithImage(WrappedComponent){
  return props => (
    <StaticQuery
      query={graphql`
        query {
          partners: allFile(
            filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "partners"}}
          ) {
            edges {
              node {
                base
                childImageSharp {
                  fluid(
    maxWidth: 400
    quality: 100
    sizes: "(max-width: 1024px) 60px, 200px"
  )  {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          imagen01: file(
            relativePath: { eq: "Convencion_2023_1.jpeg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imagen02: file(
            relativePath: { eq: "Convencion_2023_2.jpeg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          
        }
      `

    }
    
      render={ data => <WrappedComponent {...props} imageData={data} /> }
    />
  )
}

const Convencion = dataWithImage(props => (
  <>
    <div
      style={{
    paddingTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "800px",
    textAlign: "center",
  }}
    >
      <h2
        style={{
          fontSize: "46px",
          fontWeight: "900",
          letterSpacing: "2px",
          margin: "10px 0 0",
          color: "#1a1a1a",
        }}
      >
        ASAMBLEA 2026
      </h2>

      <h3
        style={{
          fontSize: "20px",
          fontWeight: "700",
          letterSpacing: "3px",
          color: "#2e7d32",
          margin: "5px 0 30px",
        }}
      >
        PATROCINADORES
      </h3>
    </div>

    <Logos>
      <div>
        {props.imageData.partners.edges.map(({ node: { base, childImageSharp } }) => (
          <Img key={base} fluid={childImageSharp.fluid} />
        ))}
      </div>
    </Logos>
  </>
))

export { Convencion }