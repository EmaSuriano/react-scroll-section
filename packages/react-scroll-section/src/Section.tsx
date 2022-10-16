import { useMemo, useContext, useEffect, ReactNode, HTMLProps } from 'react';
import { ScrollContext } from './context';

type Props = {
  id: string;
  meta?: unknown;
  children: ReactNode;
} & HTMLProps<HTMLDetailsElement>;

export const Section = ({ id, children, meta, ...rest }: Props) => {
  const { registerRef, unregisterRef } = useContext(ScrollContext);
  const ref = useMemo(() => registerRef({ id, meta }), [id]);

  useEffect(() => {
    return function () {
      unregisterRef(id);
    };
  }, []);

  return (
    <section {...rest} ref={ref} id={id}>
      {children}
    </section>
  );
};
