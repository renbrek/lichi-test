import React from 'react';
import clsx from 'clsx';
import { BaseFieldProps } from '@/types';
import { FieldWrap } from '../FieldWrap';

export type TextAreaProps = BaseFieldProps & React.ComponentProps<'textarea'>;

export function TextArea(props: TextAreaProps): React.ReactNode {
  const {
    errorMessages,
    isError,
    label,
    className,
    ...baseProps
  } = props;

  const isHasError = (!!errorMessages && errorMessages.length > 0) || isError;

  const defaultTextAreaId = React.useId();
  const textAreaId = baseProps.id ?? defaultTextAreaId;

  return (
    <FieldWrap fieldId={textAreaId} label={label} errorMessages={errorMessages}>
      <textarea
        className={clsx(
          'outline-none w-full rounded-none border border-gray-400 p-2 focus:border-black min-h-9 max-h-96',
          isHasError && 'border-red-500',
          className,
        )}
        id={textAreaId}
        {...baseProps}
      />
    </FieldWrap>
  );
}
