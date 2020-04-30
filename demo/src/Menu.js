import React from 'react';
import { Menu, Item } from './Builders';
import { SectionLink, SectionLinks } from '../../src';

const CONFIRM_KEYS = [13, 32];

const A11yItem = props => (
  <Item
    onKeyDown={e => {
      if (CONFIRM_KEYS.includes(e.keyCode)) {
        e.preventDefault();
        props.onClick();
      }
    }}
    tabIndex="1"
    {...props}
  />
);

export const DynamicMenu = () => (
  <Menu>
    <SectionLinks>
      {({ allLinks }) =>
        Object.entries(allLinks).map(([key, link]) => (
          <A11yItem key={key} onClick={link.onClick} selected={link.isSelected}>
            {key.toUpperCase()}
          </A11yItem>
        ))
      }
    </SectionLinks>
  </Menu>
);

const MenuSection = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <A11yItem onClick={link.onClick} selected={link.isSelected}>
        {children}
      </A11yItem>
    )}
  </SectionLink>
);

export const StaticMenu = () => (
  <Menu>
    <MenuSection section="home">LANDING</MenuSection>
    <MenuSection section="about">ABOUT ME</MenuSection>
    <MenuSection section="projects">MY PROJECTS</MenuSection>
    <MenuSection section="contact">CONTACT ME!</MenuSection>
  </Menu>
);
