import { type Dev_FormControl_IconGapProps as Props } from './Dev_FormControl_IconGap.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_IconGap = ({ variant = 'select', value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => [0, 5, 10, 20, 30].map((v) => lv(`${v}`, v)), []);

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Expand' iconProps={{ rotate: 90 }} title='아이콘 간격 (iconGap)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='iconGap' items={selectItems} placeholder='미지정' clearable value={value} {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='iconGap' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_IconGap;
