import { AllSizes } from '@theme';

export interface LogoProps {
  ref?: Ref<HTMLDivElement>;
  size?: AllSizes;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  onClick?: () => void;
}
