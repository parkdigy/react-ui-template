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

  // api
  api: [path.resolve(__dirname, '../src/global/api/index.ts'), 'default'],
  ApiResult: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiResult'],
  ApiPaging: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiPaging'],
  ApiPageLimitRequestData: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiPageLimitRequestData'],

  // mediaQuery
  mediaQuery: [path.resolve(__dirname, '../src/global/mediaQuery/index.ts'), 'default'],
  useScreenSize: [path.resolve(__dirname, '../src/global/mediaQuery/index.ts'), 'useScreenSize'],
};
