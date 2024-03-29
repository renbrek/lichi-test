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
    // github issue: https://github.com/jsx-eslint/eslint-plugin-react/issues/3284#issuecomment-1802145045
    children,
    variant = 'primary',
    isFullWidth,
    className,
    ...baseProps
  } = props;
  return (
    <button
      className={clsx(
        'py-2 px-4 wrap break-all',
        variant === 'primary' && 'bg-black text-white hover:bg-white border border-transparent hover:border-black hover:text-black',
        variant === 'secondary' && 'bg-gray-100 border border-gray-300 hover:bg-gray-200',
        baseProps.disabled && 'bg-gray-100 border border-gray-300 hover:bg-gray-300 hover:text-white hover:border-gray-300',
        isFullWidth ? 'w-full' : 'w-fit',
        className,
      )}
      {...baseProps}
    >
      {children}
    </button>
  );
}
