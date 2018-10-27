import React from 'react';
import { SectionLink } from '../../src';
import styled from 'styled-components';

const Menu = styled.ul`
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
`;

const Item = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  padding: 40px 10px;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
  color: ${props => (props.selected ? '#07689f' : 'inherit')};
  border-top: 5px solid ${props => (props.selected ? '#ff7e67' : 'transparent')};
`;

const MenuItem = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <Item onClick={link.onClick} selected={link.isSelected}>
        {children}
      </Item>
    )}
  </SectionLink>
);

export { MenuItem as Item, Menu };

export default styled;
