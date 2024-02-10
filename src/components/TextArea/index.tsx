import React from 'react';
import clsx from 'clsx';
import { FieldWrap } from '../FieldWrap';

export type TextAreaProps = {
  errorMessage?: string;
  isError?: boolean;
} & React.HTMLProps<HTMLTextAreaElement>;

export function TextArea(props: TextAreaProps): React.ReactNode {
  const { errorMessage, isError, ...baseProps } = props;

  const isHasError = errorMessage || isError;

  const defaultTextAreaId = React.useId();
  const textAreaId = baseProps.id ?? defaultTextAreaId;

  return (
    <FieldWrap fieldId={textAreaId} label={baseProps.label}>
      <textarea
        className={clsx(
          'outline-none w-full rounded-none border border-gray-400 p-2 focus:border-black',
          isHasError && 'border-red-500',
        )}
        id={textAreaId}
        {...baseProps}
      />
    </FieldWrap>
  );
}
