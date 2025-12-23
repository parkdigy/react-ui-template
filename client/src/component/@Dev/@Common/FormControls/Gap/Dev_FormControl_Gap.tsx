import React from 'react';
import { Dev_FormControl_GapProps as Props } from './Dev_FormControl_Gap.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Gap = ({ variant, value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return ([5, 10, 15, 20, 25, 30] as const).map((gap) => lv(`${gap}`, gap));
  }, []);

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Expand' iconProps={{ rotate: 90 }} title='간격 (gap)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='gap' items={selectItems} placeholder='미지정' clearable value={value} {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='gap' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_Gap;
