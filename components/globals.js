import { createGlobalStyle } from 'styled-components'
import 'typeface-fira-sans'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html {
      font-size: 62.5%;
      @media (max-width: 768px) {
          overflow-x: hidden;
      }
  }
  body {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Agrandir';
    src: url('/static/fonts/agrandir/Agrandir-Regular.otf');
  }

`
export default GlobalStyle