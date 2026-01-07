import { FormTextarea, type FormProps } from '@ccomp';
import {
  Dev_FormOptions,
  type Dev_FormOptionsData,
  type Dev_FormOptionsRadioGroupOption,
  Dev_Panel,
} from '../../@Common';
import code from '../Password/Dev_Form_Password.code.md';
import Dev_Form_Textarea_Variant from './Dev_Form_Textarea_Variant';
import { type FlattenFormOptions } from '../../@types/FlattenFormOptions';

const _formOptions = [
  ['title', 'rows'],
  '|',
  ['placeholder', 'helperText'],
  '|',
  ['required', 'disabled', 'subControl', 'hideTitle'],
] as const;
type _formOptions = Exclude<FlattenFormOptions<typeof _formOptions>, '|' | null>;
const _formOptionsSelectControlOptions: Dev_FormOptionsRadioGroupOption[] = [];
const _formOptionsDefaultData: Dev_FormOptionsData = {
  title: 'FormTextarea',
  placeholder: '입력해 주세요',
};

interface Props {
  titlePosition: FormProps['titlePosition'];
}

export const Dev_Form_Textarea = ({ titlePosition }: Props) => {
  /********************************************************************************************************************
   * Data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { rows, subControl, title, placeholder, helperText, ...otherData } = _data;

  const data = {
    rows: ifEmpty(rows, undefined),
    title: ifEmpty(title, undefined),
    placeholder: ifEmpty(placeholder, undefined),
    helperText: ifEmpty(helperText, undefined),
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
          defaultData={_formOptionsDefaultData}
          selectControlOptions={_formOptionsSelectControlOptions}
          formProps={{ titlePosition }}
          code={code}
          codePropsMap={{ props: { ...data, subControl: subControl ? '{...}' : undefined } }}
          onChange={setData}
          onGetTest={() => (
            <Flex gap={20} fullWidth>
              <FormTextarea
                name='FormTextarea'
                subControl={
                  subControl ? (
                    <Button type='button' onClick={() => toast.info('하위 컨트롤 클릭')}>
                      하위 컨트롤
                    </Button>
                  ) : undefined
                }
                {...data}
              />
              <Button type='submit'>Submit</Button>
            </Flex>
          )}
        />
      </Dev_Panel>

      <Dev_Form_Textarea_Variant titlePosition={titlePosition} />
    </Flex>
  );
};

export default Dev_Form_Textarea;
