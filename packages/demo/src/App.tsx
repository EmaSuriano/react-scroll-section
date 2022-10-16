import { useState } from 'react';
import { ScrollingProvider, Section } from 'react-scroll-section';
import randomColor from 'randomcolor';
import ModeToggle, { Mode } from './ModeToggle';
import { DynamicMenu, StaticMenu } from './Menu';
import { Footer, Menu, SectionContainer } from './Builders';
import logo from './logo.svg';

function App() {
  const [mode, setMode] = useState<Mode>('dynamic');
  const [sections, setSections] = useState<string[]>([]);

  return (
    <ScrollingProvider>
      <Menu>
        {mode === 'static' ? (
          <StaticMenu />
        ) : (
          <DynamicMenu
            onAdd={() =>
              setSections((prev) => [...prev, `Section ${sections.length + 1}`])
            }
          />
        )}
      </Menu>

      <Section id="home">
        <SectionContainer>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <h1>A declarative solution to vertically navigate your React App</h1>
        </SectionContainer>
      </Section>

      <Section id="about">
        <SectionContainer background={randomColor({ seed: 'about' })}>
          <span role="img" aria-label="hands up">
            🙋‍♂️
          </span>
        </SectionContainer>
      </Section>

      <Section id="projects">
        <SectionContainer background={randomColor({ seed: 'projects' })}>
          <span role="img" aria-label="computer">
            💻
          </span>
        </SectionContainer>
      </Section>

      <Section id="contact">
        <SectionContainer background={randomColor({ seed: 'contact' })}>
          <span role="img" aria-label="letter">
            💌
          </span>
        </SectionContainer>
      </Section>

      {sections.map((name) => (
        <Section key={name} id={name}>
          <SectionContainer background={randomColor({ seed: name })}>
            <span>
              {name}{' '}
              <sup
                aria-label="Remove section"
                onClick={() =>
                  setSections((prev) => prev.filter((id) => id !== name))
                }
              >
                x
              </sup>
            </span>
          </SectionContainer>
        </Section>
      ))}

      <Footer>
        <ModeToggle mode={mode} onChange={setMode} />
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
