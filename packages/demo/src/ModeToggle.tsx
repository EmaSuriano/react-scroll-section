import styled from 'styled-components';
import Toggle from 'react-toggle';

export type MenuKind = 'static' | 'dynamic';

type Props = {
  menu: MenuKind;
  onChange: (menu: MenuKind) => void;
};

const ModeToggle = ({ menu, onChange }: Props) => (
  <Container>
    <Toggle
      id="menu-type"
      defaultChecked={menu === 'static'}
      onChange={({ currentTarget }) =>
        onChange(currentTarget.checked ? 'static' : 'dynamic')
      }
    />
    <label htmlFor="menu-type" style={{ marginLeft: '10px' }}>
      Menu: <b>{menu}</b>
    </label>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: 18px;
  }
`;

export default ModeToggle;
