import React, { useState } from 'react';
import { ScrollingProvider } from '../../src';
import { DynamicMenu, StaticMenu } from './Menu';
import Sections from './Sections';
import { Footer } from './Builders';
import ModeToggle, { Menu } from './ModeToggle';

const App = () => {
  const [menu, setMenu] = useState<Menu>('static');

  return (
    <ScrollingProvider scrollBehavior="smooth">
      {menu === 'static' ? <StaticMenu /> : <DynamicMenu />}
      <Sections />
      <Footer>
        <ModeToggle menu={menu} onChange={setMenu} />
        <a href="https://www.netlify.com">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </Footer>
    </ScrollingProvider>
  );
};

export default App;
