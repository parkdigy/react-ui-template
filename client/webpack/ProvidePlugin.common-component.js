const path = require('path');

module.exports = {
  // Button
  Button: [path.resolve(__dirname, '../src/component/@Common/Button/index.ts'), 'Button'],
  ButtonProps: [path.resolve(__dirname, '../src/component/@Common/Button/index.ts'), 'ButtonProps'],
  // Icon
  Icon: [path.resolve(__dirname, '../src/component/@Common/Icon/index.ts'), 'Icon'],
  IconProps: [path.resolve(__dirname, '../src/component/@Common/Icon/index.ts'), 'IconProps'],
  // Img
  Img: [path.resolve(__dirname, '../src/component/@Common/Img/index.ts'), 'Img'],
  ImgProps: [path.resolve(__dirname, '../src/component/@Common/Img/index.ts'), 'ImgProps'],
  // Layouts
  Box: [path.resolve(__dirname, '../src/component/@Common/Layouts/Box/index.ts'), 'Box'],
  BoxProps: [path.resolve(__dirname, '../src/component/@Common/Layouts/Box/index.ts'), 'BoxProps'],
  Div: [path.resolve(__dirname, '../src/component/@Common/Layouts/Div/index.ts'), 'Div'],
  DivProps: [path.resolve(__dirname, '../src/component/@Common/Layouts/Div/index.ts'), 'DivProps'],
  Flex: [path.resolve(__dirname, '../src/component/@Common/Layouts/Flex/index.ts'), 'Flex'],
  FlexProps: [path.resolve(__dirname, '../src/component/@Common/Layouts/Flex/index.ts'), 'FlexProps'],
  PageRootContainer: [
    path.resolve(__dirname, '../src/component/@Common/Layouts/PageRootContainer/index.ts'),
    'PageRootContainer',
  ],
  PageRootContainerProps: [
    path.resolve(__dirname, '../src/component/@Common/Layouts/PageRootContainer/index.ts'),
    'PageRootContainerProps',
  ],
  Span: [path.resolve(__dirname, '../src/component/@Common/Layouts/Span/index.ts'), 'Span'],
  SpanProps: [path.resolve(__dirname, '../src/component/@Common/Layouts/Span/index.ts'), 'SpanProps'],
  Stack: [path.resolve(__dirname, '../src/component/@Common/Layouts/Stack/index.ts'), 'Stack'],
  StackProps: [path.resolve(__dirname, '../src/component/@Common/Layouts/Stack/index.ts'), 'StackProps'],
  // Texts
  T: [path.resolve(__dirname, '../src/component/@Common/Texts/T/index.ts'), 'T'],
  TProps: [path.resolve(__dirname, '../src/component/@Common/Texts/T/index.ts'), 'TProps'],
};
