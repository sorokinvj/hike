import { createGlobalStyle } from 'styled-components'
import 'typeface-fira-sans'
import 'typeface-fira-sans-extra-condensed'

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

  p.body {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
  }

`
export default GlobalStyle