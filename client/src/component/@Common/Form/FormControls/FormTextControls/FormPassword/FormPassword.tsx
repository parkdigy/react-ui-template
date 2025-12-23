import React from 'react';
import { FormPasswordCommands, FormPasswordProps as Props } from './FormPassword.types';
import { useForwardRef, useTimeoutRef } from '@pdg/react-hook';
import { useFormState } from '../../../FormContext';
import { FormText, FormTextCommands } from '../FormText';
import { ShowButton } from './ShowButton';
import { FormRuleCheck } from '../../../FormLayout';

export const FormPassword = ({
  ref,
  className,
  name,
  value: initValue,
  error: initError = false,
  disabled,
  required,
  rules,
  linkName,
  onChange,
  onErrorChange,
  onValidate,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { getControlCommands } = useFormState();

  /********************************************************************************************************************
   * Timeout
   * ******************************************************************************************************************/

  const [, setUpdateValueRulesTimeout] = useTimeoutRef();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [textCommands, setTextCommands] = useState<FormTextCommands>();
  const [isShowPassword, setIsShowPassword] = useState(false);

  /** error */
  const [error, _setError] = useState(initError);
  useChanged(initError) && _setError(initError);

  /** value */
  const [value, setValue] = useState(initValue);
  useChanged(initValue) && setValue(initValue);

  /** isContainsAlphabet */
  const [isContainsAlphabet, setIsContainsAlphabet] = useState(false);
  const isContainsAlphabetRef = useAutoUpdateRef(isContainsAlphabet);

  /** isContainsNumeric */
  const [isContainsNumeric, setIsContainsNumeric] = useState(false);
  const isContainsNumericRef = useAutoUpdateRef(isContainsNumeric);

  /** isContainsSpecialChar */
  const [isContainsSpecialChar, setIsContainsSpecialChar] = useState(false);
  const isContainsSpecialCharRef = useAutoUpdateRef(isContainsSpecialChar);

  /** isOverLength */
  const [isOverLength, setIsOverLength] = useState(false);
  const isOverLengthRef = useAutoUpdateRef(isOverLength);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const controlHelperText = useMemo(() => {
    if (rules) {
      return (
        <Flex row center gap={10} wrap>
          <FormRuleCheck title='영문' checked={isContainsAlphabet} error={error !== false && notEmpty(value)} />
          <FormRuleCheck title='숫자' checked={isContainsNumeric} error={error !== false && notEmpty(value)} />
          <FormRuleCheck title='특수문자' checked={isContainsSpecialChar} error={error !== false && notEmpty(value)} />
          <FormRuleCheck title='8자리 이상' checked={isOverLength} error={error !== false && notEmpty(value)} />
        </Flex>
      );
    }
  }, [error, isContainsAlphabet, isContainsNumeric, isContainsSpecialChar, isOverLength, rules, value]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const effectEvent = useEffectEvent(() => {
      if (rules) {
        setUpdateValueRulesTimeout(() => {
          setIsContainsAlphabet(notEmpty(value) && new RegExp(/[a-z]/i).test(value));
          setIsContainsNumeric(notEmpty(value) && new RegExp(/[\d]/i).test(value));
          setIsContainsSpecialChar(notEmpty(value) && new RegExp(/[`~!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/i).test(value));
          setIsOverLength(notEmpty(value) && value.length >= 8);
        }, 100);
      }
    });
    useEffect(() => {
      return effectEvent();
    }, [value]);
  }

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const setError = useCallback(
    (newError: string | boolean) => {
      _setError(newError);
      onErrorChange?.(newError);
    },
    [_setError, onErrorChange]
  );

  {
    const effectEvent = useEffectEvent(() => {
      if (
        rules &&
        error !== false &&
        isContainsSpecialChar &&
        isContainsAlphabet &&
        isContainsNumeric &&
        isOverLength
      ) {
        textCommands?.setError(false);
      }
    });
    useEffect(() => {
      return effectEvent();
    }, [rules, isContainsAlphabet, isContainsNumeric, isContainsSpecialChar, isOverLength]);
  }

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<FormPasswordCommands | null>(() => (textCommands ? textCommands : null), [textCommands]);

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
      onChange?.(newValue);
    },
    [onChange, setValue]
  );

  const handleShowButtonClick = useCallback(() => {
    setIsShowPassword((prev) => !prev);
    textCommands?.focus();
  }, [textCommands]);

  const handleValidate = useCallback(
    (value: string) => {
      if (required || notEmpty(value)) {
        if (
          rules &&
          (!isContainsAlphabetRef.current ||
            !isContainsNumericRef.current ||
            !isContainsSpecialCharRef.current ||
            !isOverLengthRef.current)
        ) {
          return true;
        }
      }

      let error: string | boolean = false;

      if (onValidate) {
        error = onValidate(value);
      }

      if (error === false && linkName) {
        const formControl = getControlCommands<FormPasswordCommands>(linkName);
        if (formControl && formControl.getValue() !== value) {
          error = '비밀번호가 일치하지 않습니다.';
        }
      }

      return error;
    },
    [
      getControlCommands,
      isContainsAlphabetRef,
      isContainsNumericRef,
      isContainsSpecialCharRef,
      isOverLengthRef,
      linkName,
      onValidate,
      required,
      rules,
    ]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <FormText
      $custom
      $type='password'
      $commands={commands}
      $controlHelperText={controlHelperText}
      type={isShowPassword && !disabled ? 'text' : 'password'}
      className={classnames(className, 'FormPassword')}
      name={name}
      clear={false}
      endAdornment={
        notEmpty(value) && !disabled ? (
          <ShowButton active={isShowPassword} onClick={handleShowButtonClick} />
        ) : undefined
      }
      value={value}
      error={error}
      required={required}
      disabled={disabled}
      autoComplete='off'
      onErrorChange={setError}
      onChange={handleChange}
      onCommands={setTextCommands}
      onValidate={handleValidate}
      {...props}
    />
  );
};

export default FormPassword;
