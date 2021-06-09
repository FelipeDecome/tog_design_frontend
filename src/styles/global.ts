import { createGlobalStyle } from 'styled-components';

/* font-family: 'Bai Jamjuree', sans-serif;
font-family: 'Catamaran', sans-serif;
font-family: 'Roboto', sans-serif; */

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;

    --cll-black-logo: #191919;
    --cll-black: #17181D;
    --cll-primary: #6356A5;
    --cll-secondary: #20C5D2;
    --cll-gray: #A9A7B1;
    --cll-gray-light: #BDBDBD;
    --cll-white: #ffffff;

    --cll-background: #F5F6F9;
    --cll-sidebar: #ECEDF3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--cll-background);
  }

  #root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  p,
  span,
  a,
  input,
  label,
  text-area,
  button,
  h1,
  h2,
  h3 {
    font-family: 'Roboto', sans-serif;
  }

  p,
  span,
  a,
  input,
  text-area {
    font-weight: 400;
  }

  button {
    font-weight: 500;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
