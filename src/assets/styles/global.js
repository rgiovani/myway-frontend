import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: Signika, sans-serif;
  }

  html, body, #root {
    height: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  button {
    font-family: Signika, sans-serif;
  }
`
