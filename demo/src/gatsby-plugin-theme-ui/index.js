import merge from "deepmerge"
import baseTheme from "@alexadark/gatsby-theme-wordpress-blog/src/gatsby-plugin-theme-ui"

export default merge(baseTheme, {
  fonts: {
    heading: `Oswald`,
  },
  buttons: {
    primary: {
      bg: `lightBlue`,
      p: `10px 50px`,
      borderRadius: 50,
    },
  },
  accordion: {
    heading: {
      level: 3,
    },
  },
})
