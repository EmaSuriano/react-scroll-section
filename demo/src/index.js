/* eslint import/no-extraneous-dependencies: 0 */

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #fafafa;
    color: #a2d5f2;
    font-family: 'Cabin', sans-serif;
  }
`;

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.querySelector('#demo'),
);
