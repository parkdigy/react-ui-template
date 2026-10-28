const path = require('path');

module.exports = {
  // Button
  Button: [path.resolve(__dirname, '../src/component/@Common/Button/index.ts'), 'Button'],

  // Errors
  ErrorBoundary: [path.resolve(__dirname, '../src/component/@Common/Errors/ErrorBoundary/index.ts'), 'default'],
  ErrorRetry: [path.resolve(__dirname, '../src/component/@Common/Errors/ErrorRetry/index.ts'), 'default'],

  // Icon
  Icon: [path.resolve(__dirname, '../src/component/@Common/Icon/index.ts'), 'Icon'],

  // Img
  Img: [path.resolve(__dirname, '../src/component/@Common/Img/index.ts'), 'Img'],

  // Layouts
  Box: [path.resolve(__dirname, '../src/component/@Common/Layouts/Box/index.ts'), 'Box'],
  Div: [path.resolve(__dirname, '../src/component/@Common/Layouts/Div/index.ts'), 'Div'],
  Flex: [path.resolve(__dirname, '../src/component/@Common/Layouts/Flex/index.ts'), 'Flex'],
  PageRootContainer: [
    path.resolve(__dirname, '../src/component/@Common/Layouts/PageRootContainer/index.ts'),
    'PageRootContainer',
  ],
  Span: [path.resolve(__dirname, '../src/component/@Common/Layouts/Span/index.ts'), 'Span'],
  Stack: [path.resolve(__dirname, '../src/component/@Common/Layouts/Stack/index.ts'), 'Stack'],

  // Loadings
  Loading: [path.resolve(__dirname, '../src/component/@Common/Loadings/Loading/index.ts'), 'default'],

  // Texts
  T: [path.resolve(__dirname, '../src/component/@Common/Texts/T/index.ts'), 'T'],
};
