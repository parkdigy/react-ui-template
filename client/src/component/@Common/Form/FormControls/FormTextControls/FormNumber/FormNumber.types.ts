import { FormTextCommands, FormTextProps } from '../FormText';

export interface FormNumberCommands extends FormTextCommands {}

export interface FormNumberProps extends Omit<FormTextProps, 'ref' | 'type' | 'clear' | 'onCommands'> {
  ref?: Ref<FormNumberCommands>;
  allowMinus?: boolean;
}
