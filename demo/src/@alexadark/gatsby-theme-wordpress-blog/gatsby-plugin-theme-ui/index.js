// import merge from "deepmerge"
import baseTheme from "@alexadark/gatsby-theme-wordpress-blog/src/gatsby-plugin-theme-ui"

export default {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    heading: `Oswald`,
  },
}
