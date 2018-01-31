module.exports = {
  siteMetadata: {
    title: `the inkwell cafe`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/drink_menus`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   `gatsby-plugin-glamor`
  ],
}
