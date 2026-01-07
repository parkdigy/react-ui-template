import { AllColors, AllSizes } from '@theme';
import {
  CustomComponentBorderStyles,
  CustomComponentFontStyles,
  CustomComponentPaddingStyles,
  CustomComponentSizeStyles,
} from '../../CustomComponent';

export type LoadingIndicatorHTMLProps = HTMLTagProps<'div'>;

export interface LoadingIndicatorProps extends Omit<
  CustomComponentProps<LoadingIndicatorHTMLProps>,
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
