import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './scrollContext';

const SectionLink = ({ children }) => (
  <Consumer>
    {({ refList, selected, scrollTo }) => {
      const allLinks = Object.keys(refList).reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: {
            onClick: () => scrollTo(curr),
            selected: selected === curr,
          },
        }),
        {},
      );
      return children({ allLinks });
    }}
  </Consumer>
);

SectionLink.propTypes = {
  /** renderProp */
  children: PropTypes.func.isRequired,
};

export default SectionLink;
