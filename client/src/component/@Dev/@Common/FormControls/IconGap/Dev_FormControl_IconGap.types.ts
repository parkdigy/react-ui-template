import { type FormRadioGroupProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_IconGapProps
  extends
    Pick<FormRadioGroupProps<Exclude<'' | CSSProperties['gap'], undefined>>, 'value' | 'onChange'>,
    Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
