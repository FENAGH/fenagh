module.exports = {
  siteMetadata: {
    title: "FENAGH",
    description: "Federación Nacional de Agricultores y Ganaderos de Hondureas",
    author: '@adinjesuha',
    menuLinks: [
      {
        name: 'Inicio',
        link: '/'
      },
      {
        name: 'Quienes Somos',
        link: '/acerca-de',
      },
      {
        name: 'Asociaciones',
        link: '/'
      },
      {
        name: 'Sectores',
        link: '/'
      },
      {
        name: 'FONACSAH',
        link: '/'
      },
      {
        name: 'Registro',
        link: '/'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-chakra-ui`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bebas Neue\:400`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
