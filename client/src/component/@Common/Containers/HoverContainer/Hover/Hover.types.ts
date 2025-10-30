import { AllColors, AllSizes } from '@theme';
import { CSSProperties } from 'react';

export interface HoverProps {
  className?: string;
  children?: ReactNode;
  underline?: boolean;
  textDecoration?: CSSProperties['textDecoration'];
  c?: AllColors | CSSProperties['color'];
  color?: AllColors | CSSProperties['color'];
  bg?: AllColors | CSSProperties['background'];
  background?: AllColors | CSSProperties['background'];
  bgColor?: AllColors | CSSProperties['backgroundColor'];
  backgroundColor?: AllColors | CSSProperties['backgroundColor'];
  s?: AllSizes;
  size?: AllSizes;
  fs?: AllSizes | CSSProperties['fontSize'];
  fontSize?: AllSizes | CSSProperties['fontSize'];
  lh?: AllSizes | CSSProperties['lineHeight'];
  lineHeight?: AllSizes | CSSProperties['lineHeight'];
  fw?: 'normal' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  fontWeight?: 'normal' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  bold?: boolean;
  transform?: CSSProperties['transform'];
}
