import { Dev_FormControl_ChipVariantProps as Props } from './Dev_FormControl_ChipVariant.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_ChipVariant = ({ variant = 'select', value = '', disabled, onChange }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return (['contained', 'outlined'] as const).map((chipVariant) => lv(chipVariant, chipVariant));
  }, []);

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Category' title='스타일 (variant)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect
          name='chipVariant'
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
          name='chipVariant'
          items={radioItems}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_ChipVariant;
