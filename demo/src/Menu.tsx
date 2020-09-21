import React, { ReactNode } from 'react';
import { Menu, Item } from './Builders';
import { useScrollSection, useScrollSections } from '../../src';

export const DynamicMenu = () => {
  const sections = useScrollSections();

  return (
    <Menu>
      {sections.map(({ id, onClick, selected }) => (
        <Item key={id} onClick={onClick} selected={selected}>
          {id.toUpperCase()}
        </Item>
      ))}
    </Menu>
  );
};

const MenuSection = ({
  section,
  children,
}: {
  section: string;
  children: ReactNode;
}) => {
  const { onClick, selected } = useScrollSection(section);

  return (
    <Item onClick={onClick} selected={selected}>
      {children}
    </Item>
  );
};

export const StaticMenu = () => (
  <Menu>
    <MenuSection section="home">LANDING</MenuSection>
    <MenuSection section="about">ABOUT ME</MenuSection>
    <MenuSection section="projects">MY PROJECTS</MenuSection>
    <MenuSection section="contact">CONTACT ME!</MenuSection>
  </Menu>
);
