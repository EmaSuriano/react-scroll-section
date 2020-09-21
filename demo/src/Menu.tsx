import React from 'react';
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

export const StaticMenu = () => {
  const homeSection = useScrollSection('home');
  const aboutSection = useScrollSection('about');
  const projectsSection = useScrollSection('projects');
  const contactSection = useScrollSection('contact');

  return (
    <Menu>
      <Item onClick={homeSection.onClick} selected={homeSection.selected}>
        LANDING
      </Item>
      <Item onClick={aboutSection.onClick} selected={aboutSection.selected}>
        ABOUT ME
      </Item>
      <Item
        onClick={projectsSection.onClick}
        selected={projectsSection.selected}
      >
        MY PROJECTS
      </Item>
      <Item onClick={contactSection.onClick} selected={contactSection.selected}>
        CONTACT ME!
      </Item>
    </Menu>
  );
};
