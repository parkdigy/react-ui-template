import { FormTextCommands, FormTextProps } from '../FormText';

export interface FormPasswordCommands extends FormTextCommands {}

export interface FormPasswordProps extends Omit<
  FormTextProps,
  'ref' | 'type' | 'clear' | 'autoComplete' | 'onCommands'
> {
  ref?: Ref<FormPasswordCommands>;
  rules?: boolean;
  linkName?: string;
}
