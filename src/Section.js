import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from './scrollContext';

const Section = ({ id, children, ...rest }) => {
  const { registerRef } = useContext(ScrollContext);
  const ref = useMemo(() => registerRef(id), [id]);

  return (
    <section ref={ref} id={id} {...rest}>
      {children}
    </section>
  );
};

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
