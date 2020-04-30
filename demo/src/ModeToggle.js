import React from 'react';
import styled from 'styled-components';
import Toggle from 'react-toggle';

export const MODE = {
  static: 'Static',
  dynamic: 'Dynamic',
};

const Container = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: 18px;
  }
`;

const ModeToggle = ({ menu, onChange }) => (
  <Container>
    <Toggle
      id="menu-type"
      defaultChecked={menu === MODE.static}
      onChange={({ currentTarget }) =>
        onChange(currentTarget.checked ? MODE.static : MODE.dynamic)
      }
    />
    <label htmlFor="menu-type" style={{ marginLeft: '10px' }}>
      Menu: <b>{menu}</b>
    </label>
  </Container>
);
export default ModeToggle;
