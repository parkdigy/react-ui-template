declare global {
  // Button
  const Button: typeof import('../component/@Common/index.ts').Button;
  type ButtonProps = import('../component/@Common/index.ts').ButtonProps;

  // Errors
  const ErrorBoundary: typeof import('../component/@Common/index.ts').ErrorBoundary;
  type ErrorBoundaryProps = import('../component/@Common/index.ts').ErrorBoundaryProps;
  const ErrorRetry: typeof import('../component/@Common/index.ts').ErrorRetry;
  type ErrorRetryProps = import('../component/@Common/index.ts').ErrorRetryProps;

  // Icon
  const Icon: typeof import('../component/@Common/index.ts').Icon;
  type IconProps = import('../component/@Common/index.ts').IconProps;

  // Img
  const Img: typeof import('../component/@Common/index.ts').Img;
  type ImgProps = import('../component/@Common/index.ts').ImgProps;

  // Layouts
  const Box: typeof import('../component/@Common/index.ts').Box;
  type BoxProps = import('../component/@Common/index.ts').BoxProps;
  const Div: typeof import('../component/@Common/index.ts').Div;
  type DivProps = import('../component/@Common/index.ts').DivProps;
  const Flex: typeof import('../component/@Common/index.ts').Flex;
  type FlexProps = import('../component/@Common/index.ts').FlexProps;
  const PageRootContainer: typeof import('../component/@Common/index.ts').PageRootContainer;
  type PageRootContainerProps = import('../component/@Common/index.ts').PageRootContainerProps;
  const Span: typeof import('../component/@Common/index.ts').Span;
  type SpanProps = import('../component/@Common/index.ts').SpanProps;
  const Stack: typeof import('../component/@Common/index.ts').Stack;
  type StackProps = import('../component/@Common/index.ts').StackProps;

  // Loadings
  const Loading: typeof import('../component/@Common/index.ts').Loading;
  type LoadingProps = import('../component/@Common/index.ts').LoadingProps;
  type LoadingCommands = import('../component/@Common/index.ts').LoadingCommands;

  // Texts
  const T: typeof import('../component/@Common/index.ts').T;
  type TProps = import('../component/@Common/index.ts').Props;
}

export {};
