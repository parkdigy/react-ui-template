/* eslint-disable */
const path = require('path');
/* eslint-enable */

module.exports = {
  env: [path.resolve(__dirname, '../src/global/env/index.ts'), 'default'],
  ll: [path.resolve(__dirname, '../src/global/ll/index.ts'), 'default'],
  g: [path.resolve(__dirname, '../src/global/g/index.ts'), 'default'],
  color: [path.resolve(__dirname, '../src/global/color/index.ts'), 'default'],
  util: [path.resolve(__dirname, '../src/global/util/index.ts'), 'default'],
  loadable: [path.resolve(__dirname, '../src/global/loadable/index.ts'), 'default'],
  toast: [path.resolve(__dirname, '../src/global/toast/index.ts'), 'default'],

  // delay
  nextTick: [path.resolve(__dirname, '../src/global/delay/index.ts'), 'nextTick'],

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

  // object
  objectKeys: [path.resolve(__dirname, '../src/global/object/index.ts'), ' objectKeys'],

  // theme
  useTheme: [path.resolve(__dirname, '../src/theme/index.ts'), 'useTheme'],
};
