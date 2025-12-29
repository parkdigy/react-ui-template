import React from 'react';
import { FormHiddenCommands, FormHiddenProps as Props } from './FormHidden.types';
import { useFormState } from '../../FormContext';
import { FormControlBase, FormControlCommands } from '../@common';

export const FormHidden = ({
  ref,
  // FormControlCommonProps
  className,
  name,
  onChange,
  value: initValue,
  disabled: initDisabled,
  // FormControlBaseProps
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { disabled: formDisabled } = useFormState();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const innerRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useAutoUpdateRef(onChange);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, _setValue] = useState(initValue ?? '');
  useFirstSkipChanged(() => _setValue(initValue ?? ''), [initValue]);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (v: typeof value) => {
      _setValue(v);
      valueRef.current = v;
    },
    [valueRef]
  );

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const disabled = initDisabled || formDisabled;

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands: FormControlCommands & FormHiddenCommands = useMemo(
    () => ({
      focus() {
        innerRef.current?.focus();
      },
      getValue() {
        return valueRef.current;
      },
      setValue(newValue) {
        setValue(ifUndefined(newValue, ''));
        onChangeRef.current?.(ifUndefined(newValue, ''));
      },
      validate() {
        return true;
      },
      setError() {},
    }),
    [setValue, valueRef, onChangeRef]
  );

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value;
      setValue(newValue);
      onChangeRef.current?.(ifUndefined(newValue, ''));
    },
    [onChangeRef, setValue]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <FormControlBase
      className={classnames(className, 'FormHidden')}
      type='hidden'
      hiddenControl
      gap={12}
      name={name}
      commands={commands}
      disabled={disabled}
      {...props}
    >
      <input type='hidden' value={value} onChange={handleChange} />
    </FormControlBase>
  );
};

export default FormHidden;
