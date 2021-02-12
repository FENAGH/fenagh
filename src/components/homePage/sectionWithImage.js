import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import { SectionWrapperWithBackground } from '../globals'

export const SectionWithImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imageLogo: file(relativePath: {eq: "el_campo_nos_alimenta.png"}){
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return  (
    <SectionWrapperWithBackground
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
    >
      <div className="image-holder">
        <Img fluid={data.imageLogo.childImageSharp.fluid} />
      </div>
    </SectionWrapperWithBackground>
  )
}

export default SectionWithImage;