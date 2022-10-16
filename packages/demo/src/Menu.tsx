import { Item } from './Builders';
import { useScrollSection, useScrollSections } from 'react-scroll-section';

type Props = {
  onAdd: () => void;
};

export const DynamicMenu = ({ onAdd }: Props) => {
  const sections = useScrollSections();

  return (
    <>
      {sections.map(({ id, onClick, selected }) => (
        <Item key={id} onClick={onClick} selected={selected}>
          {id.toUpperCase()}
        </Item>
      ))}
      <Item selected={false} onClick={onAdd} aria-label="Add section">
        +
      </Item>
    </>
  );
};

export const StaticMenu = () => {
  const homeSection = useScrollSection('home');
  const aboutSection = useScrollSection('about');
  const projectsSection = useScrollSection('projects');
  const contactSection = useScrollSection('contact');

  return (
    <>
      <Item onClick={homeSection.onClick} selected={homeSection.selected}>
        LANDING
      </Item>
      <Item onClick={aboutSection.onClick} selected={aboutSection.selected}>
        ABOUT ME
      </Item>
      <Item
        onClick={projectsSection.onClick}
        selected={projectsSection.selected}
      >
        MY PROJECTS
      </Item>
      <Item onClick={contactSection.onClick} selected={contactSection.selected}>
        CONTACT ME!
      </Item>
    </>
  );
};
