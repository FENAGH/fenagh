import React from "react"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogPage from "../components/blogPage"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <BlogPage />
  </Layout>
)

export default Blog