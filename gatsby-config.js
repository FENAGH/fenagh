module.exports = {
  siteMetadata: {
    title: "FENAGH",
    description: "Federación Nacional de Agricultores y Ganaderos de Hondureas",
    author: '@adinjesuha',
    menuLinks: [
      {
        name: 'Institución',
        link: null,
        subMenu: [
          {
            flayOutName: 'Acerca de FENAGH',
            flayOutMenu: [
              {
                flayOutMenu_name: 'Historia',
                flayOutMenu_link: '/historia'
              },
              {
                flayOutMenu_name: 'Misión & Visión',
                flayOutMenu_link: '/mision-y-vision'
              },
              {
                flayOutMenu_name: 'Objetivos',
                flayOutMenu_link: '/'
              }
            ]
          },
          {
            flayOutName: 'Nuestra Gente',
            flayOutMenu: [
              {
                flayOutMenu_name: 'Mensaje del Presidente',
                flayOutMenu_link: '/mensaje-del-presidente'
              },
              {
                flayOutMenu_name: 'Junta Directiva',
                flayOutMenu_link: '/junta-directiva'
              },
              {
                flayOutMenu_name: 'Personal',
                flayOutMenu_link: '/personal'
              },
            ]
          },
        ]
      },
      {
        name: 'Socios',
        link: null,
        subMenu: [
          {
            flayOutName: 'Afiliados',
            flayOutMenu: [
              {
                flayOutMenu_name: 'Asociaciones',
                flayOutMenu_link: '/asociaciones'
              },
              {
                flayOutMenu_name: 'Empresas',
                flayOutMenu_link: '/'
              },
              {
                flayOutMenu_name: 'Convención',
                flayOutMenu_link: '/convención'
              },
              {
                flayOutMenu_name: 'Convenios',
                flayOutMenu_link: '/'
              },
            ]
          },
          {
            flayOutName: 'Leyes Agrícolas',
            flayOutMenu: [
              {
                flayOutMenu_name: 'Tribuario',
                flayOutMenu_link: '/'
              },
              {
                flayOutMenu_name: 'Agrario',
                flayOutMenu_link: '/'
              },
              {
                flayOutMenu_name: 'Sanitario',
                flayOutMenu_link: '/'
              },
              {
                flayOutMenu_name: 'Comercial',
                flayOutMenu_link: '/'
              },
            ]
          },

        ]
      },
      {
        name: 'Proyectos',
        link: '/proyectos',
        subMenu: null
      },
      {
        name: 'Cuota Pecuaria',
        link: '/',
        subMenu: null
      },
      {
        name: 'Comercialización',
        link: '/',
        subMenu: null
      },
      {
        name: 'Registro Genealógico',
        link: '/',
        subMenu: null
      },
      {
        name: 'Noticias',
        link: '/',
        subMenu: null
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
        portalZIndex: 40,
      },
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
