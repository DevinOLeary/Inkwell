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
        path: `drink_menus`,
        name: "drink-menus",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `food_menus`,
        name: "food-menus",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `blog`,
        name: "blog",
      },
    },
    {
     resolve: 'gatsby-source-filesystem',
     options: {
       path: `static/img`,
       name: 'images',
     },
   },
   `gatsby-transformer-remark`,
   `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   `gatsby-plugin-glamor`
  ],
}
