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
        name: "drink_menus",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/food_menus`,
        name: "food_menus",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "blog",
      },
    },
    {
     resolve: 'gatsby-source-filesystem',
     options: {
       path: `${__dirname}/static/img`,
       name: 'images',
     },
   },
    `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   `gatsby-plugin-glamor`
  ],
}
