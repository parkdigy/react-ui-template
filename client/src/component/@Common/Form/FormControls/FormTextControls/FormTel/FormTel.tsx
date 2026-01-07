import { type FormTelCommands, type FormTelProps as Props } from './FormTel.types';
import { FormText, type FormTextCommands } from '../FormText';
import { formatTelNo } from '@pdg/formatting';

export const FormTel = ({
  ref,
  className,
  name,
  onValidate,
  invalidTelErrorText = '올바른 전화번호 형식을 입력해 주세요.',
  strictFormat,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [textCommands, setTextCommands] = useState<FormTextCommands>();

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<FormTelCommands | null>(() => (textCommands ? textCommands : null), [textCommands]);

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleValidate = useCallback(
    (value: string) => {
      if (notEmpty(value)) {
        if (strictFormat && !isTelNo(value)) {
          return invalidTelErrorText;
        } else if (value.length < 9) {
          return invalidTelErrorText;
        }
      }

      if (onValidate) {
        return onValidate(value);
      } else {
        return false;
      }
    },
    [invalidTelErrorText, onValidate, strictFormat]
  );

  const handleFinalValue = useCallback((value: string) => {
    return formatTelNo(value);
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <FormText
      $custom
      $type='tel'
      $commands={commands}
      type='text'
      className={classnames(className, 'FormTel')}
      name={name}
      preventKeys={/[\s]/g}
      onCommands={setTextCommands}
      onValidate={handleValidate}
      onFinalValue={handleFinalValue}
      {...props}
    />
  );
};

export default FormTel;
