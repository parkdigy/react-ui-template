import { type FormRadioGroupType, type FormRadioGroupProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_FormRadioGroupTypeProps
  extends Pick<FormRadioGroupProps<'' | FormRadioGroupType>, 'value' | 'onChange'>, Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
