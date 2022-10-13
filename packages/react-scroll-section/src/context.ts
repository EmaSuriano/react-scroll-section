import { createContext, RefObject } from 'react';

export type RefsRegister = Record<string, RefObject<HTMLElement>>;

export type Meta = Record<string, unknown>;

export type ScrollContextType = {
    registerRef: (args: { id: string; meta: unknown }) => RefObject<HTMLElement> | null;
    scrollTo: (section: string) => void;
    refs: RefsRegister;
    meta: Meta;
    selected: string;
};

const DEFAULT_CONTEXT: ScrollContextType = {
    selected: '',
    refs: {},
    meta: {},
    scrollTo: () => {},
    registerRef: () => null,
};

export const ScrollContext = createContext(DEFAULT_CONTEXT);

export const { Consumer, Provider } = ScrollContext;
