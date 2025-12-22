/* eslint-disable */
const path = require('path');
/* eslint-enable */

module.exports = {
  env: [path.resolve(__dirname, '../src/global/env/index.ts'), 'default'],
  ll: [path.resolve(__dirname, '../src/global/ll/index.ts'), 'default'],
  g: [path.resolve(__dirname, '../src/global/g/index.ts'), 'default'],
  color: [path.resolve(__dirname, '../src/global/color/index.ts'), 'default'],
  util: [path.resolve(__dirname, '../src/global/util/index.ts'), 'default'],
  // delay
  nextTick: [path.resolve(__dirname, '../src/global/delay/index.ts'), 'nextTick'],
  // app
  app: [path.resolve(__dirname, '../src/global/app/index.ts'), 'default'],
  // api
  api: [path.resolve(__dirname, '../src/global/api/index.ts'), 'default'],
  ApiResult: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiResult'],
  ApiPaging: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiPaging'],
  ApiPageLimitRequestData: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiPageLimitRequestData'],
  // mediaQuery
  mediaQuery: [path.resolve(__dirname, '../src/global/mediaQuery/index.ts'), 'default'],
  useScreenSize: [path.resolve(__dirname, '../src/global/mediaQuery/index.ts'), 'useScreenSize'],
};
