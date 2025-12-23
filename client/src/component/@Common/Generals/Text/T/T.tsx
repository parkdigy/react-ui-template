import React from 'react';
import { TProps as Props } from './T.types';
import { AllSizes, Theme } from '@theme';
import './T.scss';

export const T = ({
  className,
  children,
  inline,
  s: initS,
  size: initSize,
  fs: propsInitFs,
  fontSize: propsInitFontSize,
  lh: propsInitLh,
  lineHeight: propsInitLineHeight,
  c: propsInitC,
  color: propsInitColor,
  icon,
  iconGap,
  iconPosition,
  iconProps,
  ellipsis,
  ellipsisLines = 1,
  cssVars: initCssVars,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const initC = propsInitC;
  const initColor = propsInitColor;
  const initFontSize = ifUndefined(propsInitFontSize, propsInitFs);
  const initLh = ifUndefined(propsInitLineHeight, propsInitLh);

  const size = ifUndefined(initSize, initS);
  const isNamedSize = size !== undefined && contains(AllSizes, size);
  let fontSize: number | string | undefined = isNamedSize
    ? theme.sizes[size as keyof Theme['sizes']]?.fontSize
    : undefined;
  let lineHeight: number | string | undefined = isNamedSize
    ? theme.sizes[size as keyof Theme['sizes']]?.lineHeight
    : undefined;

  if (initFontSize !== undefined && typeof initFontSize === 'string' && contains(AllSizes, initFontSize)) {
    fontSize = theme.sizes[initFontSize].fontSize;
  } else if (initFontSize !== undefined) {
    fontSize = initFontSize;
  }

  if (initLh !== undefined && typeof initLh === 'string' && contains(AllSizes, initLh)) {
    lineHeight = theme.sizes[initLh].lineHeight;
  } else if (initLh !== undefined) {
    lineHeight = initLh;
  }

  const finalInitColor = initC || initColor;
  const finalColor: BoxProps['color'] =
    finalInitColor === undefined
      ? undefined
      : finalInitColor === 'accent'
        ? 'textAccent'
        : finalInitColor === 'blurry'
          ? 'textBlurry'
          : finalInitColor === 'lighten'
            ? 'textLighten'
            : finalInitColor;

  let cssVars: Props['cssVars'];

  if (icon || ellipsis) {
    cssVars = { ...initCssVars };

    const baseFontSize = fontSize === undefined ? theme.sizes.body.fontSize : fontSize;

    if (icon) {
      cssVars['--T-icon-gap-base-size'] = typeof baseFontSize === 'number' ? `${baseFontSize}px` : baseFontSize;
    }

    if (ellipsis) {
      const ellipsisFontSize = baseFontSize;
      const ellipsisLineHeight = lineHeight === undefined ? theme.sizes.body.lineHeight : lineHeight;

      cssVars['--T-ellipsis-font-size'] = isNaN(Number(ellipsisLineHeight))
        ? 1
        : typeof ellipsisFontSize === 'number'
          ? `${ellipsisFontSize}px`
          : ellipsisFontSize;
      cssVars['--T-ellipsis-line-height'] = ellipsisLineHeight;
      cssVars['--T-ellipsis-lines'] = `${ifUndefined(ellipsisLines, 1)}`;
    }
  } else {
    cssVars = initCssVars;
  }

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return icon ? (
    <Flex
      className={classnames(
        className,
        'T',
        'T-with-icon',
        ellipsis && 'T-ellipsis',
        ellipsisLines > 1 && 'T-ellipsis-multi'
      )}
      center
      flexDirection={iconPosition === 'end' ? 'row-reverse' : 'row'}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={finalColor}
      gap={iconGap}
      cssVars={cssVars}
      {...props}
    >
      <Icon size={size} {...iconProps}>
        {icon}
      </Icon>
      <span className='T__Text'>{children}</span>
    </Flex>
  ) : (
    <Box
      component={inline ? 'span' : 'div'}
      className={classnames(className, 'T', ellipsis && 'T-ellipsis', ellipsisLines > 1 && 'T-ellipsis-multi')}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={finalColor}
      cssVars={cssVars}
      {...props}
    >
      {children}
    </Box>
  );
};

export default T;
