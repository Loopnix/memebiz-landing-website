import { createGlobalStyle } from "styled-components";
import poppins from '../static/fonts/PoppinsRegular.ttf'



const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Poppins Regular';
    src: url(${poppins})
  }

  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.white};
    color: white;
    font-family: 'Poppins Regular';
  }
  html {
    font-family: 'Poppins Regular';
  }
`;

export { GlobalStyles };
