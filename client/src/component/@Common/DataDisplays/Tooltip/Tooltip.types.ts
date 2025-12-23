import { ITooltip, TooltipRefProps } from 'react-tooltip';
import { AllSizes, DefaultColors } from '@theme';

export interface TooltipProps extends Omit<ITooltip, 'id' | 'variant' | 'content'> {
  ref?: Ref<TooltipRefProps>;
  children: ReactElement | string;
  size?: AllSizes | CSSProperties['fontSize'];
  color?: DefaultColors;
  content?: ReactNode;
}
