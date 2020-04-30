/* eslint import/no-extraneous-dependencies: 0 */

import React, { Component } from 'react';
import Toggle from 'react-toggle';
import styled from 'styled-components';
import { ScrollingProvider } from '../../src';

import { DynamicMenu, StaticMenu } from './Menu';
import Sections from './Sections';

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

const MenuToggle = ({ menu, onChange }) => (
  <MenuTypeContainer>
    <Toggle
      id="menu-type"
      defaultChecked={menu === MENU_MODE.static}
      onChange={({ currentTarget }) =>
        onChange(currentTarget.checked ? MENU_MODE.static : MENU_MODE.dynamic)
      }
    />
    <label htmlFor="menu-type" style={{ marginLeft: '10px' }}>
      {`Menu type: ${menu}`}
    </label>
  </MenuTypeContainer>
);

export default class App extends Component {
  state = {
    menu: MENU_MODE.static,
  };

  render() {
    const { menu } = this.state;
    return (
      <ScrollingProvider scrollBehavior="smooth">
        {menu === MENU_MODE.static ? <StaticMenu /> : <DynamicMenu />}
        <MenuToggle
          menu={menu}
          onChange={selected => this.setState({ menu: selected })}
        />
        <Sections />
      </ScrollingProvider>
    );
  }
}
