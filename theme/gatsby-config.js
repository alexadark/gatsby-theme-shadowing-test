module.exports = ({
  wordPressUrl = `http://alexandraspalato.com/gatsby/`,
  postsPath = `blog`,
  paginationPrefix = `/page`,
  postsPrefix = ``,
  postsPerPage = 10,
}) => {
  return {
    siteMetadata: {
      title: `Gatsby theme WordPress Source Demo`,
      author: `@alexadark`,
      description: `Demo of a WordPress source theme for GatsbyJS. Uses WPGraphQL (GraphQL for WordPress).`,
      social: [
        {
          name: `twitter`,
          url: `https://twitter.com/alexadark`,
        },
        {
          name: `github`,
          url: `https://github.com/alexadark`,
        },
      ],
    },
    plugins: [
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-source-graphql`,
        options: {
          // This type will contain remote schema Query type
          typeName: `WPGraphQL`,
          // This is field under which it's accessible
          fieldName: `wpgraphql`,
          // Url to query from
          url: `${wordPressUrl}/graphql`,
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Inconsolata\:400, 700`,
            `Oswald\:200,300,400,500,600,700`,
            `Playfair Display\:400,400i,700,700i,900,900i`,
            `IBM Plex Mono\:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i`,
            `Roboto Slab\:100,300,400,700`,
            `Space Mono\:400,400i,700,700i`,
            `Montserrat\:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i`,
          ],
          display: "swap",
        },
      },

      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }
}
