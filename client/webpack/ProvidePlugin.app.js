const path = require('path');

module.exports = {
  // base
  objectKeys: [path.resolve(__dirname, '../src/global/base/index.ts'), 'objectKeys'],
  nextTick: [path.resolve(__dirname, '../src/global/base/index.ts'), 'nextTick'],

  // env
  env: [path.resolve(__dirname, '../src/global/env/index.ts'), 'default'],

  // ll
  ll: [path.resolve(__dirname, '../src/global/ll/index.ts'), 'default'],

  // g
  g: [path.resolve(__dirname, '../src/global/g/index.ts'), 'default'],
  gFormat: ['@pdg/formatting', 'default'],
  gKorean: ['@pdg/korean', 'default'],
  gAlert: [path.resolve(__dirname, '../src/global/g/alert.ts'), 'default'],
  gBrowser: [path.resolve(__dirname, '../src/global/g/browser.ts'), 'default'],
  gColor: [path.resolve(__dirname, '../src/global/g/color.ts'), 'default'],
  gDate: [path.resolve(__dirname, '../src/global/g/date.ts'), 'default'],
  gLoading: [path.resolve(__dirname, '../src/global/g/loading.ts'), 'default'],
  gLocation: [path.resolve(__dirname, '../src/global/g/location.ts'), 'default'],
  gNav: [path.resolve(__dirname, '../src/global/g/nav.ts'), 'default'],
  gClipboard: [path.resolve(__dirname, '../src/global/g/clipboard.ts'), 'default'],
  gCss: [path.resolve(__dirname, '../src/global/g/css.ts'), 'default'],
  gReact: [path.resolve(__dirname, '../src/global/g/react.ts'), 'default'],
  gStyle: [path.resolve(__dirname, '../src/global/g/style.ts'), 'default'],
  gText: [path.resolve(__dirname, '../src/global/g/text.ts'), 'default'],
  gTheme: [path.resolve(__dirname, '../src/global/g/theme.ts'), 'default'],

  // loadable
  loadable: [path.resolve(__dirname, '../src/global/loadable/index.ts'), 'default'],

  // api
  api: [path.resolve(__dirname, '../src/global/api/index.ts'), 'default'],
  createApi: [path.resolve(__dirname, '../src/global/api/createApi.ts'), 'default'],

  // Const
  Const: [path.resolve(__dirname, '../src/constant/index.ts'), 'default'],

  // mediaQuery
  useScreenSize: [path.resolve(__dirname, '../src/context/ScreenSizeContext/useScreenSize.ts'), 'default'],

  // materialIcons
  MaterialIconTypes: [path.resolve(__dirname, '../src/global/materialIcons/index.ts'), 'MaterialIconTypes'],
  DevMaterialIconTypes: [path.resolve(__dirname, '../src/global/materialIcons/index.ts'), 'DevMaterialIconTypes'],
  LiveMaterialIconTypes: [path.resolve(__dirname, '../src/global/materialIcons/index.ts'), 'LiveMaterialIconTypes'],

  // theme
  Theme: [path.resolve(__dirname, '../src/theme/@types/theme.ts'), 'Theme'],
  useTheme: [path.resolve(__dirname, '../src/theme/ThemeProvider/useTheme.ts'), 'default'],

  // toast
  toast: [path.resolve(__dirname, '../src/global/toast/index.ts'), 'default'],
};
