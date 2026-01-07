import { type FormRadioGroupProps, type ListType } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_ListTypeProps
  extends Pick<FormRadioGroupProps<'' | ListType>, 'value' | 'onChange'>, Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
