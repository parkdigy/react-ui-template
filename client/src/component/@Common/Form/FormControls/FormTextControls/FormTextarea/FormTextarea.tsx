import React from 'react';
import { FormTextareaCommands, FormTextareaProps as Props } from './FormTextarea.types';
import { FormControlBase } from '../../@common';
import { koreanAppendRul } from '@pdg/korean';
import { useFormControlGroupState, useFormState } from '../../../FormContext';
import './FormTextarea.scss';

export const FormTextarea = ({
  ref,
  // FormTextareaProps
  placeholder,
  hideEmptyErrorText,
  onFinalValue,
  // HTMLTextareaProps
  maxLength,
  rows = 5,
  onFocus,
  onBlur,
  onKeyUp,
  onKeyDown,
  // FormControlCommonProps
  className,
  name,
  title,
  required,
  disabled: initDisabled,
  error: initError = false,
  value: initValue = '',
  onChange,
  onErrorChange,
  onValidate,
  // FormControlBaseProps
  ...formControlBaseProps
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { disabled: formDisabled } = useFormState();
  const controlGroupState = useFormControlGroupState();

  /********************************************************************************************************************
   * Timeout
   * ******************************************************************************************************************/

  const [, setValidateTimeout] = useTimeoutRef();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const innerRef = useRef<HTMLTextAreaElement>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isRequiredError, setIsRequiredError] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  /** error */
  const [error, setError] = useState(initError);
  useFirstSkipChanged(() => setError(initError), [initError]);

  const [value, _setValue] = useState(initValue);
  useFirstSkipChanged(() => _setValue(initValue), [initValue]);
  const valueRef = useAutoUpdateRef(value);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const disabled = initDisabled || formDisabled;

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useFirstSkipEffect(() => {
    onErrorChange?.(error);
    controlGroupState?.onErrorChange(name, error);
  }, [error]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const focus = useCallback(() => {
    innerRef.current?.focus();
  }, []);

  const validate = useCallback(() => {
    const currentValue = ifUndefined(valueRef.current, '');
    let error: string | boolean = false;
    let isRequiredError = false;

    if (required && empty(currentValue)) {
      isRequiredError = true;
      if (hideEmptyErrorText) {
        error = true;
      } else {
        if (notEmpty(title)) {
          error = `${koreanAppendRul(title)} 입력하지 않았습니다.`;
        } else {
          error = '필수 입력 항목입니다.';
        }
      }
    }
    if (error === false && onValidate) {
      error = onValidate(currentValue);
    }

    if (error === false) {
      setError(false);
      setIsRequiredError(false);
      return true;
    } else {
      setError(error);
      setIsRequiredError(isRequiredError);
      return false;
    }
  }, [hideEmptyErrorText, onValidate, required, setError, title, valueRef]);

  const getValue = useCallback(() => {
    return ifNullOrUndefined(valueRef.current, '');
  }, [valueRef]);

  const setValue = useCallback(
    (newValue: string) => {
      _setValue(newValue);
      valueRef.current = newValue;

      if (error !== false) {
        if (isRequiredError && notEmpty(newValue)) {
          setError(false);
          setIsRequiredError(false);
        } else {
          setValidateTimeout(() => {
            validate();
          }, 500);
        }
      }

      onChange?.(newValue);
    },
    [_setValue, error, isRequiredError, onChange, setValidateTimeout, validate, valueRef]
  );

  const clear = useCallback(() => {
    _setValue('');
    onChange?.('');
  }, [_setValue, onChange]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<FormTextareaCommands>(
    () => ({ focus, validate, setError, getValue, setValue, clear }),
    [clear, focus, getValue, setError, setValue, validate]
  );

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = onFinalValue ? onFinalValue(e.currentTarget.value) : e.currentTarget.value;

      setValue(newValue);

      onChange?.(newValue);
    },
    [onChange, onFinalValue, setValue]
  );

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocus(true);
      onFocus?.(e);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocus(false);
      onBlur?.(e);
      if (error) {
        validate();
      }
    },
    [error, onBlur, validate]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <FormControlBase
      className={classnames(className, 'FormTextarea')}
      type='textarea'
      name={name}
      commands={commands}
      title={title}
      error={error}
      required={required}
      disabled={disabled}
      gap={8}
      focused={isFocus}
      {...formControlBaseProps}
    >
      <textarea
        className={classnames(
          'FormTextarea_textarea',
          isFocus && 'FormTextarea_textarea-focused',
          disabled && 'FormTextarea_textarea-disabled',
          error !== false && 'FormTextarea_textarea-error'
        )}
        ref={innerRef}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        maxLength={maxLength}
        rows={rows}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
      >
        {value}
      </textarea>
    </FormControlBase>
  );
};

export default FormTextarea;
