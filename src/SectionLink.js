import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './scrollContext';

const SectionLink = ({ section, children }) => (
  <Consumer>
    {({ scrollTo, selected }) => {
      const onClick = () => scrollTo(section);
      const isSelected = selected === section;
      return children({ onClick, isSelected });
    }}
  </Consumer>
);

SectionLink.propTypes = {
  /** Section ID */
  section: PropTypes.string.isRequired,
  /** renderProp */
  children: PropTypes.func.isRequired,
};

export default SectionLink;
