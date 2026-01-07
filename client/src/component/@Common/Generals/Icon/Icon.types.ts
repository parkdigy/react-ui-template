import { AllColors, AllSizes } from '@theme';
import { CustomComponentFontStyles, CustomComponentSizeStyles } from '../../CustomComponent';

export type IconHTMLProps = HTMLElementProps;

export interface IconProps extends Omit<
  CustomComponentProps<IconHTMLProps>,
  'style' | 'children' | keyof CustomComponentFontStyles | keyof CustomComponentSizeStyles
> {
  children: string;
  type?: MaterialIconTypes;
  s?: AllSizes | CSSProperties['width'];
  size?: AllSizes | CSSProperties['width'];
  c?: AllColors | CSSProperties['color'];
  color?: AllColors | CSSProperties['color'];
  rotate?: number;
}
