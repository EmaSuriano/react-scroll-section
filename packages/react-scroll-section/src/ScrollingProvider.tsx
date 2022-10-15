import React, {
  ReactNode,
  createRef,
  useEffect,
  useMemo,
  useState,
  RefObject,
  useCallback,
} from 'react';
import { debounce } from './utils';
import { Provider } from './context';
import smoothscroll from 'smoothscroll-polyfill';

type Props = {
  debounceDelay?: number;
  scrollBehavior?: 'auto' | 'smooth';
  offset?: number;
  children: ReactNode;
};

type Section = {
  id: string;
  ref: RefObject<HTMLElement>;
  meta: unknown;
};

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

export const ScrollingProvider = ({
  debounceDelay = 50,
  scrollBehavior = 'smooth',
  offset = 0,
  children,
}: Props) => {
  const [selected, setSelected] = useState('');
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    document.addEventListener('scroll', debounceScroll, true);
    handleScroll();
    return () => {
      document.removeEventListener('scroll', debounceScroll, true);
    };
  }, [sections]);

  const handleScroll = useCallback(() => {
    const selectedSection = sections.reduce(
      (acc, curr) => {
        const sectionRef = curr.ref.current;
        if (!sectionRef) {
          return {
            id: curr.id,
            differenceFromTop: 0,
          };
        }

        const { top } = sectionRef.getBoundingClientRect();
        const differenceFromTop = Math.abs(top);

        if (differenceFromTop >= acc.differenceFromTop) return acc;

        return {
          differenceFromTop,
          id: curr.id,
        };
      },
      {
        differenceFromTop: 9999,
        id: '',
      },
    );

    if (selected !== selectedSection.id) setSelected(selectedSection.id);
  }, [sections]);

  const debounceScroll = debounce(handleScroll, debounceDelay);

  const registerRef = ({ id, meta }: Omit<Section, 'ref'>) => {
    const ref = createRef<HTMLElement>();
    setSections((prev) => [...prev, { id, ref, meta }]);
    return ref;
  };

  const unregisterRef = (id: string) => {
    setSections((prev) => prev.filter((section) => section.id !== id));
  };

  const scrollTo = useCallback(
    (id: string) => {
      const section = sections.find((section) => section.id === id);
      if (!section) return console.warn('Section ID not recognized!'); // eslint-disable-line

      setSelected(id);
      if (section.ref.current) {
        window.scrollTo({
          top: section.ref.current.offsetTop + offset,
          behavior: scrollBehavior,
        });
      }
    },
    [sections],
  );

  const value = useMemo(
    () => ({
      registerRef,
      unregisterRef,
      scrollTo,
      sections,
      selected,
    }),
    [selected, sections],
  );

  return <Provider value={value}>{children}</Provider>;
};
