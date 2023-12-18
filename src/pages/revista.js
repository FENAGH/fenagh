import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from '../components/hero'
import { Content, Constrain } from "../components/globals"
import Carousel from "../components/Carousel"
const RevistaPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "registro_page.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      posts: allContentfulBlogPost(
        limit: 20, 
        sort: {order: DESC, fields: createdAt}
      ) {
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
      <SEO title="Revista" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom"
        headline="Revista FENAGH"
        section="Conócenos"
      />
      <Constrain>
      <Content>
          <section>
            <div className="page-meta__files">
              <span className="page-meta__files--title">ARCHIVOS DESCARGABLES: </span>
              <a 
                href='https://downloads.ctfassets.net/e4da5bv5j8g0/1o8puY09NtJLqoUJSnXeQv/1a5790bfbdb7dd5e404b2b241a4a275b/FENAGH_REVISTA_2023_.pdf'
                  download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
                Revista 1° Edición.
              </a>
              </div>
              </section>
              <Carousel/> 
      
        </Content>
      
        </Constrain>
    </Layout>
    
  )
  

}

export default RevistaPage