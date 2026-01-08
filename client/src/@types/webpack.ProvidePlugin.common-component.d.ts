declare global {
  // Container
  const PageRootContainer: typeof import('../component/@Common/index.ts').PageRootContainer;

  // CustomComponent
  const CustomComponent: typeof import('../component/@Common/index.ts').CustomComponent;
  type CustomComponentProps<T> = import('../component/@Common/index.ts').CustomComponentProps<T>;

  // Errors
  const ErrorBoundary: typeof import('../component/@Common/index.ts').ErrorBoundary;
  type ErrorBoundaryProps = import('../component/@Common/index.ts').ErrorBoundaryProps;
  const ErrorRetry: typeof import('../component/@Common/index.ts').ErrorRetry;
  type ErrorRetryProps = import('../component/@Common/index.ts').ErrorRetryProps;

  // Loadings
  const Loading: typeof import('../component/@Common/index.ts').Loading;
  type LoadingProps = import('../component/@Common/index.ts').LoadingProps;
  type LoadingCommands = import('../component/@Common/index.ts').LoadingCommands;
  const LoadingIndicator: typeof import('../component/@Common/index.ts').LoadingIndicator;
  type LoadingIndicatorProps = import('../component/@Common/index.ts').LoadingIndicatorProps;

  // Layout
  const Box: typeof import('../component/@Common/index.ts').Box;
  type BoxProps<
    C extends BoxComponent = 'div',
    E extends HTMLDivElement | HTMLSpanElement = C extends 'span' ? HTMLSpanElement : HTMLDivElement,
  > = import('../component/@Common/index.ts').BoxProps<C, E>;
  type BoxStyleProps = import('../component/@Common/index.ts').BoxStyleProps;
  const Span: typeof import('../component/@Common/index.ts').Span;
  type SpanProps = import('../component/@Common/index.ts').SpanProps;
  const Flex: typeof import('../component/@Common/index.ts').Flex;
  type FlexProps = import('../component/@Common/index.ts').FlexProps;
  const Divider: typeof import('../component/@Common/index.ts').Divider;
  type DividerProps = import('../component/@Common/index.ts').DividerProps;
  const Panel: typeof import('../component/@Common/index.ts').Panel;
  type PanelProps = import('../component/@Common/index.ts').PanelProps;
  const Grid: typeof import('../component/@Common/index.ts').Grid;
  type GridProps = import('../component/@Common/index.ts').GridProps;
  const Row: typeof import('../component/@Common/index.ts').Row;
  type RowProps = import('../component/@Common/index.ts').RowProps;
  const Col: typeof import('../component/@Common/index.ts').Col;
  type ColProps = import('../component/@Common/index.ts').ColProps;

  // Image
  const Img: typeof import('../component/@Common/index.ts').Img;
  type ImgProps = import('../component/@Common/index.ts').ImgProps;
  const Svg: typeof import('../component/@Common/index.ts').Svg;
  type SvgProps = import('../component/@Common/index.ts').SvgProps;

  // Icon
  const Icon: typeof import('../component/@Common/index.ts').Icon;
  type IconProps = import('../component/@Common/index.ts').IconProps;

  // Button
  const Button: typeof import('../component/@Common/index.ts').Button;
  type ButtonProps = import('../component/@Common/index.ts').ButtonProps;
  const TextButton: typeof import('../component/@Common/index.ts').TextButton;
  type TextButtonProps = import('../component/@Common/index.ts').TextButtonProps;
  const IconButton: typeof import('../component/@Common/index.ts').IconButton;
  type IconButtonProps = import('../component/@Common/index.ts').IconButtonProps;
  const FlexButton: typeof import('../component/@Common/index.ts').FlexButton;
  type FlexButtonProps = import('../component/@Common/index.ts').FlexButtonProps;
  const BoxButton: typeof import('../component/@Common/index.ts').BoxButton;
  type BoxButtonProps = import('../component/@Common/index.ts').BoxButtonProps;

  // Dialog
  const Dialog: typeof import('../component/@Common/index.ts').Dialog;
  type DialogProps = import('../component/@Common/index.ts').DialogProps;
  type DialogCommands = import('../component/@Common/index.ts').DialogCommands;

  // Alert
  const Alert: typeof import('../component/@Common/index.ts').Alert;
  type AlertProps = import('../component/@Common/index.ts').AlertProps;

  // Tooltip
  const Tooltip: typeof import('../component/@Common/index.ts').Tooltip;
  type TooltipProps = import('../component/@Common/index.ts').TooltipProps;

  // T - Default
  const T: typeof import('../component/@Common/index.ts').T;
  type TProps = import('../component/@Common/index.ts').TProps;

  // T - FontWeight
  const TBold: typeof import('../component/@Common/index.ts').TBold;
  const T100: typeof import('../component/@Common/index.ts').T100;
  const T200: typeof import('../component/@Common/index.ts').T200;
  const T300: typeof import('../component/@Common/index.ts').T300;
  const T400: typeof import('../component/@Common/index.ts').T400;
  const T500: typeof import('../component/@Common/index.ts').T500;
  const T600: typeof import('../component/@Common/index.ts').T600;
  const T700: typeof import('../component/@Common/index.ts').T700;
  const T800: typeof import('../component/@Common/index.ts').T800;
  const T900: typeof import('../component/@Common/index.ts').T900;

  // T - Color
  const TPrimary: typeof import('../component/@Common/index.ts').TPrimary;
  const TOnPrimary: typeof import('../component/@Common/index.ts').TOnPrimary;
  const TSecondary: typeof import('../component/@Common/index.ts').TSecondary;
  const TOnSecondary: typeof import('../component/@Common/index.ts').TOnSecondary;
  const TSuccess: typeof import('../component/@Common/index.ts').TSuccess;
  const TOnSuccess: typeof import('../component/@Common/index.ts').TOnSuccess;
  const TWarning: typeof import('../component/@Common/index.ts').TWarning;
  const TOnWarning: typeof import('../component/@Common/index.ts').TOnWarning;
  const TError: typeof import('../component/@Common/index.ts').TError;
  const TOnError: typeof import('../component/@Common/index.ts').TOnError;
  const TAccent: typeof import('../component/@Common/index.ts').TAccent;
  const TBlurry: typeof import('../component/@Common/index.ts').TBlurry;
  const TLighten: typeof import('../component/@Common/index.ts').TLighten;
  const TBackground: typeof import('../component/@Common/index.ts').TBackground;
  const TOpacity01: typeof import('../component/@Common/index.ts').TOpacity01;
  const TOpacity02: typeof import('../component/@Common/index.ts').TOpacity02;
  const TOpacity03: typeof import('../component/@Common/index.ts').TOpacity03;
  const TOpacity04: typeof import('../component/@Common/index.ts').TOpacity04;
  const TOpacity05: typeof import('../component/@Common/index.ts').TOpacity05;
  const TOpacity06: typeof import('../component/@Common/index.ts').TOpacity06;
  const TOpacity07: typeof import('../component/@Common/index.ts').TOpacity07;
  const TOpacity08: typeof import('../component/@Common/index.ts').TOpacity08;
  const TOpacity09: typeof import('../component/@Common/index.ts').TOpacity09;
  const TOpacity10: typeof import('../component/@Common/index.ts').TOpacity10;
  const TOpacity15: typeof import('../component/@Common/index.ts').TOpacity15;
  const TOpacity20: typeof import('../component/@Common/index.ts').TOpacity20;
  const TOpacity25: typeof import('../component/@Common/index.ts').TOpacity25;
  const TOpacity30: typeof import('../component/@Common/index.ts').TOpacity30;
  const TOpacity35: typeof import('../component/@Common/index.ts').TOpacity35;
  const TOpacity40: typeof import('../component/@Common/index.ts').TOpacity40;
  const TOpacity45: typeof import('../component/@Common/index.ts').TOpacity45;
  const TOpacity50: typeof import('../component/@Common/index.ts').TOpacity50;
  const TOpacity55: typeof import('../component/@Common/index.ts').TOpacity55;
  const TOpacity60: typeof import('../component/@Common/index.ts').TOpacity60;
  const TOpacity65: typeof import('../component/@Common/index.ts').TOpacity65;
  const TOpacity70: typeof import('../component/@Common/index.ts').TOpacity70;
  const TOpacity75: typeof import('../component/@Common/index.ts').TOpacity75;
  const TOpacity80: typeof import('../component/@Common/index.ts').TOpacity80;
  const TOpacity85: typeof import('../component/@Common/index.ts').TOpacity85;
  const TOpacity90: typeof import('../component/@Common/index.ts').TOpacity90;
  const TOpacity95: typeof import('../component/@Common/index.ts').TOpacity95;
  const TOpacityReverse01: typeof import('../component/@Common/index.ts').TOpacityReverse01;
  const TOpacityReverse02: typeof import('../component/@Common/index.ts').TOpacityReverse02;
  const TOpacityReverse03: typeof import('../component/@Common/index.ts').TOpacityReverse03;
  const TOpacityReverse04: typeof import('../component/@Common/index.ts').TOpacityReverse04;
  const TOpacityReverse05: typeof import('../component/@Common/index.ts').TOpacityReverse05;
  const TOpacityReverse06: typeof import('../component/@Common/index.ts').TOpacityReverse06;
  const TOpacityReverse07: typeof import('../component/@Common/index.ts').TOpacityReverse07;
  const TOpacityReverse08: typeof import('../component/@Common/index.ts').TOpacityReverse08;
  const TOpacityReverse09: typeof import('../component/@Common/index.ts').TOpacityReverse09;
  const TOpacityReverse10: typeof import('../component/@Common/index.ts').TOpacityReverse10;
  const TOpacityReverse15: typeof import('../component/@Common/index.ts').TOpacityReverse15;
  const TOpacityReverse20: typeof import('../component/@Common/index.ts').TOpacityReverse20;
  const TOpacityReverse25: typeof import('../component/@Common/index.ts').TOpacityReverse25;
  const TOpacityReverse30: typeof import('../component/@Common/index.ts').TOpacityReverse30;
  const TOpacityReverse35: typeof import('../component/@Common/index.ts').TOpacityReverse35;
  const TOpacityReverse40: typeof import('../component/@Common/index.ts').TOpacityReverse40;
  const TOpacityReverse45: typeof import('../component/@Common/index.ts').TOpacityReverse45;
  const TOpacityReverse50: typeof import('../component/@Common/index.ts').TOpacityReverse50;
  const TOpacityReverse55: typeof import('../component/@Common/index.ts').TOpacityReverse55;
  const TOpacityReverse60: typeof import('../component/@Common/index.ts').TOpacityReverse60;
  const TOpacityReverse65: typeof import('../component/@Common/index.ts').TOpacityReverse65;
  const TOpacityReverse70: typeof import('../component/@Common/index.ts').TOpacityReverse70;
  const TOpacityReverse75: typeof import('../component/@Common/index.ts').TOpacityReverse75;
  const TOpacityReverse80: typeof import('../component/@Common/index.ts').TOpacityReverse80;
  const TOpacityReverse85: typeof import('../component/@Common/index.ts').TOpacityReverse85;
  const TOpacityReverse90: typeof import('../component/@Common/index.ts').TOpacityReverse90;
  const TOpacityReverse95: typeof import('../component/@Common/index.ts').TOpacityReverse95;

  // T - Size
  const TCaption: typeof import('../component/@Common/index.ts').TCaption;
  const TCaptionBold: typeof import('../component/@Common/index.ts').TCaptionBold;
  const TCaption100: typeof import('../component/@Common/index.ts').TCaption100;
  const TCaption200: typeof import('../component/@Common/index.ts').TCaption200;
  const TCaption300: typeof import('../component/@Common/index.ts').TCaption300;
  const TCaption400: typeof import('../component/@Common/index.ts').TCaption400;
  const TCaption500: typeof import('../component/@Common/index.ts').TCaption500;
  const TCaption600: typeof import('../component/@Common/index.ts').TCaption600;
  const TCaption700: typeof import('../component/@Common/index.ts').TCaption700;
  const TCaption800: typeof import('../component/@Common/index.ts').TCaption800;
  const TCaption900: typeof import('../component/@Common/index.ts').TCaption900;
  const TBodySmall: typeof import('../component/@Common/index.ts').TBodySmall;
  const TBodySmallBold: typeof import('../component/@Common/index.ts').TBodySmallBold;
  const TBodySmall100: typeof import('../component/@Common/index.ts').TBodySmall100;
  const TBodySmall200: typeof import('../component/@Common/index.ts').TBodySmall200;
  const TBodySmall300: typeof import('../component/@Common/index.ts').TBodySmall300;
  const TBodySmall400: typeof import('../component/@Common/index.ts').TBodySmall400;
  const TBodySmall500: typeof import('../component/@Common/index.ts').TBodySmall500;
  const TBodySmall600: typeof import('../component/@Common/index.ts').TBodySmall600;
  const TBodySmall700: typeof import('../component/@Common/index.ts').TBodySmall700;
  const TBodySmall800: typeof import('../component/@Common/index.ts').TBodySmall800;
  const TBodySmall900: typeof import('../component/@Common/index.ts').TBodySmall900;
  const TBody: typeof import('../component/@Common/index.ts').TBody;
  const TBodyBold: typeof import('../component/@Common/index.ts').TBodyBold;
  const TBody100: typeof import('../component/@Common/index.ts').TBody100;
  const TBody200: typeof import('../component/@Common/index.ts').TBody200;
  const TBody300: typeof import('../component/@Common/index.ts').TBody300;
  const TBody400: typeof import('../component/@Common/index.ts').TBody400;
  const TBody500: typeof import('../component/@Common/index.ts').TBody500;
  const TBody600: typeof import('../component/@Common/index.ts').TBody600;
  const TBody700: typeof import('../component/@Common/index.ts').TBody700;
  const TBody800: typeof import('../component/@Common/index.ts').TBody800;
  const TBody900: typeof import('../component/@Common/index.ts').TBody900;
  const TBodyLarge: typeof import('../component/@Common/index.ts').TBodyLarge;
  const TBodyLargeBold: typeof import('../component/@Common/index.ts').TBodyLargeBold;
  const TBodyLarge100: typeof import('../component/@Common/index.ts').TBodyLarge100;
  const TBodyLarge200: typeof import('../component/@Common/index.ts').TBodyLarge200;
  const TBodyLarge300: typeof import('../component/@Common/index.ts').TBodyLarge300;
  const TBodyLarge400: typeof import('../component/@Common/index.ts').TBodyLarge400;
  const TBodyLarge500: typeof import('../component/@Common/index.ts').TBodyLarge500;
  const TBodyLarge600: typeof import('../component/@Common/index.ts').TBodyLarge600;
  const TBodyLarge700: typeof import('../component/@Common/index.ts').TBodyLarge700;
  const TBodyLarge800: typeof import('../component/@Common/index.ts').TBodyLarge800;
  const TBodyLarge900: typeof import('../component/@Common/index.ts').TBodyLarge900;
  const TTitleSmall: typeof import('../component/@Common/index.ts').TTitleSmall;
  const TTitleSmallBold: typeof import('../component/@Common/index.ts').TTitleSmallBold;
  const TTitleSmall100: typeof import('../component/@Common/index.ts').TTitleSmall100;
  const TTitleSmall200: typeof import('../component/@Common/index.ts').TTitleSmall200;
  const TTitleSmall300: typeof import('../component/@Common/index.ts').TTitleSmall300;
  const TTitleSmall400: typeof import('../component/@Common/index.ts').TTitleSmall400;
  const TTitleSmall500: typeof import('../component/@Common/index.ts').TTitleSmall500;
  const TTitleSmall600: typeof import('../component/@Common/index.ts').TTitleSmall600;
  const TTitleSmall700: typeof import('../component/@Common/index.ts').TTitleSmall700;
  const TTitleSmall800: typeof import('../component/@Common/index.ts').TTitleSmall800;
  const TTitleSmall900: typeof import('../component/@Common/index.ts').TTitleSmall900;
  const TTitle: typeof import('../component/@Common/index.ts').TTitle;
  const TTitleBold: typeof import('../component/@Common/index.ts').TTitleBold;
  const TTitle100: typeof import('../component/@Common/index.ts').TTitle100;
  const TTitle200: typeof import('../component/@Common/index.ts').TTitle200;
  const TTitle300: typeof import('../component/@Common/index.ts').TTitle300;
  const TTitle400: typeof import('../component/@Common/index.ts').TTitle400;
  const TTitle500: typeof import('../component/@Common/index.ts').TTitle500;
  const TTitle600: typeof import('../component/@Common/index.ts').TTitle600;
  const TTitle700: typeof import('../component/@Common/index.ts').TTitle700;
  const TTitle800: typeof import('../component/@Common/index.ts').TTitle800;
  const TTitle900: typeof import('../component/@Common/index.ts').TTitle900;
  const TTitleLarge: typeof import('../component/@Common/index.ts').TTitleLarge;
  const TTitleLargeBold: typeof import('../component/@Common/index.ts').TTitleLargeBold;
  const TTitleLarge100: typeof import('../component/@Common/index.ts').TTitleLarge100;
  const TTitleLarge200: typeof import('../component/@Common/index.ts').TTitleLarge200;
  const TTitleLarge300: typeof import('../component/@Common/index.ts').TTitleLarge300;
  const TTitleLarge400: typeof import('../component/@Common/index.ts').TTitleLarge400;
  const TTitleLarge500: typeof import('../component/@Common/index.ts').TTitleLarge500;
  const TTitleLarge600: typeof import('../component/@Common/index.ts').TTitleLarge600;
  const TTitleLarge700: typeof import('../component/@Common/index.ts').TTitleLarge700;
  const TTitleLarge800: typeof import('../component/@Common/index.ts').TTitleLarge800;
  const TTitleLarge900: typeof import('../component/@Common/index.ts').TTitleLarge900;
  const THeadline: typeof import('../component/@Common/index.ts').THeadline;
  const THeadlineBold: typeof import('../component/@Common/index.ts').THeadlineBold;
  const THeadline100: typeof import('../component/@Common/index.ts').THeadline100;
  const THeadline200: typeof import('../component/@Common/index.ts').THeadline200;
  const THeadline300: typeof import('../component/@Common/index.ts').THeadline300;
  const THeadline400: typeof import('../component/@Common/index.ts').THeadline400;
  const THeadline500: typeof import('../component/@Common/index.ts').THeadline500;
  const THeadline600: typeof import('../component/@Common/index.ts').THeadline600;
  const THeadline700: typeof import('../component/@Common/index.ts').THeadline700;
  const THeadline800: typeof import('../component/@Common/index.ts').THeadline800;
  const THeadline900: typeof import('../component/@Common/index.ts').THeadline900;
  const THeadlineLarge: typeof import('../component/@Common/index.ts').THeadlineLarge;
  const THeadlineLargeBold: typeof import('../component/@Common/index.ts').THeadlineLargeBold;
  const THeadlineLarge100: typeof import('../component/@Common/index.ts').THeadlineLarge100;
  const THeadlineLarge200: typeof import('../component/@Common/index.ts').THeadlineLarge200;
  const THeadlineLarge300: typeof import('../component/@Common/index.ts').THeadlineLarge300;
  const THeadlineLarge400: typeof import('../component/@Common/index.ts').THeadlineLarge400;
  const THeadlineLarge500: typeof import('../component/@Common/index.ts').THeadlineLarge500;
  const THeadlineLarge600: typeof import('../component/@Common/index.ts').THeadlineLarge600;
  const THeadlineLarge700: typeof import('../component/@Common/index.ts').THeadlineLarge700;
  const THeadlineLarge800: typeof import('../component/@Common/index.ts').THeadlineLarge800;
  const THeadlineLarge900: typeof import('../component/@Common/index.ts').THeadlineLarge900;
}

export {};
