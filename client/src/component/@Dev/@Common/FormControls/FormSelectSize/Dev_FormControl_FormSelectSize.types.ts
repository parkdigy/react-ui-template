import { type FormSelectSize, type FormRadioGroupProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_FormSelectSizeProps
  extends Pick<FormRadioGroupProps<'' | FormSelectSize>, 'value' | 'onChange'>, Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
