import {
  CustomComponentBackgroundStyles,
  CustomComponentBorderStyles,
  CustomComponentCustomStyles,
  CustomComponentMarginStyles,
  CustomComponentPaddingStyles,
  CustomComponentPositionStyles,
  CustomComponentTransformStyles,
  CustomComponentTransitionStyles,
} from '../../../CustomComponent';

export const ImgStyles = {
  ...CustomComponentPaddingStyles,
  ...CustomComponentMarginStyles,
  ...CustomComponentBorderStyles,
  ...CustomComponentBackgroundStyles,
  ...CustomComponentPositionStyles,
  ...CustomComponentCustomStyles,
  ...CustomComponentTransitionStyles,
  ...CustomComponentTransformStyles,
};
export type ImgStyles = (typeof ImgStyles)[number];

export type ImgHTMLProps = HTMLTagProps<'img'>;

export interface ImgProps
  extends
    Omit<ImgHTMLProps, 'children' | 'style' | 'width' | 'height'>,
    Pick<CustomComponentProps<ImgHTMLProps>, ImgStyles | 'w' | 'h' | 'width' | 'height'> {
  // 회전 각도
  rotate?: number;
}
