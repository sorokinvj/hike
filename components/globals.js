import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,700&display=swap');
  }
`
export default GlobalStyle