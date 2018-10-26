import React from 'react';
import { withScrollingConsumer } from './scrollContext';

const Section = ({ registerRef, id, children }) => (
  <section ref={registerRef(id)} id={id}>
    {children}
  </section>
);

export default withScrollingConsumer(Section);
