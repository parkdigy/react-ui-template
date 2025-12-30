import React, { useRef } from 'react';
import { FormSelectCommands, FormSelectItem, FormSelectProps as Props } from './FormSelect.types';
import { FormControlBase } from '../@common';
import { koreanAppendRul } from '@pdg/korean';
import { useFormControlGroupState, useFormState } from '../../FormContext';
import { FormSelectControl, FormSelectControlCommands } from './FormSelectControl';

export const FormSelect = <T extends string | number>({
  ref,
  // FormSelectProps
  size = 'normal',
  items,
  loading,
  placeholder,
  searchable,
  clearable,
  emptyItemText,
  loadingEmptyItemText,
  onFocus,
  onBlur,
  onOpenDropdown,
  // FormControlCommonProps
  className,
  title,
  name,
  required,
  error: initError = false,
  disabled: initDisabled,
  value: initValue,
  onChange,
  onErrorChange,
  onValidate,
  // FormControlBaseProps
  width,
  minWidth = 80,
  ...formControlBaseProps
}: Props<T>) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { disabled: formDisabled } = useFormState();
  const controlGroupState = useFormControlGroupState();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const controlCommandsRef = useRef<FormSelectControlCommands>(null);
  const onChangeRef = useAutoUpdateRef(onChange);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const getItemOfValue = useCallback(
    (value: T | undefined) => {
      return value === undefined ? undefined : items?.find((v) => v.value === value);
    },
    [items]
  );

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isFocus, setIsFocus] = useState(false);

  /** activeItem */
  const [activeItem, _setActiveItem] = useState(getItemOfValue(initValue));
  const activeItemRef = useAutoUpdateRef(activeItem);
  const setActiveItem = useCallback(
    (item: FormSelectItem<T> | undefined) => {
      _setActiveItem(item);
      activeItemRef.current = item;
      onChangeRef.current?.(item?.value);
    },
    [activeItemRef, onChangeRef]
  );

  /** error */
  const [error, setError] = useState(initError);
  useFirstSkipChanged(() => setError(initError), [initError]);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const disabled = initDisabled || formDisabled;

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 포커스 */
  const focus = useCallback(() => {
    controlCommandsRef.current?.focus();
  }, []);

  /** 유효성 검사 */
  const validate = useCallback(() => {
    let error: string | boolean = false;

    if (required && activeItemRef.current === undefined) {
      if (notEmpty(title)) {
        error = `${koreanAppendRul(title)} 선택해 주세요.`;
      } else {
        error = '필수 선택 항목입니다.';
      }
    }

    if (error === false && onValidate) {
      error = onValidate(activeItemRef.current?.value);
    }

    if (error === false) {
      setError(false);
      return true;
    } else {
      setError(error);
      return false;
    }
  }, [activeItemRef, onValidate, required, setError, title]);

  /** 값 가져오기 */
  const getValue = useCallback(() => {
    return activeItemRef.current?.value;
  }, [activeItemRef]);

  /** 값 설정 */
  const setValue = useCallback(
    (newValue: T | undefined) => {
      setActiveItem(getItemOfValue(newValue));
    },
    [getItemOfValue, setActiveItem]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useFirstSkipEffect(() => {
    setActiveItem(getItemOfValue(initValue));
  }, [initValue, items]);

  useFirstSkipEffect(() => {
    if (error) {
      validate();
    }
  }, [activeItem]);

  useFirstSkipEffect(() => {
    onErrorChange?.(error);
    controlGroupState?.onErrorChange(name, error);
  }, [error]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<FormSelectCommands<T>>(
    () => ({ focus, validate, setError, getValue, setValue }),
    [focus, getValue, setError, setValue, validate]
  );

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleControlCommands = useCallback((commands: FormSelectControlCommands) => {
    controlCommandsRef.current = commands;
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocus(true);
    onFocus?.();
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    setIsFocus(false);
    onBlur?.();
  }, [onBlur]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <FormControlBase
      className={classnames(className, 'FormSelect')}
      type='select'
      name={name}
      commands={commands}
      title={title}
      required={required}
      disabled={disabled}
      error={error}
      width={width}
      minWidth={width === undefined ? minWidth : undefined}
      gap={8}
      focused={isFocus}
      {...formControlBaseProps}
    >
      <FormSelectControl
        size={size}
        disabled={disabled}
        error={error !== false}
        loading={loading}
        searchable={searchable}
        clearable={clearable}
        placeholder={placeholder}
        emptyItemText={emptyItemText}
        loadingEmptyItemText={loadingEmptyItemText}
        items={items}
        itemLabel={activeItem?.label}
        activeItem={activeItem}
        onActiveItem={setActiveItem}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onOpenDropdown={onOpenDropdown}
        onCommands={handleControlCommands}
      />
    </FormControlBase>
  );
};

export default FormSelect;
