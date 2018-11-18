import React from 'react';
import { Menu, Item } from './Menu';
import { SectionLink } from '../../src';

const MenuSection = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <Item onClick={link.onClick} selected={link.isSelected}>
        {children}
      </Item>
    )}
  </SectionLink>
);

const StaticMenu = () => (
  <Menu>
    <MenuSection section="home">HOME</MenuSection>
    <MenuSection section="about">ABOUT</MenuSection>
    <MenuSection section="projects">PROJECTS</MenuSection>
    <MenuSection section="contact">CONTACT</MenuSection>
  </Menu>
);

export default StaticMenu;
