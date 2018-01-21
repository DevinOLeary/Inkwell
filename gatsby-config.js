module.exports = {
  siteMetadata: {
    title: `the inkwell cafe`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl:`dev-inkwellcafe.pantheonsite.io`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true
      },
    },
    `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   `gatsby-plugin-glamor`
  ],
}
