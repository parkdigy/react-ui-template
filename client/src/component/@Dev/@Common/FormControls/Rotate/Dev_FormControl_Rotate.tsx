import React from 'react';
import { Dev_FormControl_RotateProps as Props } from './Dev_FormControl_Rotate.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_Rotate = ({ variant = 'select', value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return ([90, 180, 270] as const).map((rotate) => lv(`${rotate}도`, rotate));
  }, []);

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Refresh' title='회전 (rotate)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='rotate' items={selectItems} clearable placeholder='미지정' value={value} {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='rotate' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Rotate);
