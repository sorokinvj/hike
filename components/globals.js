import { createGlobalStyle } from 'styled-components'
import 'typeface-fira-sans'

const GlobalStyle = createGlobalStyle`
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
`
export default GlobalStyle