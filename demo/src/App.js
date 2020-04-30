/* eslint import/no-extraneous-dependencies: 0 */

import React, { Component } from 'react';
import { ScrollingProvider } from '../../src';
import { DynamicMenu, StaticMenu } from './Menu';
import Sections from './Sections';
import { Footer } from './Builders';
import ModeToggle, { MODE } from './ModeToggle';

export default class App extends Component {
  state = {
    menu: MODE.static,
  };

  render() {
    const { menu } = this.state;
    return (
      <ScrollingProvider scrollBehavior="smooth">
        {menu === MODE.static ? <StaticMenu /> : <DynamicMenu />}
        <Sections />
        <Footer>
          <ModeToggle
            menu={menu}
            onChange={(selected) => this.setState({ menu: selected })}
          />
          <a href="https://www.netlify.com">
            <img
              src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
              alt="Deploys by Netlify"
            />
          </a>
        </Footer>
      </ScrollingProvider>
    );
  }
}
