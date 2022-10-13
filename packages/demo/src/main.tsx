import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GithubCorner from 'react-github-corner';
import App from './App';
import theme from './theme';
import 'react-toggle/style.css';
import { Fragment } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Cabin', sans-serif;
  }
`;

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyle />
            <App />
            <GithubCorner
                bannerColor={theme.accent1}
                octoColor={theme.background}
                href="https://github.com/EmaSuriano/react-scroll-section"
            />
        </Fragment>
    </ThemeProvider>,
    document.getElementById('root')
);
