require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
                flayOutMenu_name: 'Sobre FENAGH',
                flayOutMenu_link: '/acerca-de',
              },
              {
                flayOutMenu_name: 'Sectores Represantados',
                flayOutMenu_link: '/sectores',
              },
            ]
          },
          {
            flayOutName: 'Nuestra Gente',
            flayOutMenu: [
              {
                flayOutMenu_name: 'Mensaje del Presidente',
                flayOutMenu_link: '/mensaje-del-presidente',
              },
              {
                flayOutMenu_name: 'Junta Directiva',
                flayOutMenu_link: '/junta-directiva',
              },
              {
                flayOutMenu_name: 'Personal',
                flayOutMenu_link: '/personal',
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
                flayOutMenu_link: '/asociaciones',
              },
              {
                flayOutMenu_name: 'Empresas',
                flayOutMenu_link: '/empresas',
              },
              {
                flayOutMenu_name: 'Convenciones',
                flayOutMenu_link: '/convenciones',
              },
              {
                flayOutMenu_name: 'Convenios',
                flayOutMenu_link: '/convenios',
              },
            ]
          },
          {
            flayOutName: 'Leyes Agrícolas',
            flayOutMenu: [
              {
                flayOutMenu_name: 'Tributario y Financiero',
                flayOutMenu_link: '/ley-tributaria-y-financiera',
              },
              {
                flayOutMenu_name: 'Derecho Agrario',
                flayOutMenu_link: '/ley-agrario',
              },
              {
                flayOutMenu_name: 'Ley Sanitaria',
                flayOutMenu_link: '/ley-sanitaria',
              },
              {
                flayOutMenu_name: 'Ley Comercial',
                flayOutMenu_link: '/ley-comercial',
              },
            ]
          },
        ]
      },
      {
        name: 'Comercialización',
        link: null,
        subMenu: [
          {
            flayOutName: 'Comercialización',
            flayOutMenu: [
              {
                flayOutMenu_name: 'Acerca de',
                flayOutMenu_link: '/comercializacion',
              },
              {
                flayOutMenu_name: 'Ejemplares en venta',
                flayOutMenu_link: '/',
              },
            ]
          },
        ]
      },
      {
        name: 'Plataformas',
        link: null,
        subMenu: [
          {
            flayOutName: 'Registro Genealógico',
            flayOutMenu: [
              {
                flayOutMenu_name: 'Sobre el Registro',
                flayOutMenu_link: '/sobre-el-registro',
              },
              {
                flayOutMenu_name: 'Ir a la Plataforma',
                flayOutMenu_link: '/',
              },
            ]
          },
          {
            flayOutName: 'Cuota Pecuaria',
            flayOutMenu: [
              {
                flayOutMenu_name: 'Ley Cuota Pecuaria',
                flayOutMenu_link: '/ley-cuota-pecuaria',
              },
              {
                flayOutMenu_name: 'Importaciones',
                flayOutMenu_link: 'http://recaudo.fonacsah.hn/cfpo/view/login.aspx',
              },
              {
                flayOutMenu_name: 'Producción Nacional',
                flayOutMenu_link: 'http://recaudo.fonacsah.hn/cpn/View/Login.aspx',
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
        name: 'Noticias y Eventos',
        link: '/noticias-y-eventos',
        subMenu: null
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e4da5bv5j8g0`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
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
        background_color: `#15640f`,
        theme_color: `#15640f`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
