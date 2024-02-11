import React from 'react';
import clsx from 'clsx';
import { X } from 'react-feather';

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  /**
   * @default true
   */
  withCloseButton?: boolean
  isCloseOnClickOutside?: boolean
} & React.ComponentProps<'div'>;

export function Modal(props: ModalProps): React.ReactNode {
  const {
    isOpen,
    onClose,
    withCloseButton = true,
    isCloseOnClickOutside,
    children,
    className,
    ...baseProps
  } = props;
  return (
    <div
      onClick={(isCloseOnClickOutside) ? onClose : undefined}
      className={clsx('fixed inset-0 flex justify-center items-center transition-colors', isOpen ? 'visible bg-black/20' : 'invisible', className)}
      {...baseProps}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'bg-white  shadow p-6 transition-all',
          isOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0',
        )}
      >
        {withCloseButton && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600"
        >
          <X />
        </button>
        )}
        {children}
      </div>
    </div>
  );
}
