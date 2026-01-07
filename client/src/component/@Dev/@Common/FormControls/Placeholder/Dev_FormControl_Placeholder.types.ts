import { type FormTextProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_PlaceholderProps
  extends Pick<FormTextProps, 'value' | 'onChange'>, Dev_FormOptionsControlCommonProps {}
