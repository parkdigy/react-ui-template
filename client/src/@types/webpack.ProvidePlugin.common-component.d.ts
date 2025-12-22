// Button
declare const Button: import('../component/Common/index.ts').TButton;
declare type ButtonProps = import('../component/Common/index.ts').ButtonProps;
// Icon
declare const Icon: import('../component/Common/index.ts').TIcon;
declare type IconProps = import('../component/Common/index.ts').IconProps;
// Img
declare const Img: import('../component/Common/index.ts').TImg;
declare type ImgProps = import('../component/Common/index.ts').ImgProps;
// Layouts
declare const Box: import('../component/Common/index.ts').TBox;
declare type BoxProps = import('../component/Common/index.ts').BoxProps;
declare const Div: import('../component/Common/index.ts').TDiv;
declare type DivProps = import('../component/Common/index.ts').DivProps;
declare const Flex: import('../component/Common/index.ts').TFlex;
declare type FlexProps = import('../component/Common/index.ts').FlexProps;
declare const PageRootContainer: import('../component/Common/index.ts').TPageRootContainer;
declare type PageRootContainerProps = import('../component/Common/index.ts').PageRootContainerProps;
declare const Span: import('../component/Common/index.ts').TSpan;
declare type SpanProps = import('../component/Common/index.ts').SpanProps;
declare const Stack: import('../component/Common/index.ts').TStack;
declare type StackProps = import('../component/Common/index.ts').StackProps;
// Texts
// declare const T: import('../component/Common/index.ts').TT;
declare type TProps = import('../component/Common/index.ts').TProps;

declare function T(props: TProps): import('react').JSX.Element;
