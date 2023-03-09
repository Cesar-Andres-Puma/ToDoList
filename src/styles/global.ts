import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    background-color: ${theme.colors.background};
    color: ${theme.colors.white};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
  }
`}

`;

export default GlobalStyle;
