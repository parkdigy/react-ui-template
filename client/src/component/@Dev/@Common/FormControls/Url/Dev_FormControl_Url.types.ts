import { type FormUrlProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_UrlProps
  extends Pick<FormUrlProps, 'value' | 'onChange'>, Dev_FormOptionsControlCommonProps {}
