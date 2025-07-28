import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  children,
  className,
  as: Comp = 'section',
}: BoundedProps) => {
  return (
    <Comp className={clsx('px-3 py-2 md:px-8 md:py-5', className)}>
      {children}
    </Comp>
  );
};

export default Bounded;
