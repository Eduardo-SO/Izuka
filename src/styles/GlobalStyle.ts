import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
  @media(max-width: 980px) {
    font-size: 50%;
  }
}

html,
body {
  background: #000;
  
  font: 400 1.6rem 'Roboto';
  line-height: 1.6;
}

body,
input,
button,
textarea {
  color: #fff;
  -webkit-font-smoothing: antialiased;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

a {
  color: #0082fa;
  text-decoration: none;
}

a:hover,
a:focus,
a:active {
  text-decoration: underline;
}
`
