import { type FormCheckboxProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_ShowIconProps
  extends Pick<FormCheckboxProps, 'checked' | 'onChange'>, Dev_FormOptionsControlCommonProps {
  value?: boolean;
}
