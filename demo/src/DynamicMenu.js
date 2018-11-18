import React from 'react';
import { Menu, Item } from './Menu';
import { SectionLinks } from '../../src';

const DynamicMenu = () => (
  <Menu>
    <SectionLinks>
      {({ allLinks }) =>
        Object.entries(allLinks).map(([key, value]) => (
          <Item key={key} onClick={value.onClick} selected={value.selected}>
            {key.toUpperCase()}
          </Item>
        ))
      }
    </SectionLinks>
  </Menu>
);

export default DynamicMenu;
