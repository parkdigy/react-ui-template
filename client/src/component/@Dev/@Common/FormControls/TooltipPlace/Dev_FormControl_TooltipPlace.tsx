import { Dev_FormControl_TooltipPlaceProps as Props } from './Dev_FormControl_TooltipPlace.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_TooltipPlace = ({ variant = 'select', value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(
    () =>
      (
        [
          'top',
          'top-start',
          'top-end',
          'right',
          'right-start',
          'right-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
        ] as const
      ).map((place) => lv(place.toString(), place)),
    []
  );

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='ControlCamera' title='위치 (place)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='tooltipPlace' items={selectItems} placeholder='미지정' clearable value={value} {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='tooltipPlace' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_TooltipPlace;
