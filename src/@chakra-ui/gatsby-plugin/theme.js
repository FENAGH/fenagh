import { extendTheme } from "@chakra-ui/react"

const breakpoints = ["360px", "768px", "1024px", "1440px"]
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

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

export default theme