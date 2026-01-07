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
  g.style.assign(style, 'display', hidden ? 'none' : display);

  // padding
  g.style.assign(style, 'padding', padding, p);
  g.style.assign(style, 'paddingLeft', paddingLeft, pl, ph);
  g.style.assign(style, 'paddingRight', paddingRight, pr, ph);
  g.style.assign(style, 'paddingTop', paddingTop, pt, pv);
  g.style.assign(style, 'paddingBottom', paddingBottom, pb, pv);

  // margin
  g.style.assign(style, 'margin', margin, m);
  g.style.assign(style, 'marginLeft', marginLeft, ml, mh);
  g.style.assign(style, 'marginRight', marginRight, mr, mh);
  g.style.assign(style, 'marginTop', marginTop, mt, mv);
  g.style.assign(style, 'marginBottom', marginBottom, mb, mv);

  // border
  const borderColor = theme.getColor(initBorderColor);
  g.style.assign(style, 'border', border);
  g.style.assign(style, 'borderColor', borderColor);
  g.style.assign(
    style,
    'borderStyle',
    borderStyle,
    border === undefined && borderColor !== undefined ? 'solid' : undefined
  );
  g.style.assign(style, 'borderWidth', borderWidth, border === undefined && borderColor !== undefined ? 1 : undefined);

  // borderLeft
  const borderLeftColor = theme.getColor(initBorderLeftColor);
  g.style.assign(style, 'borderLeft', borderLeft);
  g.style.assign(style, 'borderLeftColor', borderLeftColor);
  g.style.assign(
    style,
    'borderLeftStyle',
    borderLeftStyle,
    borderLeft === undefined && borderLeftColor !== undefined ? 'solid' : undefined
  );
  g.style.assign(
    style,
    'borderLeftWidth',
    borderLeftWidth,
    borderLeft === undefined && borderLeftColor !== undefined ? 1 : undefined
  );

  // borderRight
  const borderRightColor = theme.getColor(initBorderRightColor);
  g.style.assign(style, 'borderRight', borderRight);
  g.style.assign(style, 'borderRightColor', borderRightColor);
  g.style.assign(
    style,
    'borderRightStyle',
    borderRightStyle,
    borderRight === undefined && borderRightColor !== undefined ? 'solid' : undefined
  );
  g.style.assign(
    style,
    'borderRightWidth',
    borderRightWidth,
    borderRight === undefined && borderRightColor !== undefined ? 1 : undefined
  );

  // borderTop
  const borderTopColor = theme.getColor(initBorderTopColor);
  g.style.assign(style, 'borderTop', borderTop);
  g.style.assign(style, 'borderTopColor', borderTopColor);
  g.style.assign(
    style,
    'borderTopStyle',
    borderTopStyle,
    borderTop === undefined && borderTopColor !== undefined ? 'solid' : undefined
  );
  g.style.assign(
    style,
    'borderTopWidth',
    borderTopWidth,
    borderTop === undefined && borderTopColor !== undefined ? 1 : undefined
  );

  // borderBottom
  const borderBottomColor = theme.getColor(initBorderBottomColor);
  g.style.assign(style, 'borderBottom', borderBottom);
  g.style.assign(style, 'borderBottomColor', borderBottomColor);
  g.style.assign(
    style,
    'borderBottomStyle',
    borderBottomStyle,
    borderBottom === undefined && borderBottomColor !== undefined ? 'solid' : undefined
  );
  g.style.assign(
    style,
    'borderBottomWidth',
    borderBottomWidth,
    borderBottom === undefined && borderBottomColor !== undefined ? 1 : undefined
  );

  // radius
  g.style.assign(style, 'borderRadius', initBorderRadius, initRadius);
  g.style.assign(style, 'borderTopLeftRadius', borderTopLeftRadius);
  g.style.assign(style, 'borderTopRightRadius', borderTopRightRadius);
  g.style.assign(style, 'borderBottomLeftRadius', borderBottomLeftRadius);
  g.style.assign(style, 'borderBottomRightRadius', borderBottomRightRadius);

  // flex
  g.style.assign(style, 'flex', flex);
  g.style.assign(style, 'gap', gap);
  g.style.assign(style, 'flexDirection', flexDirection);
  g.style.assign(style, 'flexBasis', flexBasis);
  g.style.assign(style, 'flexFlow', flexFlow);
  g.style.assign(style, 'flexShrink', flexShrink);
  g.style.assign(style, 'flexGrow', flexGrow);
  g.style.assign(style, 'flexWrap', flexWrap);
  g.style.assign(style, 'alignItems', alignItems);
  g.style.assign(style, 'alignSelf', alignSelf);
  g.style.assign(style, 'alignContent', alignContent);
  g.style.assign(style, 'alignTracks', alignTracks);
  g.style.assign(style, 'justifyItems', justifyItems);
  g.style.assign(style, 'justifySelf', justifySelf);
  g.style.assign(style, 'justifyContent', justifyContent);
  g.style.assign(style, 'justifyTracks', justifyTracks);

  // font
  const size = initSize ?? initS;
  if (size !== undefined) {
    g.style.assign(style, 'fontSize', theme.sizes[size].fontSize);
    g.style.assign(style, 'lineHeight', theme.sizes[size].lineHeight);
  }

  g.style.assign(style, 'fontSize', theme.getSizeValue('fontSize', initFontSize, initFs));
  g.style.assign(style, 'lineHeight', theme.getSizeValue('lineHeight', initLineHeight, initLh));
  g.style.assign(style, 'fontWeight', initFontWeight, initFw, bold ? 'bold' : undefined);
  g.style.assign(style, 'color', theme.getColor(initColor, initC));
  g.style.assign(style, 'font', font);
  g.style.assign(style, 'fontFamily', fontFamily);
  g.style.assign(style, 'fontStyle', fontStyle);
  g.style.assign(style, 'letterSpacing', letterSpacing);
  g.style.assign(style, 'textAlign', textAlign);
  g.style.assign(style, 'textDecoration', textDecoration);
  g.style.assign(style, 'textTransform', textTransform);
  g.style.assign(style, 'wordWrap', wordWrap);
  g.style.assign(style, 'wordBreak', wordBreak);
  g.style.assign(style, 'wordSpacing', wordSpacing);

  // background
  g.style.assign(style, 'background', theme.getBackground(initBackground, initBg));
  g.style.assign(style, 'backgroundColor', theme.getColor(initBackgroundColor, initBgColor));
  g.style.assign(style, 'backgroundImage', backgroundImage);
  g.style.assign(style, 'backgroundPosition', backgroundPosition);
  g.style.assign(style, 'backgroundSize', backgroundSize);
  g.style.assign(style, 'backgroundRepeat', backgroundRepeat);

  // position
  g.style.assign(style, 'position', position);
  g.style.assign(style, 'top', top);
  g.style.assign(style, 'left', left);
  g.style.assign(style, 'right', right);
  g.style.assign(style, 'bottom', bottom);
  g.style.assign(style, 'zIndex', zIndex);

  // size
  g.style.assign(style, 'width', width, w, fullWidth ? '100%' : undefined);
  g.style.assign(style, 'height', height, h, fullHeight ? '100%' : undefined);
  g.style.assign(style, 'maxWidth', maxWidth);
  g.style.assign(style, 'minWidth', minWidth);
  g.style.assign(style, 'maxHeight', maxHeight);
  g.style.assign(style, 'minHeight', minHeight);

  // transform
  g.style.assign(style, 'transform', transform);
  g.style.assign(style, 'transformOrigin', transformOrigin);
  g.style.assign(style, 'transformStyle', transformStyle);
  g.style.assign(style, 'transformBox', transformBox);

  // transition
  g.style.assign(style, 'transition', transition);
  g.style.assign(style, 'transitionBehavior', transitionBehavior);
  g.style.assign(style, 'transitionDelay', transitionDelay);
  g.style.assign(style, 'transitionDuration', transitionDuration);
  g.style.assign(style, 'transitionProperty', transitionProperty);
  g.style.assign(style, 'transitionTimingFunction', transitionTimingFunction);

  // outline
  g.style.assign(style, 'outlineColor', theme.getColor(initOutlineColor));
  g.style.assign(
    style,
    'outlineStyle',
    outlineStyle,
    outline === undefined && outlineWidth !== undefined ? 'solid' : undefined
  );
  g.style.assign(style, 'outline', outline);
  g.style.assign(style, 'outlineWidth', outlineWidth);
  g.style.assign(style, 'outlineOffset', outlineOffset);

  // others
  g.style.assign(style, 'boxShadow', boxShadow);
  g.style.assign(style, 'overflow', overflow);
  g.style.assign(style, 'overflowX', overflowX);
  g.style.assign(style, 'overflowY', overflowY);
  g.style.assign(style, 'cursor', cursor);
  g.style.assign(style, 'opacity', opacity);
  g.style.assign(style, 'visibility', visibility);
  g.style.assign(style, 'whiteSpace', whiteSpace);
  g.style.assign(style, 'textOverflow', textOverflow);
  g.style.assign(style, 'pointerEvents', pointerEvents);
  g.style.assign(style, 'userSelect', userSelect);
  g.style.assign(style, 'verticalAlign', verticalAlign);
  g.style.assign(style, 'filter', filter);

  return <Component style={empty(style) ? undefined : style} {...componentProps} />;
};

export default CustomComponent;
