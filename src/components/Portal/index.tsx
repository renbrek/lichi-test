import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = {
  children: React.ReactNode;
};

export function Portal(props: PortalProps) {
  const { children } = props;

  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  return (mounted && ref.current) ? createPortal(children, ref.current) : null;
}
