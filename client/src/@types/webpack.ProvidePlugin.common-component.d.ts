declare global {
  export type {
    // Button
    ButtonProps,

    // Errors
    ErrorBoundaryProps,
    ErrorRetryProps,

    // Icon
    IconProps,

    // Img
    ImgProps,

    // Layouts
    BoxProps,
    DivProps,
    FlexProps,
    PageRootContainerProps,
    SpanProps,
    StackProps,

    // Loadings
    LoadingProps,
    LoadingCommands,

    // Texts
    TProps,
  } from '../component/@Common/index.ts';
}

declare global {
  // Button
  const Button: typeof import('../component/@Common/index.ts').Button;

  // Errors
  const ErrorBoundary: typeof import('../component/@Common/index.ts').ErrorBoundary;
  const ErrorRetry: typeof import('../component/@Common/index.ts').ErrorRetry;

  // Icon
  const Icon: typeof import('../component/@Common/index.ts').Icon;

  // Img
  const Img: typeof import('../component/@Common/index.ts').Img;

  // Layouts
  const Box: typeof import('../component/@Common/index.ts').Box;
  const Div: typeof import('../component/@Common/index.ts').Div;
  const Flex: typeof import('../component/@Common/index.ts').Flex;
  const PageRootContainer: typeof import('../component/@Common/index.ts').PageRootContainer;
  const Span: typeof import('../component/@Common/index.ts').Span;
  const Stack: typeof import('../component/@Common/index.ts').Stack;

  // Loadings
  const Loading: typeof import('../component/@Common/index.ts').Loading;

  // Texts
  const T: typeof import('../component/@Common/index.ts').T;
}

export {};
