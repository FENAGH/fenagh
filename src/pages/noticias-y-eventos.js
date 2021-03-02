import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Constrain } from "../components/globals"
import Hero from "../components/hero"
import ContentfulListing from "../components/contentfulListing"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "proyectos_page.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      posts: allContentfulBlogPost(limit: 20, sort: {fields: createdAt, order: ASC}) {
        nodes {
          id
          title
          tag
          slug
          excerpt {
            excerpt
          }
          createdAt
          image{
            title
            fluid(maxWidth: 620){
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <SEO title="Proyectos" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom"
        headline="Noticias y Eventos"
      />
      <Constrain>
        <ContentfulListing posts={data.posts}/>
      </Constrain>
    </Layout>
  )
}

export default ProjectsPage