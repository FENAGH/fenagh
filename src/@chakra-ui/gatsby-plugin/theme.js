import { extendTheme } from "@chakra-ui/react"

const breakpoints = ["360px", "768px", "1024px", "1440px"]
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        "brand-fenagh": {
          bg:"brandGreen.50",
          h:"3.5rem",
          lineHeight:"3.5rem",
          size: "lg",
          borderRadius: "0",
          color: "brandGreen.30"
        },
        "brand-fenagh-inverted": {
          bg:"brandGreen.30",
          h:"3.5rem",
          lineHeight:"3.5rem",
          size: "lg",
          borderRadius: "0",
          color: "brandGreen.50",
        },
      }
    }
  },
  colors: {
    brandGreen: {
      70: "#09210e",
      50: "#15640f",
      30: "#b9df3c",
      10: "#dcf7b7",
    },
    brandYellow: "#ffd653",
    brandBG: "#f5f2e3",
    bodyText: "#7a7a7a"
  },
  fonts: {
    body: "Libre Baskerville, Times New Roman, serif",
    heading: "Bebas Neue, sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  global: {
    html: {
      scrollBehavior: "smooth"
    },
    body: {
      color: "#3f3f3f",
    },
  },
  breakpoints
})

export default theme