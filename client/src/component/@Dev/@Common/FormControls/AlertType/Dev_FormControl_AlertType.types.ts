import { AlertType, type FormRadioGroupProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_AlertTypeProps
  extends Pick<FormRadioGroupProps<'' | AlertType>, 'value' | 'onChange'>, Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
