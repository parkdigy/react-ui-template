import { type ChipVariant, type FormRadioGroupProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_ChipVariantProps
  extends Pick<FormRadioGroupProps<'' | ChipVariant>, 'value' | 'onChange'>, Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
}
