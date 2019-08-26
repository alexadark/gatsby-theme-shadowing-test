/** @jsx jsx */
import { jsx, css } from "theme-ui"
import React from "react"
import PostEntry from "@alexadark/gatsby-theme-wordpress-blog/src/components/PostEntry"

export default props => (
  <PostEntry
    sx={{
      backgroundColor: "rebeccapurple",
      color: "white",
      border: "1px solid red",
    }}
    {...props}
  />
)
