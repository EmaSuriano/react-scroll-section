import * as React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  border: 10px black solid;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;

const DefaultBackground = () => <div />;

const Container = ({ children, Background = DefaultBackground }) => (
  <div style={{ position: 'relative' }}>
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </div>
);

export default Container;
