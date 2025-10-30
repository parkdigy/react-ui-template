import React from 'react';
import { FormProps, FormFile } from '@ccomp';
import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../../@Common';
import { FlattenArray } from '@pdg/types';
import code from './Dev_Form_File.code.md';
import Dev_Form_File_Variant from './Dev_Form_File_Variant';
import { toast } from '@toast';

const _formOptions = [
  ['title', 'placeholder'],
  '|',
  'helperText',
  'accept',
  '|',
  ['required', 'disabled', 'subControl', 'hideTitle'],
] as const;
type _formOptions = Exclude<FlattenArray<typeof _formOptions>, '|' | null>;
const _formOptionsDefaultData: Dev_FormOptionsData = {
  title: 'FormFile',
  placeholder: '파일을 선택해 주세요.',
};

interface Props {
  titlePosition: FormProps['titlePosition'];
}

export const Dev_Form_File = ({ titlePosition }: Props) => {
  /********************************************************************************************************************
   * Data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { subControl, title, placeholder, helperText, ...otherData } = _data;

  const data = {
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
          formProps={{ titlePosition }}
          code={code}
          codePropsMap={{ props: { ...data, subControl: subControl ? '{...}' : undefined } }}
          onChange={setData}
          onGetTest={() => (
            <Flex gap={20} fullWidth>
              <FormFile
                name='FormFile'
                titleWidth={80}
                subControl={
                  subControl ? (
                    <Button type='button' onClick={() => toast.info('하위 컨트롤 클릭')}>
                      하위 컨트롤
                    </Button>
                  ) : undefined
                }
                {...data}
              />
              <Button>Submit</Button>
            </Flex>
          )}
        />
      </Dev_Panel>

      <Dev_Form_File_Variant titlePosition={titlePosition} />
    </Flex>
  );
};

export default Dev_Form_File;
