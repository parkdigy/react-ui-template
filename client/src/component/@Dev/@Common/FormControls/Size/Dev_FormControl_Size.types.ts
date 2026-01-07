import { FriendlyNameSizes } from '@theme';
import { type FormRadioGroupProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_SizeProps
  extends Pick<FormRadioGroupProps<'' | FriendlyNameSizes>, 'value' | 'onChange'>, Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
