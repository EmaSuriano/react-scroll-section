import { createContext, RefObject } from 'react';

export type Section = {
  ref: RefObject<HTMLElement>;
  meta: unknown;
};

export type ScrollContextType = {
  registerRef: (args: {
    id: string;
    meta: unknown;
  }) => RefObject<HTMLElement> | null;
  unregisterRef: (id: string) => void;
  scrollTo: (section: string) => void;
  sections: Record<string, Section>;
  selected: string;
};

const DEFAULT_CONTEXT: ScrollContextType = {
  registerRef: () => null,
  unregisterRef: () => {},
  scrollTo: () => {},
  sections: {},
  selected: '',
};

export const ScrollContext = createContext(DEFAULT_CONTEXT);

export const { Consumer, Provider } = ScrollContext;
