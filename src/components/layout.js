import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
// Components
import Header from "./header"
import Footer from "./footer";



const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const theme = extendTheme({
  colors: {
    brandGreen: {
      70: "#09210e",
      50: "#15640f",
      30: "#b9df3c",
      10: "#dcf7b7",
    },
    brandYellow: "#ffd653",
    brandBG: "#f5f2e3",
  },
  fonts: {
    body: "Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    heading: "Bebas Neue, sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  breakpoints
})

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

  const [togglePopperMask, setTogglePopperMask ] = useState(false)

  return (
    <ChakraProvider theme={theme}>
      <Header 
        siteTitle={data.site.siteMetadata?.title || `Title`} 
        togglePopperMask={togglePopperMask}
        setTogglePopperMask={setTogglePopperMask}
      />
      <main style={{overflowX: "hidden"}}>{children}</main>
      <Footer />
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
