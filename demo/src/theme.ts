import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    accent1: string;
    accent2: string;
    accent3: string;
  }
}

const THEME = {
  background: '#F5F4E4',
  text: '#333',
  accent1: '#ff710b',
  accent2: '#F27B9B',
  accent3: '#00D3A4',
};

export default THEME;
