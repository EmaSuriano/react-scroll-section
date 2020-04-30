/* eslint import/no-extraneous-dependencies: 0 */

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GithubCorner from 'react-github-corner';
import App from './App';
import theme from './theme';
import 'react-toggle/style.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Cabin', sans-serif;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <App />
      <GithubCorner
        bannerColor={theme.background}
        octoColor={theme.accent1}
        href="https://github.com/EmaSuriano/react-scroll-section"
      />
    </Fragment>
  </ThemeProvider>,
  document.querySelector('#demo'),
);
