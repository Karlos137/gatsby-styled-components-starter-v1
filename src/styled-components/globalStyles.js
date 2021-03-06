import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

/* CSS RESET START */
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, small, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  cursor: pointer;
}
/* CSS RESET END */


/* CUSTOM GLOBAL STYLES START */
body {
  font-family: 'Tahoma', sans-serif;
}

/* Remove @artsy/fresnel div box -> replaced by their pseudo-box and their child boxes */
/* Uncomment below if using @artsy/fresnel */
/* .fresnel-container {
    display: contents;
} */

/* CUSTOM GLOBAL STYLES END */

`

export default GlobalStyle
