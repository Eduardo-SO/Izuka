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
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/Roboto/Roboto-Regular.ttf);
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(/fonts/Roboto/Roboto-Bold.ttf);
  }
  
  background: #000;
  
  font-size: 1.6rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
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
