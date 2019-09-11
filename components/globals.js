import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,900&display=swap');

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
  }

  p.body {
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: #4F4F4F;
  }
`

export const theme = {
  '$grid-gutter-width': '30px',
  "$darkblue": '#030E47',
  "$red": '#FF0046'
}

export default GlobalStyle