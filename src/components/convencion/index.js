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
            relativePath: { eq: "convencion_2022.jpeg" }
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
   <h2>ASAMBLEA 2022</h2>

    <p className="has-dropcap"> <strong></strong> <strong><em></em></strong> <strong></strong>  <strong></strong></p>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen01.childImageSharp.fluid} alt="FENAGH convención 2021"/> 
          <figure className="content-caption">Asamblea de la FENAGH 2022.</figure>
        </div>
       
        
      </div>
      
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