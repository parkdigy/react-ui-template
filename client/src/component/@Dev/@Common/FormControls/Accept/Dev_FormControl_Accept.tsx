import React from 'react';
import { Dev_FormControl_AcceptProps as Props } from './Dev_FormControl_Accept.types';
import { Dev_PanelItem } from '../../Layout';
import { FormText } from '@ccomp';

export const Dev_FormControl_Accept = ({ ...props }: Props) => {
  return (
    <Dev_PanelItem icon='AttachFile' title='허용 파일 확장자 (accept)' mt={-5}>
      <FormText name='accept' placeholder='허용 파일 확장자를 입력해 주세요.' helperText='예) .jpg,.png' {...props} />
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Accept);
