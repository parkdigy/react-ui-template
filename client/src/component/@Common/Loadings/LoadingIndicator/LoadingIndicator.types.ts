import { AllColors, AllSizes } from '@theme';
import {
  CustomComponentBorderStyles,
  CustomComponentFontStyles,
  CustomComponentPaddingStyles,
  type CustomComponentProps,
  CustomComponentSizeStyles,
} from '../../CustomComponent';

export type LoadingIndicatorHTMLProps = HTMLTagProps<'div'>;

export interface LoadingIndicatorProps extends Omit<
  CustomComponentProps<LoadingIndicatorHTMLProps>,
  | 'component'
  | 'style'
  | 'children'
  | keyof CustomComponentPaddingStyles
  | keyof CustomComponentFontStyles
  | keyof CustomComponentSizeStyles
  | keyof CustomComponentBorderStyles
> {
  s?: AllSizes | number;
  size?: AllSizes | number;
  c?: AllColors | CSSProperties['color'];
  color?: AllColors | CSSProperties['color'];
}
