import React, { Fragment } from 'react';
import { Section } from '../../src';
import { SectionContainer } from './Builders';

const Sections = () => (
  <Fragment>
    <Section id="home">
      <SectionContainer>
        <span role="img" aria-label="home">
          🏠
        </span>
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
  </Fragment>
);

export default Sections;
