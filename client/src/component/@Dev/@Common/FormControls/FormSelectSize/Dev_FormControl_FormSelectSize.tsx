import { type Dev_FormControl_FormSelectSizeProps as Props } from './Dev_FormControl_FormSelectSize.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_FormSelectSize = ({ variant = 'select', value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return (['normal', 'small'] as const).map((formSelectSize) => lv(formSelectSize, formSelectSize));
  }, []);

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='AspectRatio' title='크기 (size)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='formSelectSize' items={selectItems} clearable placeholder='미지정' value={value} {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='formSelectSize' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_FormSelectSize;
