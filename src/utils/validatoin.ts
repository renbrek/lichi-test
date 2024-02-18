import { CommonFormFieldProps } from '../components/ui/Form';

export type ValidationRules = {
  maxLength?: ValidationRule<number>
  minLength?: ValidationRule<number>
  isRequired?: ValidationRule<boolean>
};

export type ValidationRule<TValue> = {
  value: TValue
  errorMessage?: string
};

export function getValidationErrors(value: CommonFormFieldProps['value'], validationRules: ValidationRules): string[] {
  const errors: string[] = [];

  if (validationRules.isRequired && !value) {
    errors.push(validationRules.isRequired.errorMessage ?? 'Field is required');
  }
  if (validationRules.maxLength && !!value && value.length > validationRules.maxLength.value) {
    errors.push(validationRules.maxLength.errorMessage ?? `Max length is ${validationRules.maxLength.value}`);
  }
  if (validationRules.minLength && !!value && value.length < validationRules.minLength.value) {
    errors.push(validationRules.minLength.errorMessage ?? `Min length is ${validationRules.minLength.value}`);
  }
  return errors;
}
