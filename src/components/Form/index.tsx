/* eslint-disable react/no-array-index-key */
/* В данном случае не страшно использование индекса для ключа,
так как элементы не будут менять свой порядок или удаляться. */

import React, { ComponentProps } from 'react';
import { FieldType } from '@/enums';
import { ValidationRules, getValidationErrors } from '@/utils';
import { Input, InputProps } from '../Input';
import { TextArea, TextAreaProps } from '../TextArea';
import { Button, ButtonProps } from '../Button';

export type FormProps = {
  fields: FormField[]
  buttons?: ButtonProps[]
} & ComponentProps<'form'>;

export type CommonFormFieldProps<TValue = string> = {
  value?: TValue
  defaultValue?: TValue,
  setValue?: (action: TValue | ((prevState: TValue) => TValue)) => void
  validataion?: ValidationRules
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
  const {
    fields, buttons, className, ...baseProps
  } = props;

  return (
    <form className={`flex flex-col gap-2 w-full items-center ${className}`} {...baseProps}>
      {fields.map((field, index) => {
        const errors = (field.validataion)
          ? getValidationErrors(field.value, field.validataion)
          : undefined;
        switch (field.fieldType) {
          case FieldType.TextInput: {
            return (
              <Input
                key={index}
                value={field.value}
                errorMessages={errors}
                onChange={(e) => field.setValue?.(e.currentTarget.value)}
                {...field.fieldOptions}
              />
            );
          }
          case FieldType.TextArea:
            return (
              <TextArea
                key={index}
                value={field.value}
                errorMessages={errors}
                onChange={(e) => field.setValue?.(e.currentTarget.value)}
                {...field.fieldOptions}
              />
            );
          default:
            return <span key={index}>Field type does not implement</span>;
        }
      })}
      {buttons && <>{buttons.map((button, index) => <Button key={index} {...button} />)}</>}
    </form>
  );
}
