import React, { CSSProperties } from 'react';
import { HoverProps as Props } from './Hover.types';
import './Hover.scss';
import { AllColors, AllSizes } from '@theme';

export const Hover = ({
  className,
  underline,
  textDecoration: initTextDecoration,
  c: initC,
  color: initColor,
  bg: initBg,
  background: initBackground,
  bgColor: initBgColor,
  backgroundColor: initBackgroundColor,
  fs: initFs,
  fontSize: initFontSize,
  lh: initLh,
  lineHeight: initLineHeight,
  fw: initFw,
  fontWeight: initFontWeight,
  s: initS,
  size: initSize,
  bold,
  transform,
  children,
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const style: Dict = {};

  const textDecoration = ifUndefined(initTextDecoration, underline ? 'underline' : undefined);
  if (textDecoration !== undefined) style['--hcl_text-decoration'] = textDecoration;

  let color = ifUndefined(initColor, initC);
  if (color !== undefined && !color.startsWith('#') && contains(AllColors, color)) {
    color = theme.colors[color];
  }
  if (color !== undefined) style['--hcl_color'] = color;

  let background = ifUndefined(initBackground, initBg);
  if (
    background !== undefined &&
    typeof background === 'string' &&
    !background.startsWith('#') &&
    contains(AllColors, background)
  ) {
    background = theme.colors[background];
  }
  if (background !== undefined) style['--hcl_background'] = background;

  let backgroundColor = ifUndefined(initBackgroundColor, initBgColor);
  if (backgroundColor !== undefined && !backgroundColor.startsWith('#') && contains(AllColors, backgroundColor)) {
    backgroundColor = theme.colors[backgroundColor];
  }
  if (backgroundColor !== undefined) style['--hcl_background-color'] = backgroundColor;

  const size = ifUndefined(initSize, initS);
  if (size !== undefined) {
    style['--hcl_font-size'] = `${theme.sizes[size].fontSize}px`;
    style['--hcl_line-height'] = theme.sizes[size].lineHeight;
  }

  let fontSize = ifUndefined(initFontSize, initFs);
  if (fontSize !== undefined && typeof fontSize === 'string' && contains(AllSizes, fontSize)) {
    fontSize = theme.sizes[fontSize].fontSize;
  }
  if (fontSize !== undefined) style['--hcl_font-size'] = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;

  let lineHeight = ifUndefined(initLineHeight, initLh);
  if (lineHeight !== undefined && typeof lineHeight === 'string' && contains(AllSizes, lineHeight)) {
    lineHeight = theme.sizes[lineHeight].lineHeight;
  }
  if (lineHeight !== undefined) style['--hcl_line-height'] = lineHeight;

  const fontWeight = ifUndefined(initFontWeight, initFw);
  if (fontWeight !== undefined) style['--hcl_font-weight'] = fontWeight;
  else if (bold) style['--hcl_font-weight'] = 'bold';

  if (transform !== undefined) style['--hcl_transform'] = transform;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div
      className={classnames(
        className,
        'Hover',
        textDecoration !== undefined && 'Hover-text-decoration',
        color !== undefined && 'Hover-color',
        background !== undefined && 'Hover-background',
        backgroundColor !== undefined && 'Hover-background-color',
        (size !== undefined || fontSize !== undefined) && 'Hover-font-size',
        (size !== undefined || lineHeight !== undefined) && 'Hover-line-height',
        (fontWeight !== undefined || bold) && 'Hover-font-weight',
        transform !== undefined && 'Hover-transform'
      )}
      style={style as CSSProperties}
    >
      {children}
    </div>
  );
};

export default Hover;
