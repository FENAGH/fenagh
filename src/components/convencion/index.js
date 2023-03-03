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
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          imagen01: file(
            relativePath: { eq: "asamblea_2022_1.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imagen02: file(
            relativePath: { eq: "asamblea_2022_2.JPG" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imagen03: file(
            relativePath: { eq: "asamblea_2022_3.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
         
          imagen04: file(
            relativePath: { eq: "asamblea_2022_4.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imagen05: file(
            relativePath: { eq: "asamblea_2022_5.JPG" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imagen06: file(
            relativePath: { eq: "asamblea_2022_6.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },

          imagen07: file(
            relativePath: { eq: "asamblea_2022_7.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },

          imagen08: file(
            relativePath: { eq: "asamblea_2022_8.JPG" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },

          imagen09: file(
            relativePath: { eq: "asamblea_2022_9.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },

          imagen10: file(
            relativePath: { eq: "asamblea_2022_10.JPG" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },

          imagen11: file(
            relativePath: { eq: "asamblea_2022_11.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imagen12: file(
            relativePath: { eq: "asamblea_2022_12.JPG" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },

          imagen13: file(
            relativePath: { eq: "asamblea_2022_13.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },

          imagen14: file(
            relativePath: { eq: "asamblea_2022_14.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },

          imagen15: file(
            relativePath: { eq: "asamblea_2022_15.JPG" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },

          imagen16: file(
            relativePath: { eq: "asamblea_2022_16.JPG" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },

          imagen17: file(
            relativePath: { eq: "asamblea_2022_17.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },

          imagen18: file(
            relativePath: { eq: "asamblea_2022_18.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imagen19: file(
            relativePath: { eq: "Promocional_2023.jpeg" }
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

/*<h2>ASAMBLEA 2022</h2>*/

/* <p className="has-dropcap">La Federación Nacional de Agricultores y Ganaderos de Honduras <strong>(FENAGH)</strong> realizó su 89 asamblea <strong>LXXXIX Asamblea Nacional Ordinaria<em>“Ing. Justo René Martínez”</em></strong>en la Asociación de Ganaderos y Agricultores de Olacho<strong>(AGAO)</strong> el día <strong>viernes 1 de abril del 2022</strong> a partir de las 9:00 am. <br></br> El objetivo de la Asamblea fue dar a conocer a los agremiados las diversas actividades que ha realizado la Junta Directiva periodo 2021-2023 en pro del desarrollo y protección de los intereses de los productores a nivel nacional.    </p>

   <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen01.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div>
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen02.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div> 
        
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2022.</figure>
    </div>
    
    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen03.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div>
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen04.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div> 
       
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2022.</figure>
    </div>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen05.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div>
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen06.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div> 
       
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2022.</figure>
    </div>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen07.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div>
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen08.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div> 
       
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2022.</figure>
    </div>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen09.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div>
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen10.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div> 
       
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2022.</figure>
    </div>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen11.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div>
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen12.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div> 
       
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2022.</figure>
    </div>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen13.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div>
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen14.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div> 
       
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2022.</figure>
    </div>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen15.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div>
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen16.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div> 
       
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2022.</figure>
    </div>

    <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen17.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div>
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen18.childImageSharp.fluid} alt="FENAGH convención 2022"/>
        </div> 
       
      </div>
      <figure className="content-caption"> Asamblea de la FENAGH 2022.</figure>
    </div> */
<>
    <h2>ASAMBLEA 2023</h2>
</>
     /* <div className="content-media content-media--fullWidth content-media--double">
      <div className="content-media-items">
        <div className="content-media-item">
          <Img fluid={props.imageData.imagen19.childImageSharp.fluid} alt="FENAGH convención 2023"/>
        </div> 
       
      </div>
      <figure className="content-caption"> Promocional_2023.</figure> 
    </div>  
    

    <h2>Patrocinadores</h2>
   <Logos>
      <div>
        {props.imageData.partners.edges.map(({node: {base, childImageSharp}}) => (
          <Img id={base} fluid={childImageSharp.fluid}/>
        ))}
      </div>
    </Logos>*/
  
))

export { Convencion }