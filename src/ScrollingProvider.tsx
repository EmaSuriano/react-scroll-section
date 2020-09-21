import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { debounce } from './utils';
import { Provider } from './context';

type Props = {
  debounceDelay?: number;
  scrollBehavior?: 'auto' | 'smooth';
  offset?: number;
  children: ReactNode;
};

const ScrollingProvider = ({
  debounceDelay = 50,
  scrollBehavior = 'smooth',
  offset = 0,
  children,
}: Props) => {
  const [selected, setSelected] = useState('');
  const [refs, setRefs] = useState<RefsRegister>({});

  useEffect(() => {
    document.addEventListener('scroll', debounceScroll, true);
    handleScroll();
    return () => {
      document.removeEventListener('scroll', debounceScroll, true);
    };
  }, []);

  const handleScroll = () => {
    const selectedSection = Object.keys(refs).reduce(
      (acc, id) => {
        const { top } = refs[id].current.getBoundingClientRect();
        const differenceFromTop = Math.abs(top);

        if (differenceFromTop >= acc.differenceFromTop) return acc;

        return {
          differenceFromTop,
          id,
        };
      },
      {
        differenceFromTop: 9999,
        id: '',
      },
    );

    if (selected !== selectedSection.id) setSelected(selectedSection.id);
  };

  const debounceScroll = debounce(handleScroll, debounceDelay);

  const registerRef = (id: string) => {
    const ref = React.createRef<HTMLElement>();
    setRefs((rest) => ({ ...rest, [id]: ref }));
    return ref;
  };

  const scrollTo = (section: string) => {
    const sectionRef = refs[section];
    if (!sectionRef) return console.warn('Section ID not recognized!'); // eslint-disable-line

    const top = sectionRef.current.offsetTop + offset;
    setSelected(section);
    window.scrollTo({
      top,
      behavior: scrollBehavior,
    });
  };

  const value = useMemo(
    () => ({
      registerRef,
      scrollTo,
      refs,
      selected,
    }),
    [selected, refs],
  );

  return <Provider value={value}>{children}</Provider>;
};

export default ScrollingProvider;
