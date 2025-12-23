import { FormTextCommands, FormTextProps } from '../FormText';

export interface FormEmailCommands extends FormTextCommands {}

export interface FormEmailProps extends Omit<FormTextProps, 'ref' | 'type' | 'clear' | 'onCommands'> {
  ref?: Ref<FormEmailCommands>;
  invalidEmailErrorText?: string;
}
