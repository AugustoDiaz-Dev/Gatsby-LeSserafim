module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/gallery/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Le Sserafim',
    description: 'South Korean music group formed by Source Music and HYBE',
    copyright: 'Augusto Diaz, 2022',
    contact: 'augustordiaz@gmail.com'
  },
}
