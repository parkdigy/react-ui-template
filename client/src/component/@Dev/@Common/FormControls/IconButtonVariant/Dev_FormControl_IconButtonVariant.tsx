import React from 'react';
import { Dev_FormControl_IconButtonVariantProps as Props } from './Dev_FormControl_IconButtonVariant.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_IconButtonVariant = ({ variant = 'select', value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return (['default', 'rounded'] as const).map((iconButtonVariant) => lv(iconButtonVariant, iconButtonVariant));
  }, []);

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Category' title='스타일 (variant)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect
          name='iconButtonVariant'
          items={selectItems}
          clearable
          placeholder='미지정'
          value={value}
          {...props}
        />
      ) : (
        <FormRadioGroup type='smallButton' name='iconButtonVariant' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_IconButtonVariant;
