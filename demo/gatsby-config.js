/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require("./config")

module.exports = {
  siteMetadata: {
    title: `Webstantly`,
    description: `The web instantly`,
    author: `@alexadark`,
    wordPressUrl: config.wordpressUrl,
  },
  plugins: [
    {
      resolve: `@alexadark/gatsby-theme-wordpress-blog`,
      options: {
        wordPressUrl: config.wordPressUrl,
        postsPrefix: `posts`,
        postsPath: `blog`,
        paginationPrefix: ``,
        postsPerPage: 8,
      },
    },
  ],
}
