import { createGlobalStyle } from 'styled-components'
import 'typeface-fira-sans'
import 'typeface-fira-sans-extra-condensed'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html {
      font-size: 62.5%;
  }

  @font-face {
    font-family: 'Agrandir';
    src: url('/static/fonts/agrandir/Agrandir-Regular.otf');
  }

  @font-face {
    font-family: 'Agrandir Variable';
    src: url('/static/fonts/agrandir/Agrandir-Variable.ttf');
  }

  p.body {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
  }
`

export const theme = {
  '$grid-gutter-width': '30px',
  "$darkblue": '#030E47',
  "$red": '#FF0046'
}

export default GlobalStyle