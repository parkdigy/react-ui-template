import { Dev_FormControl_FontWeightProps as Props } from './Dev_FormControl_FontWeight.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_FontWeight = ({ variant = 'select', value = '', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(
    () =>
      (['bold', 100, 200, 300, 400, 500, 600, 700, 800, 900] as const).map((fontWeight) =>
        lv(fontWeight.toString(), fontWeight)
      ),
    []
  );

  const radioItems = useMemo(() => [lv('미지정', ''), ...selectItems], [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem icon='LineWeight' title='굵기 (fontWeight)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='fontWeight' items={selectItems} placeholder='미지정' clearable value={value} {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='fontWeight' items={radioItems} value={value} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_FontWeight;
