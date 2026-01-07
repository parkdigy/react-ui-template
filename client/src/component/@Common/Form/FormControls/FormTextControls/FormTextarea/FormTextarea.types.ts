import { type FormControlCommands, type FormControlCommonProps } from '../../@common';

export type FormTextareaHTMLProps = HTMLTagProps<'textarea'>;

export interface FormTextareaCommands extends FormControlCommands {
  getValue: () => string;
  setValue: (value: string) => void;
  clear: () => void;
}

export interface FormTextareaProps
  extends
    FormControlCommonProps<string>,
    Pick<FormTextareaHTMLProps, 'maxLength' | 'rows' | 'onFocus' | 'onBlur' | 'onKeyUp' | 'onKeyDown'> {
  ref?: Ref<FormTextareaCommands>;
  placeholder?: string;
  hideEmptyErrorText?: boolean;
  onFinalValue?: (value: string) => string;
}
