module.exports = {
  siteMetadata: {
    title: `fabmont`,
    description: `This is my web page and blog, feel free to interact with me =)`,
    author: `@fabmont`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fabmont-folio`,
        short_name: `fabmont`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#29c7ac`,
        display: `minimal-ui`,
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
          {
            family: `Share Tech Mono`,
            variants: [`400`]
          }
        ]
      }
    }
  ]
};
