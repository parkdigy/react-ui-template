import { type CustomComponentBaseProps as Props } from './CustomComponent.types';

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
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * style
   * ******************************************************************************************************************/

  const style: CSSProperties = { ...cssVars, ...initStyle };

  function assign<T extends keyof CSSProperties>(key: T, ...values: Array<CSSProperties[T] | undefined>) {
    for (const value of values) {
      if (value !== undefined) {
        style[key] = value;
        return;
      }
    }
  }

  // display
  assign('display', hidden ? 'none' : display);

  // padding
  assign('padding', padding ?? p);
  assign('paddingLeft', paddingLeft ?? pl ?? ph);
  assign('paddingRight', paddingRight ?? pr ?? ph);
  assign('paddingTop', paddingTop ?? pt ?? pv);
  assign('paddingBottom', paddingBottom ?? pb ?? pv);

  // margin
  assign('margin', margin ?? m);
  assign('marginLeft', marginLeft ?? ml ?? mh);
  assign('marginRight', marginRight ?? mr ?? mh);
  assign('marginTop', marginTop ?? mt ?? mv);
  assign('marginBottom', marginBottom ?? mb ?? mv);

  // border
  const borderColor = theme.getColor(initBorderColor);
  assign('border', border);
  assign('borderColor', borderColor);
  assign('borderStyle', borderStyle, border === undefined && borderColor !== undefined ? 'solid' : undefined);
  assign('borderWidth', borderWidth, border === undefined && borderColor !== undefined ? 1 : undefined);

  // borderLeft
  const borderLeftColor = theme.getColor(initBorderLeftColor);
  assign('borderLeft', borderLeft);
  assign('borderLeftColor', borderLeftColor);
  assign(
    'borderLeftStyle',
    borderLeftStyle,
    borderLeft === undefined && borderLeftColor !== undefined ? 'solid' : undefined
  );
  assign('borderLeftWidth', borderLeftWidth, borderLeft === undefined && borderLeftColor !== undefined ? 1 : undefined);

  // borderRight
  const borderRightColor = theme.getColor(initBorderRightColor);
  assign('borderRight', borderRight);
  assign('borderRightColor', borderRightColor);
  assign(
    'borderRightStyle',
    borderRightStyle,
    borderRight === undefined && borderRightColor !== undefined ? 'solid' : undefined
  );
  assign(
    'borderRightWidth',
    borderRightWidth,
    borderRight === undefined && borderRightColor !== undefined ? 1 : undefined
  );

  // borderTop
  const borderTopColor = theme.getColor(initBorderTopColor);
  assign('borderTop', borderTop);
  assign('borderTopColor', borderTopColor);
  assign(
    'borderTopStyle',
    borderTopStyle,
    borderTop === undefined && borderTopColor !== undefined ? 'solid' : undefined
  );
  assign('borderTopWidth', borderTopWidth, borderTop === undefined && borderTopColor !== undefined ? 1 : undefined);

  // borderBottom
  const borderBottomColor = theme.getColor(initBorderBottomColor);
  assign('borderBottom', borderBottom);
  assign('borderBottomColor', borderBottomColor);
  assign(
    'borderBottomStyle',
    borderBottomStyle,
    borderBottom === undefined && borderBottomColor !== undefined ? 'solid' : undefined
  );
  assign(
    'borderBottomWidth',
    borderBottomWidth,
    borderBottom === undefined && borderBottomColor !== undefined ? 1 : undefined
  );

  // radius
  assign('borderRadius', initBorderRadius ?? initRadius);
  assign('borderTopLeftRadius', borderTopLeftRadius);
  assign('borderTopRightRadius', borderTopRightRadius);
  assign('borderBottomLeftRadius', borderBottomLeftRadius);
  assign('borderBottomRightRadius', borderBottomRightRadius);

  // flex
  assign('flex', flex);
  assign('gap', gap);
  assign('flexDirection', flexDirection);
  assign('flexBasis', flexBasis);
  assign('flexFlow', flexFlow);
  assign('flexShrink', flexShrink);
  assign('flexGrow', flexGrow);
  assign('flexWrap', flexWrap);
  assign('alignItems', alignItems);
  assign('alignSelf', alignSelf);
  assign('alignContent', alignContent);
  assign('alignTracks', alignTracks);
  assign('justifyItems', justifyItems);
  assign('justifySelf', justifySelf);
  assign('justifyContent', justifyContent);
  assign('justifyTracks', justifyTracks);

  // font
  const size = initSize ?? initS;
  assign(
    'fontSize',
    theme.getSizeValue('fontSize', initFontSize ?? initFs, size ? theme.sizes[size].fontSize : undefined)
  );
  assign(
    'lineHeight',
    theme.getSizeValue('lineHeight', initLineHeight ?? initLh, size ? theme.sizes[size].lineHeight : undefined)
  );
  assign('fontWeight', initFontWeight ?? initFw, bold ? 'bold' : undefined);
  assign('color', theme.getColor(initColor ?? initC));
  assign('font', font);
  assign('fontFamily', fontFamily);
  assign('fontStyle', fontStyle);
  assign('letterSpacing', letterSpacing);
  assign('textAlign', textAlign);
  assign('textDecoration', textDecoration);
  assign('textTransform', textTransform);
  assign('wordWrap', wordWrap);
  assign('wordBreak', wordBreak);
  assign('wordSpacing', wordSpacing);

  // background
  assign('background', theme.getBackground(initBackground ?? initBg));
  assign('backgroundColor', theme.getColor(initBackgroundColor ?? initBgColor));
  assign('backgroundImage', backgroundImage);
  assign('backgroundPosition', backgroundPosition);
  assign('backgroundSize', backgroundSize);
  assign('backgroundRepeat', backgroundRepeat);

  // position
  assign('position', position);
  assign('top', top);
  assign('left', left);
  assign('right', right);
  assign('bottom', bottom);
  assign('zIndex', zIndex);

  // size
  assign('width', width ?? w, fullWidth ? '100%' : undefined);
  assign('height', height ?? h, fullHeight ? '100%' : undefined);
  assign('maxWidth', maxWidth);
  assign('minWidth', minWidth);
  assign('maxHeight', maxHeight);
  assign('minHeight', minHeight);

  // transform
  assign('transform', transform);
  assign('transformOrigin', transformOrigin);
  assign('transformStyle', transformStyle);
  assign('transformBox', transformBox);

  // transition
  assign('transition', transition);
  assign('transitionBehavior', transitionBehavior);
  assign('transitionDelay', transitionDelay);
  assign('transitionDuration', transitionDuration);
  assign('transitionProperty', transitionProperty);
  assign('transitionTimingFunction', transitionTimingFunction);

  // outline
  assign('outlineColor', theme.getColor(initOutlineColor));
  assign('outlineStyle', outlineStyle, outline === undefined && outlineWidth !== undefined ? 'solid' : undefined);
  assign('outline', outline);
  assign('outlineWidth', outlineWidth);
  assign('outlineOffset', outlineOffset);

  // others
  assign('boxShadow', boxShadow);
  assign('overflow', overflow);
  assign('overflowX', overflowX);
  assign('overflowY', overflowY);
  assign('cursor', cursor);
  assign('opacity', opacity);
  assign('visibility', visibility);
  assign('whiteSpace', whiteSpace);
  assign('textOverflow', textOverflow);
  assign('pointerEvents', pointerEvents);
  assign('userSelect', userSelect);
  assign('verticalAlign', verticalAlign);
  assign('filter', filter);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <Component style={empty(style) ? undefined : style} {...componentProps} />;
};

export default CustomComponent;
