import merge from "deepmerge"
import buttons from "@alexadark/gatsby-theme-wordpress-blog/src/gatsby-plugin-theme-ui/buttons"

export default merge(buttons, {
  primary: {
    bg: `olive`,
    a: {
      color: `white`,
    },
  },
})
