import { BoxProps } from '@ccomp';
import { CSSProperties } from 'react';

export interface TProps extends Omit<BoxProps, 'display' | 'color'> {
  ref?: Ref<HTMLDivElement>;
  inline?: boolean;
  icon?: string;
  c?: BoxProps['color'] | 'accent' | 'blurry' | 'lighten';
  color?: BoxProps['color'] | 'accent' | 'blurry' | 'lighten';
  iconGap?: CSSProperties['gap'];
  iconPosition?: 'start' | 'end';
  iconProps?: Omit<IconProps, 'children'>;
  ellipsis?: boolean;
  ellipsisLines?: number;
}
