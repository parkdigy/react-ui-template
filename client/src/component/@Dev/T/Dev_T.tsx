import { AllColors } from '@theme';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../@Common';
import code from './Dev_T.code.md';
import Dev_T_Variant_FontWeight from './Dev_T_Variant_FontWeight';
import Dev_T_Variant_Size_FontWeight from './Dev_T_Variant_Size_FontWeight';
import Dev_T_Variant from './Dev_T_Variant';
import Dev_T_Variant_Color from './Dev_T_Variant_Color';
import { FlattenFormOptions } from '../@types/FlattenFormOptions';

const _formOptions = [['color', 'fontWeight'], '|', ['size'], '|', ['icon', 'iconGap', 'iconPosition']] as const;
type _formOptions = Exclude<FlattenFormOptions<typeof _formOptions>, '|' | null>;

export const Dev_T = () => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { color, size, fontWeight, icon, iconPosition, iconGap, ...otherData } = _data;

  const data = {
    color: ifEmpty(color, undefined),
    size: ifEmpty(size, undefined),
    fontWeight: ifEmpty(fontWeight, undefined),
    icon: ifEmpty(icon, undefined),
    iconPosition: ifEmpty(iconPosition, undefined),
    iconGap: ifEmpty(iconGap, undefined),
    ...otherData,
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel gap={20}>
      <TTitleLarge700 color='primary'>텍스트 (T)</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          colors={AllColors}
          useCustomColor
          backgroundColors={AllColors}
          useCustomBackgroundColor
          code={code}
          codePropsMap={{ t: data }}
          onChange={setData}
          onGetTest={() => <T {...data}>텍스트</T>}
        />
      </Dev_Panel>

      <Dev_T_Variant />
      <Dev_T_Variant_Color />
      <Dev_T_Variant_FontWeight />
      <Dev_T_Variant_Size_FontWeight />
    </Panel>
  );
};

export default Dev_T;
