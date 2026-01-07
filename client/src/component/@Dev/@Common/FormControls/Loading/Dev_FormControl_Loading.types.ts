import { type FormCheckboxProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_LoadingProps
  extends Pick<FormCheckboxProps, 'checked' | 'onChange'>, Dev_FormOptionsControlCommonProps {
  value?: boolean;
}
