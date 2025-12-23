import React from 'react';
import { Dev_FormControl_FormCheckboxTypeProps as Props } from './Dev_FormControl_FormCheckboxType.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_FormCheckboxType = ({ variant = 'select', value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return (['checkbox', 'switch'] as const).map((formCheckboxType) => lv(formCheckboxType, formCheckboxType));
  }, []);

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Category' title='구분 (type)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect
          name='formCheckboxType'
          items={selectItems}
          clearable
          placeholder='미지정'
          value={value}
          {...props}
        />
      ) : (
        <FormRadioGroup type='smallButton' name='formCheckboxType' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_FormCheckboxType;
