import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #F8F8F8;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
}

button {
    cursor: pointer;
}

a {
  text-decoration: none;
  color:inherit;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1240px;
}


`;
