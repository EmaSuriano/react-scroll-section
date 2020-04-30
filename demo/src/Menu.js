import React from 'react';
import { Menu, Item } from './Builders';
import { SectionLink, SectionLinks } from '../../src';

const MenuSection = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <Item onClick={link.onClick} selected={link.isSelected}>
        {children}
      </Item>
    )}
  </SectionLink>
);

export const DynamicMenu = () => (
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

export const StaticMenu = () => (
  <Menu>
    <MenuSection section="home">LANDING</MenuSection>
    <MenuSection section="about">ABOUT ME</MenuSection>
    <MenuSection section="projects">MY PROJECTS</MenuSection>
    <MenuSection section="contact">CONTACT ME!</MenuSection>
  </Menu>
);
