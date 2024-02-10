import React from 'react';
import { FieldType } from '@/enums';
import { Input, InputProps } from '../Input';
import { TextArea, TextAreaProps } from '../TextArea';
import { Button, ButtonProps } from '../Button';

export type FormProps = {
  fields: FormField[]
  buttons?: ButtonProps[]
};

export type CommonFormFieldProps<S = string> = {
  value?: string | number,
  setValue?: (action: S | ((prevState: S) => S)) => void;
  validataion?: any
};

export type TextInputField = {
  fieldType: FieldType.TextInput
  fieldOptions?: InputProps
} & CommonFormFieldProps;

export type TextAreaField = {
  fieldType: FieldType.TextArea
  fieldOptions?: TextAreaProps
} & CommonFormFieldProps;

export type FormField = TextInputField | TextAreaField;

export function Form(props: FormProps): React.ReactNode {
  const { fields, buttons } = props;
  return (
    <form className="flex flex-col gap-2">
      {fields.map((field) => {
        switch (field.fieldType) {
          case FieldType.TextInput:
            return (
              <Input
                value={field.value}
                onChange={(e) => field.setValue?.(e.currentTarget.value)}
                {...field.fieldOptions}
              />
            );
          case FieldType.TextArea:
            return (
              <TextArea
                value={field.value}
                onChange={(e) => field.setValue?.(e.currentTarget.value)}
                {...field.fieldOptions}
              />
            );
          default:
            return <span>Field type does not implement</span>;
        }
      })}
      {buttons && <>{buttons.map((button) => <Button {...button} />)}</>}
    </form>
  );
}
