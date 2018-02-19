module.exports = {
  siteMetadata: {
    title: `the inkwell cafe`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    {
     resolve: `gatsby-source-contentful`,
     options: {
       spaceId: `3ydoceujf2h5`,
       accessToken: `c5fd9132e9dbb1aaaceacc7b47e3be6b8615ab28a835ad5e6f28abbed639669d`
     },
   },
   `gatsby-plugin-sharp`,
   `gatsby-transformer-remark`,
   `gatsby-transformer-sharp`,
   `gatsby-plugin-glamor`
  ],
}
