import { type FormRadioGroupProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_IconPositionProps
  extends Pick<FormRadioGroupProps<'' | 'start' | 'end'>, 'value' | 'onChange'>, Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
