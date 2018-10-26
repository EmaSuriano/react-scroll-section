import React from 'react';
import { SectionLink } from '../../src';
import styled from 'styled-components';

const Menu = styled.div`
  position: fixed;
  z-index: 1;
  background: white;
  border-radius: 20px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;

  &:hover {
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Item = styled.div`
  display: inline-block;
  font-size: 4rem;
  width: 84px;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${props => props.selected && 'lightblue'};
`;

const MenuItem = ({ section, content }) => (
  <SectionLink section={section}>
    {link => (
      <Item onClick={link.onClick} selected={link.isSelected}>
        {content}
      </Item>
    )}
  </SectionLink>
);

export { MenuItem as Item, Menu };

export default styled;
