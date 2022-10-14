import styled, { DefaultTheme } from 'styled-components';

export const Menu = styled.ul`
  position: fixed;
  display: flex;
  width: 100vw;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
`;

export const Item = styled.li<{ selected: boolean }>`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  padding: 25px 10px;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
  color: ${(props) => (props.selected ? props.theme.accent1 : 'inherit')};
  border-top: 5px solid
    ${(props) => (props.selected ? props.theme.accent1 : 'transparent')};
`;

export const SectionContainer = styled.section<{
  background?: keyof DefaultTheme;
}>`
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  scroll-behavior: smooth;
  position: 'relative';
  background: ${(props) => props.theme[props.background || 'background']};

  & h1 {
    font-size: 2em;
  }

  & span[role='img'] {
    font-size: 4em;
  }
`;

export const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  justify-content: space-between;
  align-items: baseline;
  width: calc(100% - 20px);
  margin: 10px;
`;
