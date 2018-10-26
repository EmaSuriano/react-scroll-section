/* eslint import/no-extraneous-dependencies: 0 */

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { ScrollingProvider, Section } from '../../src';
import SectionContainer from './SectionContainer';
import { Menu, Item } from './Menu';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
`;

const App = () => (
  <ScrollingProvider scrollBehavior="smooth">
    <Menu>
      <Item section="home" content="🏠" />
      <Item section="about" content="🙋‍♂️" />
      <Item section="projects" content="💻" />
      <Item section="contact" content="💌" />
    </Menu>

    <Section id="home">
      <SectionContainer background="lightblue">Home</SectionContainer>
    </Section>

    <Section id="about">
      <SectionContainer background="orange">About me</SectionContainer>
    </Section>

    <Section id="projects">
      <SectionContainer background="orange">My projects</SectionContainer>
    </Section>

    <Section id="contact">
      <SectionContainer background="orange">Contact</SectionContainer>
    </Section>
  </ScrollingProvider>
);

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.querySelector('#demo'),
);
