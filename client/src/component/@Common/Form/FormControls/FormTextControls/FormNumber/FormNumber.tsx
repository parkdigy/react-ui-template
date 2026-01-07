import { type FormNumberCommands, type FormNumberProps as Props } from './FormNumber.types';
import { FormText, type FormTextCommands } from '../FormText';
import { formatNumber } from '@pdg/formatting';

export const FormNumber = ({ ref, className, name, allowMinus, ...props }: Props) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [textCommands, setTextCommands] = useState<FormTextCommands>();

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<FormNumberCommands | null>(() => (textCommands ? textCommands : null), [textCommands]);

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleFinalValue = useCallback(
    (value: string) => {
      if (allowMinus) {
        if (value.startsWith('-')) {
          value = `-${value.replace(/-/g, '')}`;
        } else {
          value = value.replace(/-/g, '');
        }
      }
      return formatNumber(value);
    },
    [allowMinus]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <FormText
      $custom
      $type='number'
      $commands={commands}
      type='text'
      className={classnames(className, 'FormNumber')}
      name={name}
      maxLength={12}
      preventKeys={allowMinus ? /[^0-9/-]/g : /[^0-9]/g}
      onCommands={setTextCommands}
      onFinalValue={handleFinalValue}
      {...props}
    />
  );
};

export default FormNumber;
