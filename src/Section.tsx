import React, { useMemo, useContext } from 'react';
import { ScrollContext } from './context';

type Props = {
  id: string;
  children: React.ReactNode;
} & React.HTMLProps<HTMLButtonElement>;

const Section = ({ id, children, ...rest }: Props) => {
  const { registerRef } = useContext(ScrollContext);
  const ref = useMemo(() => registerRef(id), [id]);

  return (
    <section {...rest} ref={ref} id={id}>
      {children}
    </section>
  );
};

export default Section;
