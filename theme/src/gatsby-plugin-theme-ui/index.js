import colors from "./colors"

const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  color: "text",
  letterSpacing: 1,
  a: {
    borderBottom: "none",
  },
}

const base = {
  fontSize: [1, 2],
  color: `text`,
  a: {
    color: "text",
    textDecoration: "none",
    "&:hover": {
      color: "primary",
    },
  },
  p: {
    fontSize: [1, 2],
    lineHeight: `body`,
  },
  h1: {
    ...heading,
    fontSize: [5, 6],
    mt: 2,
  },
  h2: {
    ...heading,
    fontSize: [4, 5],
    mt: 2,
  },
  h3: {
    ...heading,
    fontSize: [3, 4],
    mt: 3,
  },
  h4: {
    ...heading,
    fontSize: [2, 3],
  },
  h5: {
    ...heading,
    fontSize: [1, 2],
  },
  h6: {
    ...heading,
    color: "muted",
    fontSize: 1,
    mb: 2,
  },
}

export default {
  colors,
  fonts: {
    body: "IBM Plex Mono, monospace",
    heading: "IBM Plex Mono, monospace",
  },
  fontSizes: [
    "1.2rem",
    "1.4rem",
    "1.6rem",
    "2.4rem",
    "3rem",
    "3.6rem",
    "4.8rem",
    "6.4rem",
    "7.2rem",
  ],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  fontWeights: {
    body: 300,
    heading: 600,
    bold: 700,
  },
  sizes: {
    container: 1024,
  },
  shadows: {
    default: `0px 1px 10px rgba(0,0,0,0.05)`,
    hover: `0px 10px 20px rgba(0,0,0,0.25)`,
  },

  breakpoints: [`600px`, `900px`, `1200px`],
  radii: {
    xl: `1rem`,
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: 0,
      span: {
        display: "block",
        fontSize: 3,
        margin: "0 auto",
        maxWidth: "container",
        padding: 3,
        width: "90vw",
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
      maxWidth: `container`,
    },
    ...base,
  },

  root: {
    base,
  },
}
