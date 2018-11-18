/* eslint import/no-extraneous-dependencies: 0 */

import React, { Component } from 'react';
import Toggle from 'react-toggle';
import styled from 'styled-components';
import { ScrollingProvider, Section } from '../../src';
import SectionContainer from './SectionContainer';
import StaticMenu from './StaticMenu';
import DynamicMenu from './DynamicMenu';

const MenuTypeContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  align-items: center;
  margin: 10px;
`;
export default class App extends Component {
  state = {
    menu: 'static',
  };

  toggleMenu = () => {
    const { menu } = this.state;
    const newMenu = menu === 'static' ? 'dynamic' : 'static';
    this.setState({ menu: newMenu });
  };

  render() {
    const { menu } = this.state;
    return (
      <ScrollingProvider scrollBehavior="smooth">
        {menu === 'static' ? <StaticMenu /> : <DynamicMenu />}
        <MenuTypeContainer>
          <Toggle id="menu-type" onChange={this.toggleMenu} />
          <label
            htmlFor="menu-type"
            style={{ marginLeft: '10px' }}
          >{`Menu type: ${menu}`}</label>
        </MenuTypeContainer>
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
  }
}
