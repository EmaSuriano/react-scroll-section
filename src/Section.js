import React from 'react';
import PropTypes from 'prop-types';
import { withScrollingConsumer } from './scrollContext';

const Section = ({ registerRef, id, children }) => (
  <section ref={registerRef(id)} id={id}>
    {children}
  </section>
);

Section.propTypes = {
  registerRef: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Section.defaultProps = {
  children: null,
};

export default withScrollingConsumer(Section);
