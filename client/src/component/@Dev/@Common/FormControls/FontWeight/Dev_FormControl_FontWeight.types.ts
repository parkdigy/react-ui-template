import { type FormRadioGroupProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_FontWeightProps
  extends
    Pick<FormRadioGroupProps<'' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
