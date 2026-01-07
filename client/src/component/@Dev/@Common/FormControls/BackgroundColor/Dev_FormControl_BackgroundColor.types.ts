import { AllColors } from '@theme';
import { type FormRadioGroupProps } from '@ccomp';
import { type Dev_FormOptionsControlCommonProps } from '../../FormOptions';

export interface Dev_FormControl_BackgroundColorProps<TColors extends AllColors = AllColors>
  extends Pick<FormRadioGroupProps<TColors | string>, 'value' | 'onChange'>, Dev_FormOptionsControlCommonProps {
  variant?: 'select' | 'radio';
  colors: readonly TColors[];
  useCustomColor?: boolean;
}
