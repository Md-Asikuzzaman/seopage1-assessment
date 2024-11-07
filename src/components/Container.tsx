import clsx from 'clsx';
import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx('max-w-[1600px] mx-auto', className)}>{children}</div>
  );
};

export default Container;
