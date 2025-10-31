import { FormTextCommands, FormTextProps } from '../FormText';

export interface FormTelCommands extends FormTextCommands {}

export interface FormTelProps extends Omit<FormTextProps, 'ref' | 'type' | 'clear' | 'onCommands'> {
  invalidTelErrorText?: string;
  strictFormat?: boolean;
}
