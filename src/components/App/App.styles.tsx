import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    color: #353535;
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
  }

  .line {
    margin: 1em auto;
    border: 1px solid #c0a583;
    background: #c0a583;
    width: 0px;
    transition: 3s ease;
    visibility: hidden;
  }
  
  .line-scroll {
    margin: 1em auto;
    border: 1px solid #c0a583;
    background: #c0a583;
    width: 225px;
    transition: 3s ease;
  }
`