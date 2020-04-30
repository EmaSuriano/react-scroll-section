import styled from 'styled-components';

export const Menu = styled.ul`
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  display: table;
  margin-left: auto;
  margin-right: auto;
  margin: 0;
`;

export const Item = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  padding: 25px 10px;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
  color: ${props => (props.selected ? props.theme.accent1 : 'inherit')};
  border-top: 5px solid
    ${props => (props.selected ? props.theme.accent1 : 'transparent')};
`;

export const SectionContainer = styled.section`
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 4em;
  scroll-behavior: smooth;
  position: 'relative';
  background: ${props => props.theme[props.background || 'background']};
`;
