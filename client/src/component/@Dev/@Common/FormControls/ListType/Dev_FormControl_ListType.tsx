import { type Dev_FormControl_ListTypeProps as Props } from './Dev_FormControl_ListType.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_ListType = ({ variant = 'select', value = '', disabled, onChange }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return (['info'] as const).map((listType) => lv(listType, listType));
  }, []);

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Category' title='유형 (type)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect
          name='listType'
          items={selectItems}
          value={value}
          onChange={onChange}
          clearable
          disabled={disabled}
          placeholder='미지정'
        />
      ) : (
        <FormRadioGroup
          type='smallButton'
          name='listType'
          items={radioItems}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_ListType;
