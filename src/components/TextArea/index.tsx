import React from 'react';
import clsx from 'clsx';
import { BaseFieldProps } from '@/types';
import { FieldWrap } from '../FieldWrap';

export type TextAreaProps = BaseFieldProps & React.ComponentProps<'textarea'>;

export function TextArea(props: TextAreaProps): React.ReactNode {
  const {
    errorMessage, isError, label, className, ...baseProps
  } = props;

  const isHasError = errorMessage || isError;

  const defaultTextAreaId = React.useId();
  const textAreaId = baseProps.id ?? defaultTextAreaId;

  return (
    <FieldWrap fieldId={textAreaId} label={label}>
      <textarea
        className={clsx(
          'outline-none w-full rounded-none border border-gray-400 p-2 focus:border-black',
          isHasError && 'border-red-500',
          className,
        )}
        id={textAreaId}
        {...baseProps}
      />
    </FieldWrap>
  );
}
