import { Dev_FormControl_IconProps as Props } from './Dev_FormControl_Icon.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

const _icons = [lv('AccountCircle', 'AccountCircle'), lv('RocketLaunch', 'RocketLaunch')];

export const Dev_FormControl_Icon = ({ variant = 'select', value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => [..._icons], []);

  const radioItems = useMemo(() => [lv('미지정', ''), ..._icons], []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Image' title='아이콘 (icon)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='icon' items={selectItems} placeholder='미지정' clearable value={value} {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='icon' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_Icon;
