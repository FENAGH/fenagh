import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { SectionWrapperWithBackground } from '../globals'

export const MisionAndVision = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
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
    </SectionWrapperWithBackground>
  )
}

export default MisionAndVision;