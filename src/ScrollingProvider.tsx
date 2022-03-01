import React, {
  ReactNode,
  createRef,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { throttle, isWindowDefine, throttleEvent } from './utils';
import { Provider, RefsRegister, Meta } from './context';
import smoothscroll from 'smoothscroll-polyfill';

type Props = {
  throttleDelay?: number;
  scrollBehavior?: 'auto' | 'smooth';
  offset?: number;
  children: ReactNode;
};

const REFS: RefsRegister = {};
const META: Meta = {};

if (isWindowDefine()) {
  smoothscroll.polyfill();
  throttleEvent('scroll', 'optimizedScroll', document);
}

export const ScrollingProvider = ({
  throttleDelay = 200,
  scrollBehavior = 'smooth',
  offset = 0,
  children,
}: Props) => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    document.addEventListener('optimizedScroll', throttleScroll, true);
    handleScroll();
    return () => {
      document.removeEventListener('optimizedScroll', throttleScroll, true);
    };
  }, []);

  const handleScroll = () => {
    const selectedSection = Object.keys(REFS).reduce(
      (acc, id) => {
        const sectionRef = REFS[id] && REFS[id].current;
        if (!sectionRef) {
          return {
            id: id,
            differenceFromTop: 0,
          };
        }

        const { top } = sectionRef.getBoundingClientRect();
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

  const throttleScroll = throttle(handleScroll, throttleDelay);

  const registerRef = ({ id, meta }: { id: string; meta: unknown }) => {
    const ref = createRef<HTMLElement>();
    REFS[id] = ref;
    META[id] = meta;
    return ref;
  };

  const scrollTo = (section: string) => {
    const sectionRef = REFS[section] && REFS[section].current;

    if (!sectionRef) return console.warn('Section ID not recognized!'); // eslint-disable-line

    setSelected(section);
    window.scrollTo({
      top: sectionRef.offsetTop + offset,
      behavior: scrollBehavior,
    });
  };

  const value = useMemo(
    () => ({
      registerRef,
      scrollTo,
      refs: REFS,
      meta: META,
      selected,
    }),
    [selected, REFS],
  );

  return <Provider value={value}>{children}</Provider>;
};
