type RefsRegister = {
  [x: string]: RefObject<HTMLElement>;
};

type ScrollContextType = {
  registerRef: (id: string) => RefObject<HTMLElement> | null;
  scrollTo: (section: string) => void;
  refs: RefsRegister;
  selected: string;
};
