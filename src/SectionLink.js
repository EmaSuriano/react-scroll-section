import PropTypes from 'prop-types';
import { withScrollingConsumer } from './scrollContext';

const SectionLink = ({ scrollTo, section, selected, children }) => {
  const onClick = () => scrollTo(section);
  const isSelected = selected === section;
  return children({ onClick, isSelected });
};

SectionLink.propsTypes = {
  scrollTo: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default withScrollingConsumer(SectionLink);
