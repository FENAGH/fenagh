import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Logos = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    .gatsby-image-wrapper {
      position: relative;
      overflow: hidden;
      margin: 0 1rem 1.55rem;
      width: 100%;
      max-width: 60px;
      opacity: 0.7;
    }
    @media (min-width: 1024px) {
      .gatsby-image-wrapper {
        margin: 0 1.325rem 1.55rem;
        max-width: 200px;
      }
    }
  }
`

function dataWithImage(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query {
          partners: allFile(
            filter: {
              extension: { regex: "/(png)/" }
              relativeDirectory: { eq: "partners" }
            }
          ) {
            edges {
              node {
                base
                childImageSharp {
                  fluid(
                    maxWidth: 400
                    quality: 100
                    sizes: "(max-width: 1024px) 60px, 200px"
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }

          imagen01: file(relativePath: { eq: "Convencion2026/imagen01.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imagen02: file(relativePath: { eq: "Convencion2026/imagen02.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imagen03: file(relativePath: { eq: "Convencion2026/imagen03.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imagen04: file(relativePath: { eq: "Convencion2026/imagen04.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imagen05: file(relativePath: { eq: "Convencion2026/imagen05.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imagen06: file(relativePath: { eq: "Convencion2026/imagen06.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imagen07: file(relativePath: { eq: "Convencion2026/imagen07.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imagen08: file(relativePath: { eq: "Convencion2026/imagen08.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <WrappedComponent {...props} imageData={data} />}
    />
  )
}

const Convencion = dataWithImage(props => (
  <>
    <h2>ASAMBLEA 2026</h2>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img
            fluid={props.imageData.imagen01.childImageSharp.fluid}
            alt="FENAGH convención 2026"
          />
        </div>
        <div className="content-media-item">
          <Img
            fluid={props.imageData.imagen02.childImageSharp.fluid}
            alt="FENAGH convención 2026"
          />
        </div>
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2026.</figure>
    </div>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img
            fluid={props.imageData.imagen03.childImageSharp.fluid}
            alt="FENAGH convención 2026"
          />
        </div>
        <div className="content-media-item">
          <Img
            fluid={props.imageData.imagen04.childImageSharp.fluid}
            alt="FENAGH convención 2026"
          />
        </div>
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2026.</figure>
    </div>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img
            fluid={props.imageData.imagen05.childImageSharp.fluid}
            alt="FENAGH convención 2026"
          />
        </div>
        <div className="content-media-item">
          <Img
            fluid={props.imageData.imagen06.childImageSharp.fluid}
            alt="FENAGH convención 2026"
          />
        </div>
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2026.</figure>
    </div>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img
            fluid={props.imageData.imagen07.childImageSharp.fluid}
            alt="FENAGH convención 2026"
          />
        </div>
        <div className="content-media-item">
          <Img
            fluid={props.imageData.imagen08.childImageSharp.fluid}
            alt="FENAGH convención 2026"
          />
        </div>
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2026.</figure>
    </div>

    <h2>PATROCINADORES</h2>
    <Logos>
      <div>
        {props.imageData.partners.edges.map(
          ({ node: { base, childImageSharp } }) => (
            <Img key={base} fluid={childImageSharp.fluid} />
          )
        )}
      </div>
    </Logos>
  </>
))

export { Convencion }
