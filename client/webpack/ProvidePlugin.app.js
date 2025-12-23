/* eslint-disable */
const path = require('path');
/* eslint-enable */

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

  // loadable
  loadable: [path.resolve(__dirname, '../src/global/loadable/index.ts'), 'default'],

  // app
  app: [path.resolve(__dirname, '../src/global/app/index.ts'), 'default'],

  // api
  api: [path.resolve(__dirname, '../src/global/api/index.ts'), 'default'],
  ApiResult: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiResult'],
  ApiPaging: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiPaging'],
  ApiPageLimitRequestData: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiPageLimitRequestData'],

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
