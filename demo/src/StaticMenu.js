import React from 'react';
import { Menu, Item } from './Builders';
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
    <MenuSection section="home">LANDING</MenuSection>
    <MenuSection section="about">ABOUT ME</MenuSection>
    <MenuSection section="projects">MY PROJECTS</MenuSection>
    <MenuSection section="contact">CONTACT ME!</MenuSection>
  </Menu>
);

export default StaticMenu;
