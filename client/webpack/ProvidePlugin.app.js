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

  // loadable
  loadable: [path.resolve(__dirname, '../src/global/loadable/index.ts'), 'default'],

  // api
  api: [path.resolve(__dirname, '../src/global/api/index.ts'), 'default'],
  ApiResult: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiResult'],
  ApiPaging: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiPaging'],
  ApiPageLimitRequestData: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiPageLimitRequestData'],

  // Const
  Const: [path.resolve(__dirname, '../src/constant/index.ts'), 'default'],

  // mediaQuery
  mediaQuery: [path.resolve(__dirname, '../src/global/mediaQuery/index.ts'), 'default'],
  useScreenSize: [path.resolve(__dirname, '../src/global/mediaQuery/index.ts'), 'useScreenSize'],
};
