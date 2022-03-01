import { useContext, useCallback } from 'react';
import { ScrollContext } from './context';

export const useScrollSection = (id: string) => {
  const { scrollTo, selected: selectedSection } = useContext(ScrollContext);
  const onClick = useCallback(() => scrollTo(id), [scrollTo, id]);
  const selected = selectedSection === id;

  return { onClick, selected };
};

export const useScrollSections = () => {
  const {
    scrollTo,
    selected: selectedSection,
    refs,
    meta,
  } = useContext(ScrollContext);
  const createOnClick = useCallback((id) => () => scrollTo(id), [scrollTo]);

  const sections = Object.keys(refs).map((id) => ({
    id,
    meta: meta[id],
    onClick: createOnClick(id),
    selected: selectedSection === id,
  }));

  return sections;
};
