import React from 'react';
import { CustomComponentProps as Props } from './CustomComponent.types';

const CustomComponent = <T,>({
  component: Component,
  style: initStyle,
  hidden,
  // display
  display,
  // padding
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  // padding - custom
  p,
  pl,
  pr,
  pt,
  pb,
  ph,
  pv,
  // margin
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  // margin - custom
  m,
  ml,
  mr,
  mt,
  mb,
  mh,
  mv,
  // border
  border,
  borderWidth,
  borderStyle,
  borderColor: initBorderColor,
  borderLeft,
  borderLeftWidth,
  borderLeftStyle,
  borderLeftColor: initBorderLeftColor,
  borderRight,
  borderRightWidth,
  borderRightStyle,
  borderRightColor: initBorderRightColor,
  borderTop,
  borderTopWidth,
  borderTopStyle,
  borderTopColor: initBorderTopColor,
  borderBottom,
  borderBottomWidth,
  borderBottomStyle,
  borderBottomColor: initBorderBottomColor,
  borderRadius: initBorderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  // border - custom
  radius: initRadius,
  // flex
  flex,
  gap,
  flexDirection,
  flexBasis,
  flexFlow,
  flexShrink,
  flexGrow,
  flexWrap,
  alignItems,
  alignSelf,
  alignContent,
  alignTracks,
  justifyItems,
  justifySelf,
  justifyContent,
  justifyTracks,
  // font
  font,
  fontFamily,
  fontSize: initFontSize,
  lineHeight: initLineHeight,
  fontWeight: initFontWeight,
  fontStyle,
  letterSpacing,
  textAlign,
  textDecoration,
  whiteSpace,
  textTransform,
  wordWrap,
  wordBreak,
  wordSpacing,
  color: initColor,
  // font - custom
  fs: initFs,
  lh: initLh,
  fw: initFw,
  c: initC,
  s: initS,
  size: initSize,
  bold,
  // background
  background: initBackground,
  backgroundColor: initBackgroundColor,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  backgroundRepeat,
  // background - custom
  bg: initBg,
  bgColor: initBgColor,
  // position
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  // size
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  // size - custom
  w,
  h,
  fullWidth,
  fullHeight,
  // transform
  transform,
  transformOrigin,
  transformStyle,
  transformBox,
  // transition
  transition,
  transitionBehavior,
  transitionDelay,
  transitionDuration,
  transitionProperty,
  transitionTimingFunction,
  // overflow
  overflow,
  overflowX,
  overflowY,
  textOverflow,
  // outline
  outline,
  outlineWidth,
  outlineStyle,
  outlineColor: initOutlineColor,
  outlineOffset,
  // others
  boxShadow,
  cursor,
  opacity,
  visibility,
  pointerEvents,
  userSelect,
  verticalAlign,
  filter,
  // custom
  cssVars,
  // component props
  ...componentProps
}: Props<T>) => {
  const theme = useTheme();

  const style: CSSProperties = { ...cssVars, ...initStyle };

  // display
  gStyle.assign(style, 'display', hidden ? 'none' : display);

  // padding
  gStyle.assign(style, 'padding', padding, p);
  gStyle.assign(style, 'paddingLeft', paddingLeft, pl, ph);
  gStyle.assign(style, 'paddingRight', paddingRight, pr, ph);
  gStyle.assign(style, 'paddingTop', paddingTop, pt, pv);
  gStyle.assign(style, 'paddingBottom', paddingBottom, pb, pv);

  // margin
  gStyle.assign(style, 'margin', margin, m);
  gStyle.assign(style, 'marginLeft', marginLeft, ml, mh);
  gStyle.assign(style, 'marginRight', marginRight, mr, mh);
  gStyle.assign(style, 'marginTop', marginTop, mt, mv);
  gStyle.assign(style, 'marginBottom', marginBottom, mb, mv);

  // border
  const borderColor = theme.getColor(initBorderColor);
  gStyle.assign(style, 'border', border);
  gStyle.assign(style, 'borderColor', borderColor);
  gStyle.assign(
    style,
    'borderStyle',
    borderStyle,
    border === undefined && borderColor !== undefined ? 'solid' : undefined
  );
  gStyle.assign(style, 'borderWidth', borderWidth, border === undefined && borderColor !== undefined ? 1 : undefined);

  // borderLeft
  const borderLeftColor = theme.getColor(initBorderLeftColor);
  gStyle.assign(style, 'borderLeft', borderLeft);
  gStyle.assign(style, 'borderLeftColor', borderLeftColor);
  gStyle.assign(
    style,
    'borderLeftStyle',
    borderLeftStyle,
    borderLeft === undefined && borderLeftColor !== undefined ? 'solid' : undefined
  );
  gStyle.assign(
    style,
    'borderLeftWidth',
    borderLeftWidth,
    borderLeft === undefined && borderLeftColor !== undefined ? 1 : undefined
  );

  // borderRight
  const borderRightColor = theme.getColor(initBorderRightColor);
  gStyle.assign(style, 'borderRight', borderRight);
  gStyle.assign(style, 'borderRightColor', borderRightColor);
  gStyle.assign(
    style,
    'borderRightStyle',
    borderRightStyle,
    borderRight === undefined && borderRightColor !== undefined ? 'solid' : undefined
  );
  gStyle.assign(
    style,
    'borderRightWidth',
    borderRightWidth,
    borderRight === undefined && borderRightColor !== undefined ? 1 : undefined
  );

  // borderTop
  const borderTopColor = theme.getColor(initBorderTopColor);
  gStyle.assign(style, 'borderTop', borderTop);
  gStyle.assign(style, 'borderTopColor', borderTopColor);
  gStyle.assign(
    style,
    'borderTopStyle',
    borderTopStyle,
    borderTop === undefined && borderTopColor !== undefined ? 'solid' : undefined
  );
  gStyle.assign(
    style,
    'borderTopWidth',
    borderTopWidth,
    borderTop === undefined && borderTopColor !== undefined ? 1 : undefined
  );

  // borderBottom
  const borderBottomColor = theme.getColor(initBorderBottomColor);
  gStyle.assign(style, 'borderBottom', borderBottom);
  gStyle.assign(style, 'borderBottomColor', borderBottomColor);
  gStyle.assign(
    style,
    'borderBottomStyle',
    borderBottomStyle,
    borderBottom === undefined && borderBottomColor !== undefined ? 'solid' : undefined
  );
  gStyle.assign(
    style,
    'borderBottomWidth',
    borderBottomWidth,
    borderBottom === undefined && borderBottomColor !== undefined ? 1 : undefined
  );

  // radius
  gStyle.assign(style, 'borderRadius', initBorderRadius, initRadius);
  gStyle.assign(style, 'borderTopLeftRadius', borderTopLeftRadius);
  gStyle.assign(style, 'borderTopRightRadius', borderTopRightRadius);
  gStyle.assign(style, 'borderBottomLeftRadius', borderBottomLeftRadius);
  gStyle.assign(style, 'borderBottomRightRadius', borderBottomRightRadius);

  // flex
  gStyle.assign(style, 'flex', flex);
  gStyle.assign(style, 'gap', gap);
  gStyle.assign(style, 'flexDirection', flexDirection);
  gStyle.assign(style, 'flexBasis', flexBasis);
  gStyle.assign(style, 'flexFlow', flexFlow);
  gStyle.assign(style, 'flexShrink', flexShrink);
  gStyle.assign(style, 'flexGrow', flexGrow);
  gStyle.assign(style, 'flexWrap', flexWrap);
  gStyle.assign(style, 'alignItems', alignItems);
  gStyle.assign(style, 'alignSelf', alignSelf);
  gStyle.assign(style, 'alignContent', alignContent);
  gStyle.assign(style, 'alignTracks', alignTracks);
  gStyle.assign(style, 'justifyItems', justifyItems);
  gStyle.assign(style, 'justifySelf', justifySelf);
  gStyle.assign(style, 'justifyContent', justifyContent);
  gStyle.assign(style, 'justifyTracks', justifyTracks);

  // font
  const size = initSize ?? initS;
  if (size !== undefined) {
    gStyle.assign(style, 'fontSize', theme.sizes[size].fontSize);
    gStyle.assign(style, 'lineHeight', theme.sizes[size].lineHeight);
  }

  gStyle.assign(style, 'fontSize', theme.getSizeValue('fontSize', initFontSize, initFs));
  gStyle.assign(style, 'lineHeight', theme.getSizeValue('lineHeight', initLineHeight, initLh));
  gStyle.assign(style, 'fontWeight', initFontWeight, initFw, bold ? 'bold' : undefined);
  gStyle.assign(style, 'color', theme.getColor(initColor, initC));
  gStyle.assign(style, 'font', font);
  gStyle.assign(style, 'fontFamily', fontFamily);
  gStyle.assign(style, 'fontStyle', fontStyle);
  gStyle.assign(style, 'letterSpacing', letterSpacing);
  gStyle.assign(style, 'textAlign', textAlign);
  gStyle.assign(style, 'textDecoration', textDecoration);
  gStyle.assign(style, 'textTransform', textTransform);
  gStyle.assign(style, 'wordWrap', wordWrap);
  gStyle.assign(style, 'wordBreak', wordBreak);
  gStyle.assign(style, 'wordSpacing', wordSpacing);

  // background
  gStyle.assign(style, 'background', theme.getBackground(initBackground, initBg));
  gStyle.assign(style, 'backgroundColor', theme.getColor(initBackgroundColor, initBgColor));
  gStyle.assign(style, 'backgroundImage', backgroundImage);
  gStyle.assign(style, 'backgroundPosition', backgroundPosition);
  gStyle.assign(style, 'backgroundSize', backgroundSize);
  gStyle.assign(style, 'backgroundRepeat', backgroundRepeat);

  // position
  gStyle.assign(style, 'position', position);
  gStyle.assign(style, 'top', top);
  gStyle.assign(style, 'left', left);
  gStyle.assign(style, 'right', right);
  gStyle.assign(style, 'bottom', bottom);
  gStyle.assign(style, 'zIndex', zIndex);

  // size
  gStyle.assign(style, 'width', width, w, fullWidth ? '100%' : undefined);
  gStyle.assign(style, 'height', height, h, fullHeight ? '100%' : undefined);
  gStyle.assign(style, 'maxWidth', maxWidth);
  gStyle.assign(style, 'minWidth', minWidth);
  gStyle.assign(style, 'maxHeight', maxHeight);
  gStyle.assign(style, 'minHeight', minHeight);

  // transform
  gStyle.assign(style, 'transform', transform);
  gStyle.assign(style, 'transformOrigin', transformOrigin);
  gStyle.assign(style, 'transformStyle', transformStyle);
  gStyle.assign(style, 'transformBox', transformBox);

  // transition
  gStyle.assign(style, 'transition', transition);
  gStyle.assign(style, 'transitionBehavior', transitionBehavior);
  gStyle.assign(style, 'transitionDelay', transitionDelay);
  gStyle.assign(style, 'transitionDuration', transitionDuration);
  gStyle.assign(style, 'transitionProperty', transitionProperty);
  gStyle.assign(style, 'transitionTimingFunction', transitionTimingFunction);

  // outline
  gStyle.assign(style, 'outlineColor', theme.getColor(initOutlineColor));
  gStyle.assign(
    style,
    'outlineStyle',
    outlineStyle,
    outline === undefined && outlineWidth !== undefined ? 'solid' : undefined
  );
  gStyle.assign(style, 'outline', outline);
  gStyle.assign(style, 'outlineWidth', outlineWidth);
  gStyle.assign(style, 'outlineOffset', outlineOffset);

  // others
  gStyle.assign(style, 'boxShadow', boxShadow);
  gStyle.assign(style, 'overflow', overflow);
  gStyle.assign(style, 'overflowX', overflowX);
  gStyle.assign(style, 'overflowY', overflowY);
  gStyle.assign(style, 'cursor', cursor);
  gStyle.assign(style, 'opacity', opacity);
  gStyle.assign(style, 'visibility', visibility);
  gStyle.assign(style, 'whiteSpace', whiteSpace);
  gStyle.assign(style, 'textOverflow', textOverflow);
  gStyle.assign(style, 'pointerEvents', pointerEvents);
  gStyle.assign(style, 'userSelect', userSelect);
  gStyle.assign(style, 'verticalAlign', verticalAlign);
  gStyle.assign(style, 'filter', filter);

  return <Component style={empty(style) ? undefined : style} {...componentProps} />;
};

export default CustomComponent;
