import React, { HTMLProps, useMemo, useContext } from 'react';
import { ScrollContext } from './context';

interface IProps extends HTMLProps<HTMLDivElement> {
  id: string;
  meta?: unknown;
  children: React.ReactNode;
}

export const Section = ({ id, children, meta, ...rest }: IProps) => {
  const { registerRef } = useContext(ScrollContext);
  const ref = useMemo(() => registerRef({ id, meta }), [id]);

  return (
    <section {...rest} ref={ref} id={id}>
      {children}
    </section>
  );
};
