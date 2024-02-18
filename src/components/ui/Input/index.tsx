import React from 'react';
import clsx from 'clsx';
import { BaseFieldProps } from '@/types/baseFieldProps';
import { FieldWrap } from '../FieldWrap';

export type InputProps = BaseFieldProps & React.ComponentProps<'input'>;

export function Input(props: InputProps): React.ReactNode {
  const {
    errorMessages,
    isError,
    label,
    className,
    ...baseProps
  } = props;

  const isHasError = (!!errorMessages && errorMessages.length > 0) || isError;

  const defaultInputId = React.useId();
  const inputId = baseProps.id ?? defaultInputId;

  return (
    <FieldWrap fieldId={inputId} label={label} errorMessages={errorMessages}>
      <input
        className={clsx(
          'outline-none w-full rounded-none border border-gray-400 p-2 focus:border-black',
          isHasError && 'border-red-500',
          className,
        )}
        id={inputId}
        {...baseProps}
      />
    </FieldWrap>
  );
}
