import React from 'react';
import { BaseFieldProps } from '@/types/BaseFieldProps';

export type FieldWrapProps = {
  children: React.ReactNode;
  fieldId: string;
} & Pick<BaseFieldProps, 'errorMessages' | 'label'>;

export function FieldWrap(props: FieldWrapProps): React.ReactNode {
  const {
    children,
    fieldId,
    label,
    errorMessages,
  } = props;
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={fieldId}
          className="text-gray-600 font-light mb-1 text-sm"
        >
          {label}
        </label>
      )}
      {children}
      {(!!errorMessages && (errorMessages.length > 0)) && (
        <>
          {errorMessages.map((errorMessage) => (
            <span
              key={errorMessage}
              className="mt-1 text-red-500 text-xs"
            >
              {errorMessage}
            </span>
          ))}
        </>
      )}
    </div>
  );
}
