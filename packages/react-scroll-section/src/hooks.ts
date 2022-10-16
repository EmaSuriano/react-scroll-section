import { useContext } from 'react';
import { ScrollContext } from './context';

export const useScrollSection = (id: string) => {
  const { scrollTo, selected } = useContext(ScrollContext);
  const onClick = () => scrollTo(id);

  return { onClick, selected: selected === id };
};

export const useScrollSections = () => {
  const {
    scrollTo,
    selected: selectedSection,
    sections,
  } = useContext(ScrollContext);

  return Object.keys(sections).map((id) => ({
    id,
    meta: sections[id].meta,
    onClick: () => scrollTo(id),
    selected: selectedSection === id,
  }));
};
