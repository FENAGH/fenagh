import React from 'react';
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled';

const Logos = styled.div`
  max-width: 620px;
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
        max-width: 100px;
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
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          imagen01: file(
            relativePath: { eq: "convencion_2021_1.webp" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imagen02: file(
            relativePath: { eq: "convencion_2021_2.webp" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
        }
      `}
      render={ data => <WrappedComponent {...props} imageData={data} /> }
    />
  )
}

const Convencion = dataWithImage(props => (
  <>
    <h2>CONVENCIÓN 2021</h2>

    <p className="has-dropcap">La Federación Nacional de Agricultores y Ganaderos de Honduras <strong>(FENAGH)</strong> convocó a todas las asociaciones afiliadas a la <strong>LXXXVIII Convención Nacional Ordinaria en memoria del <em>“Sr. Roberto Gallardo Lardizábal”</em></strong>. Que se realizó en el Campo de Exposiciones de la Asociación de Ganaderos y Agricultores de Francisco Morazán <strong>(AGAFAM)</strong> el día <strong>jueves 15 de abril del 2021</strong> a partir de las 10:00 am.</p>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen01.childImageSharp.fluid} alt="FENAGH convención 2021"/>
        </div>
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen02.childImageSharp.fluid} alt="FENAGH convención 2021"/>
        </div>
      </div>
      <figure className="content-caption">Convención de la FENAGH 2021.</figure>
    </div>
    
    <h2>Patrocinadores</h2>
    <Logos>
      <div>
        {props.imageData.partners.edges.map(({node: {base, childImageSharp}}) => (
          <Img id={base} fluid={childImageSharp.fluid}/>
        ))}
      </div>
    </Logos>
  </>
))

export { Convencion }