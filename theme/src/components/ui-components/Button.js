/** @jsx jsx */
import { jsx } from "theme-ui"

const Button = ({ type = `primary`, children, styles }) => {
  return (
    <button sx={{ variant: `buttons.${type}`, ...styles }}>{children}</button>
  )
}

export default Button
