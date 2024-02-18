import React from 'react';

export type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps): React.ReactNode {
  return <div className="max-w-[640px] my-0 mx-auto">{children}</div>;
}
