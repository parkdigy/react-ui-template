import { type FormRadioGroupProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_ButtonVariantProps
  extends
    Pick<FormRadioGroupProps<Exclude<'' | ButtonProps['variant'], undefined>>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
