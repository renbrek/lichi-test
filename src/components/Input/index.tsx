import React from 'react';
import clsx from 'clsx';
import { BaseFieldProps } from '@/types';
import { FieldWrap } from '../FieldWrap';

export type InputProps = BaseFieldProps & React.ComponentProps<'input'>;

export function Input(props: InputProps): React.ReactNode {
  const { errorMessage, isError, ...baseProps } = props;

  const isHasError = errorMessage || isError;

  const defaultInputId = React.useId();
  const inputId = baseProps.id ?? defaultInputId;

  return (
    <FieldWrap fieldId={inputId} label={baseProps.label} errorMessage={errorMessage}>
      <input
        className={clsx(
          'outline-none w-full rounded-none border border-gray-400 p-2 focus:border-black',
          isHasError && 'border-red-500',
        )}
        id={inputId}
        {...baseProps}
      />
    </FieldWrap>
  );
}
