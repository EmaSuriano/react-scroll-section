/* eslint import/no-extraneous-dependencies: 0 */

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import GithubCorner from 'react-github-corner';
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
    <GithubCorner
      bannerColor="#a2d5f2"
      octoColor="#fafafa"
      href="https://github.com/EmaSuriano/react-scroll-section"
    />
  </Fragment>,
  document.querySelector('#demo'),
);
