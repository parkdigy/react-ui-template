import { Dev_FormControl_AlertTypeProps as Props } from './Dev_FormControl_AlertType.types';
import { AlertType, FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_AlertType = ({ variant = 'select', value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return AlertType.map((alertType) => lv(alertType, alertType));
  }, []);

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Category' title='유형 (type)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='alertType' items={selectItems} clearable placeholder='미지정' value={value} {...props} />
      ) : (
        <FormRadioGroup name='alertType' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_AlertType;
