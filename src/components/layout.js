import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { theme, ThemeProvider } from "@chakra-ui/core";
// Components
import Header from "./header"
import Footer from "./footer";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

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
    <ThemeProvider theme={newTheme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
