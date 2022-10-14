import { useState } from 'react';
import { ScrollingProvider, Section } from 'react-scroll-section';
import ModeToggle, { MenuKind } from './ModeToggle';
import { DynamicMenu, StaticMenu } from './Menu';
import { Footer, Menu, SectionContainer } from './Builders';
import logo from './logo.svg';

function App() {
  const [menu, setMenu] = useState<MenuKind>('static');

  return (
    <ScrollingProvider>
      <Menu>{menu === 'static' ? <StaticMenu /> : <DynamicMenu />}</Menu>

      <Section id="home">
        <SectionContainer>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <h1>A declarative solution to vertically navigate your React App</h1>
        </SectionContainer>
      </Section>

      <Section id="about">
        <SectionContainer background="accent2">
          <span role="img" aria-label="hands up">
            🙋‍♂️
          </span>
        </SectionContainer>
      </Section>

      <Section id="projects">
        <SectionContainer background="accent3">
          <span role="img" aria-label="computer">
            💻
          </span>
        </SectionContainer>
      </Section>

      <Section id="contact">
        <SectionContainer>
          <span role="img" aria-label="letter">
            💌
          </span>
        </SectionContainer>
      </Section>

      <Section id="contact">
        <SectionContainer>
          <span role="img" aria-label="letter">
            💌
          </span>
        </SectionContainer>
      </Section>

      <Footer>
        <ModeToggle menu={menu} onChange={setMenu} />
        <a href="https://www.netlify.com">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </Footer>
    </ScrollingProvider>
  );
}

export default App;
