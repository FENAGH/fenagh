import React from 'react'
// Components
import HeroBlog from './heroBlog'
import ContentBlog from './contentBlog'
import RelatedPosts from './relatedPosts'

const BlogPage = () => {
  return (
    <React.Fragment>
      <HeroBlog />
      <ContentBlog />
      <RelatedPosts />
    </React.Fragment> 
  )
}

export default BlogPage
