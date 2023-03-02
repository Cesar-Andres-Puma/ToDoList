import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.white};
  }
`}

`;

export default GlobalStyle;
