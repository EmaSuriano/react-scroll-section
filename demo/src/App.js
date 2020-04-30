/* eslint import/no-extraneous-dependencies: 0 */

import React, { Component } from 'react';
import Toggle from 'react-toggle';
import styled from 'styled-components';
import { ScrollingProvider, Section } from '../../src';
import { SectionContainer } from './Builders';
import StaticMenu from './StaticMenu';
import DynamicMenu from './DynamicMenu';

const MenuTypeContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;

  align-items: center;
  margin: 10px;
`;

const MENU_MODE = {
  static: 'Static',
  dynamic: 'Dynamic',
};

export default class App extends Component {
  state = {
    menu: MENU_MODE.static,
  };

  toggleMenu = ({ currentTarget }) => {
    this.setState({
      menu: currentTarget.checked ? MENU_MODE.static : MENU_MODE.dynamic,
    });
  };

  render() {
    const { menu } = this.state;
    return (
      <ScrollingProvider scrollBehavior="smooth">
        {menu === MENU_MODE.static ? <StaticMenu /> : <DynamicMenu />}
        <MenuTypeContainer>
          <Toggle
            id="menu-type"
            defaultChecked={menu === MENU_MODE.static}
            onChange={this.toggleMenu}
          />
          <label htmlFor="menu-type" style={{ marginLeft: '10px' }}>
            {`Menu type: ${menu}`}
          </label>
        </MenuTypeContainer>
        <Section id="home">
          <SectionContainer>
            <span role="img" aria-label="home">
              🏠
            </span>
          </SectionContainer>
        </Section>
        <Section id="about">
          <SectionContainer background="accent2">
            <span role="img" aria-label="hands up">
              🙋‍♂️
            </span>
          </SectionContainer>
        </Section>
        <Section id="projects">
          <SectionContainer background="accent3">
            <span role="img" aria-label="computer">
              💻
            </span>
          </SectionContainer>
        </Section>
        <Section id="contact">
          <SectionContainer>
            <span role="img" aria-label="letter">
              💌
            </span>
          </SectionContainer>
        </Section>
      </ScrollingProvider>
    );
  }
}
