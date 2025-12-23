import React from 'react';
import { Form, FormProps, FormFile } from '@ccomp';
import { Dev_Panel } from '../../@Common';

interface Props {
  titlePosition: Required<FormProps['titlePosition']>;
}

const Dev_Form_File_Variant = ({ titlePosition }: Props) => {
  return (
    <Dev_Panel>
      <Form titlePosition={titlePosition} titleWidth={70} gap={15} onSubmit={() => ll('submit')}>
        <FormFile title='파일' name='FormFile_default' placeholder='기본' />

        <FormFile title='파일' name='FormFile_required' placeholder='필수 입력' required />

        <FormFile title='파일' name='FormFile_disabled' placeholder='비활성' disabled />

        <FormFile
          title='파일'
          name='FormFile_subControl'
          placeholder='하위 컨트롤'
          subControl={<Button type='button'>버튼</Button>}
        />

        <FormFile title='파일' name='FormFile_hideTitle' placeholder='제목 숨김' hideTitle />

        <Button type='submit'>Submit</Button>
      </Form>
    </Dev_Panel>
  );
};

export default Dev_Form_File_Variant;
