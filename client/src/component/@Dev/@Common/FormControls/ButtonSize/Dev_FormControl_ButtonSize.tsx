import { type Dev_FormControl_ButtonSizeProps as Props } from './Dev_FormControl_ButtonSize.types';
import { ButtonSizes, FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_ButtonSize = ({ variant = 'select', value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    return objectKeys(ButtonSizes).map((size) => {
      return lv(`${size}`, size);
    });
  }, []);

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='AspectRatio' title='크기 (size)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='size' items={selectItems} placeholder='미지정' clearable value={value} {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='size' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_ButtonSize;
