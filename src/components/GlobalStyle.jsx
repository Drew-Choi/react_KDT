import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Amatic SC', cursive;
  }
`;

export default GlobalStyle;

// index.js에서 익스폴트한 변수를 임폴트하고 감싸줘야한다.
