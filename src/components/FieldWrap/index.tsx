import React from 'react';

export type FieldWrapProps = {
  children: React.ReactNode;
  fieldId: string;
  errorMessage?: string;
  label?: string;
};

export function FieldWrap(props: FieldWrapProps): React.ReactNode {
  const {
    children, fieldId, label, errorMessage,
  } = props;

  return (
    <div className="flex flex-col w-full">
      {label && <label htmlFor={fieldId} className="text-gray-600 font-light mb-1 text-sm">{label}</label>}
      {children}
      {errorMessage && <span className="mt-1 text-red-500 text-xs">{errorMessage}</span>}
    </div>
  );
}
