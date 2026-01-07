import { type Dev_FormControl_IconPositionProps as Props } from './Dev_FormControl_IconPosition.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_IconPosition = ({ variant = 'select', value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => [lv('start (왼쪽)', 'start' as const), lv('end (오른쪽)', 'end' as const)], []);

  const radioItems = useMemo(
    () => [
      lv('미지정', ''),
      lv(
        <Flex row center gap={3}>
          <T>start</T>
          <T opacity={0.5}>(왼쪽)</T>
        </Flex>,
        'start' as const
      ),
      lv(
        <Flex row center gap={3}>
          <T>end</T>
          <T opacity={0.5}>(오른쪽)</T>
        </Flex>,
        'end' as const
      ),
    ],
    []
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='Start' title='아이콘 위치 (iconPosition)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='iconPosition' items={selectItems} placeholder='미지정' clearable value={value} {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='iconPosition' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_IconPosition;
