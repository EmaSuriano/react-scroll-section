import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './scrollContext';

const Section = ({ id, children, ...rest }) => (
  <Consumer>
    {({ registerRef }) => (
      <section ref={registerRef(id)} id={id} {...rest}>
        {children}
      </section>
    )}
  </Consumer>
);

Section.propTypes = {
  /** Section ID */
  id: PropTypes.string.isRequired,
  /** Section content */
  children: PropTypes.node,
};

Section.defaultProps = {
  children: null,
};

export default Section;
