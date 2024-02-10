import clsx from 'clsx';
import React from 'react';

export type ButtonProps = {
  /**
   * @default "primary"
   */
  variant?: 'primary' | 'secondary'
  isFullWidth?: boolean
} & React.ComponentProps<'button'>;

export function Button(props: ButtonProps): React.ReactNode {
  const {
    children, variant = 'primary', isFullWidth, ...baseProps
  } = props;
  return (
    <button
      className={clsx(
        'py-2 px-4 wrap break-all',
        variant === 'primary' && 'bg-black text-white hover:bg-white border border-transparent hover:border-black hover:text-black',
        variant === 'secondary' && 'bg-gray-100 border border-gray-300 hover:bg-gray-200',
        isFullWidth ? 'w-full' : 'w-fit',
      )}
      {...baseProps}
    >
      {children}
    </button>
  );
}
