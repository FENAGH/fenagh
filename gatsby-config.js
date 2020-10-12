module.exports = {
  siteMetadata: {
    title: "FENAGH",
    description: "Federación Nacional de Agricultores y Ganaderos de Hondureas",
    author: '@adinjesuha',
    menuLinks: [
      {
        name: 'Quienes Somos',
        link: '/acerca-de',
        subMenu: [
          {
            name: 'Historia',
            link: '/'
          },
          {
            name: 'Misión & Visión',
            link: '/'
          },
          {
            name: 'Estatutos',
            link: '/'
          },
          {
            name: 'Junta Directiva',
            link: '/'
          },
        ]
      },
      {
        name: 'Asociaciones',
        link: '/',
        subMenu: [
          {
            name: 'Asociaciones Afiliadas',
            link: '/'
          },
          {
            name: 'U.R.S.A.C.',
            link: '/'
          },
          {
            name: 'C.R.E.L.',
            link: '/'
          },
        ]
      },
      {
        name: 'Sectores',
        link: '/',
        subMenu: null
      },
      {
        name: 'FONACSAH',
        link: '/',
        subMenu: null
      },
      {
        name: 'Convención 2020',
        link: '/',
        subMenu: null
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
        background_color: `#f8f8f8`,
        theme_color: `#f8f8f8`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
