import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../@chakra-ui/gatsby-plugin/theme'
// Components
import Header from "./header"
import Footer from "./footer"
import Newsletter from "./newsletter"
// Fonts
import '../styles/fonts.css'

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ChakraProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main style={{overflowX: "hidden"}}>{children}</main>
      <Newsletter />
      <Footer />
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
