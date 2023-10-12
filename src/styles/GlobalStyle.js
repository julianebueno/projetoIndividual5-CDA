import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${(props)=> props.theme.fundoPagina};
    min-height: 100vh;
    font-family: 'Roboto';
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    color: ${(props)=> props.theme.branco};
  }
`