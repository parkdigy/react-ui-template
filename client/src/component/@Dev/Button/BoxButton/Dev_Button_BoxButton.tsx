import { Dev_FormOptions, type Dev_FormOptionsData, type Dev_FormOptionsProps, Dev_Panel } from '../../@Common';
import { AllColors } from '@theme';
import code from './Dev_Button_BoxButton.code.md';
import { type FlattenFormOptions } from '../../@types/FlattenFormOptions';

const _formOptions = [['color', 'backgroundColor'], '|', 'url', '|', ['disabled']] as const;
type _formOptions = Exclude<FlattenFormOptions<typeof _formOptions>, '|' | null>;
const _formOptionProps: Dev_FormOptionsProps['optionProps'] = {
  url: { helperText: 'URL을 입력하면, 클릭 시 자동으로 URL로 이동 (내부 URL은 / 로 시작)' },
};

const Dev_Button_BoxButton = () => {
  /********************************************************************************************************************
   * Data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { url, color, backgroundColor, ...otherData } = _data;

  const data = {
    url: ifEmpty(url, undefined),
    color: ifEmpty(color, undefined),
    backgroundColor: ifEmpty(backgroundColor, undefined),
    ...otherData,
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Flex gap={20}>
      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          optionProps={_formOptionProps}
          colors={AllColors}
          backgroundColors={AllColors}
          useCustomColor
          code={code}
          codePropsMap={{ button: data }}
          onChange={setData}
          onGetTest={() => (
            <BoxButton {...data} onClick={() => toast.info('클릭')}>
              <TCaption500 color='primary'>BOX</TCaption500>
              <T>BUTTON</T>
            </BoxButton>
          )}
        />
      </Dev_Panel>
    </Flex>
  );
};

export default Dev_Button_BoxButton;
