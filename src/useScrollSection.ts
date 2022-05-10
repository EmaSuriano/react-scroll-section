import { useScrollContext } from './context';

export const useScrollSection = (id: string) => {
  const { scrollTo, selected: selectedSection } = useScrollContext();
  const onClick = () => scrollTo(id);
  const selected = selectedSection === id;

  return { onClick, selected };
};

export const useScrollSections = () => {
  const {
    scrollTo,
    selected: selectedSection,
    refs,
    meta,
  } = useScrollContext();

  const sections = Object.keys(refs).map((id) => ({
    id,
    meta: meta[id],
    onClick: () => scrollTo(id),
    selected: selectedSection === id,
  }));

  return sections;
};
