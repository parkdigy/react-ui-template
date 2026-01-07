import { type FormCheckboxProps, type FormRadioGroupProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_FormCheckboxTypeProps
  extends
    Pick<FormRadioGroupProps<Exclude<'' | FormCheckboxProps['type'], undefined>>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
