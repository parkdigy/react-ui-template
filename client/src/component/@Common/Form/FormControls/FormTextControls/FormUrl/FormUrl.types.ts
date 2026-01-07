import { type FormTextCommands, type FormTextProps } from '../FormText';

export interface FormUrlCommands extends FormTextCommands {}

export interface FormUrlProps extends Omit<FormTextProps, 'ref' | 'type' | 'clear' | 'onCommands'> {
  ref?: Ref<FormUrlCommands>;
}
