export type FormInputHTMLElement = HTMLTagElement<'input'>;
export type FormInputHTMLProps = HTMLTagProps<'input'>;

export interface FormInputProps extends Pick<
  FormInputHTMLProps,
  | 'type'
  | 'name'
  | 'disabled'
  | 'value'
  | 'placeholder'
  | 'formNoValidate'
  | 'maxLength'
  | 'inputMode'
  | 'autoComplete'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'onChange'
  | 'onFocus'
  | 'onBlur'
  | 'onKeyUp'
  | 'onKeyDown'
  | 'onPaste'
> {
  ref?: Ref<FormInputHTMLElement>;
  error: boolean;
  clear?: boolean;
  endAdornment?: ReactNode;
  onClearClick: () => void;
}
