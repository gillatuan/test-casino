import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className = 'max-w-[1200px] mx-auto mt-[28px]' }: Props) => {
  return <div className={className}>{children}</div>;
};

export default Wrapper;
