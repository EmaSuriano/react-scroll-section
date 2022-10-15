import styled from 'styled-components';
import Toggle from 'react-toggle';

export type Mode = 'static' | 'dynamic';

type Props = {
  mode: Mode;
  onChange: (mode: Mode) => void;
};

const ModeToggle = ({ mode, onChange }: Props) => (
  <Container>
    <Toggle
      id="mode-type"
      defaultChecked={mode === 'dynamic'}
      onChange={({ currentTarget }) =>
        onChange(currentTarget.checked ? 'dynamic' : 'static')
      }
    />
    <label htmlFor="mode-type" style={{ marginLeft: '10px' }}>
      Mode: <b>{mode}</b>
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
