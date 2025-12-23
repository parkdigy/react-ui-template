import { AllColors } from '@theme';

export interface BadgeProps {
  children?: ReactNode;
  variant?: 'standard' | 'dot';
  c?: AllColors | CSSProperties['color'];
  color?: AllColors | CSSProperties['color'];
  bgColor?: AllColors | CSSProperties['backgroundColor'];
  backgroundColor?: AllColors | CSSProperties['backgroundColor'];
  content?: number | '';
  offset?: { x?: number; y?: number };
}
