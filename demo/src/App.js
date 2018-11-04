/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import { ScrollingProvider, Section } from '../../src';
import SectionContainer from './SectionContainer';
import { Menu, Item } from './Menu';

const App = () => (
  <ScrollingProvider scrollBehavior="smooth">
    <Menu>
      <Item section="home">HOME</Item>
      <Item section="about">ABOUT</Item>
      <Item section="projects">PROJECTS</Item>
      <Item section="contact">CONTACT</Item>
    </Menu>
    <Section id="home">
      <SectionContainer background="lightblue">🏠</SectionContainer>
    </Section>
    <Section id="about">
      <SectionContainer background="orange">🙋‍♂️</SectionContainer>
    </Section>
    <Section id="projects">
      <SectionContainer background="orange">💻</SectionContainer>
    </Section>
    <Section id="contact">
      <SectionContainer background="orange">💌</SectionContainer>
    </Section>
  </ScrollingProvider>
);

export default App;
