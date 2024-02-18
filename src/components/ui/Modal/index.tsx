import React from 'react';
import clsx from 'clsx';
import { X } from 'react-feather';
import { Portal } from '@/components/ui/Portal';
import { motion } from 'framer-motion';

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  /**
   * @default true
   */
  withCloseButton?: boolean
  isCloseOnClickOutside?: boolean
} & React.ComponentProps<'dialog'>;

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
    <Portal>
      <div
        onClick={(isCloseOnClickOutside) ? onClose : undefined}
        className={clsx('fixed inset-0 flex justify-center items-center transition-colors', isOpen ? 'visible bg-black/20' : 'invisible')}
        {...baseProps}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: 'easeOut',
              duration: 0.2,
            },
          }}
          style={{ position: 'relative' }}
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            'relative bg-white shadow p-6 transition-all w-full max-w-[720px]',
            isOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0',
            className,
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
          <div className="max-h-[80vh] overflow-auto">
            {children}
          </div>
        </motion.div>
      </div>
    </Portal>
  );
}
