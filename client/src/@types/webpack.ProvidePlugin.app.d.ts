declare global {
  // base
  const objectKeys: typeof import('../global/base/index.ts').objectKeys;
  const nextTick: typeof import('../global/base/index.ts').nextTick;

  // env
  const env: typeof import('../global/env/index.ts').default;

  // ll
  const ll: typeof import('../global/ll/index.ts').default;

  // g
  const g: typeof import('../global/g/index.ts').default;
  const gFormat: typeof import('@pdg/formatting').default;
  const gKorean: typeof import('@pdg/korean').default;
  const gAlert: typeof import('../global/g/alert.ts').default;
  const gBrowser: typeof import('../global/g/browser.ts').default;
  const gColor: typeof import('../global/g/color.ts').default;
  const gDate: typeof import('../global/g/date.ts').default;
  const gLoading: typeof import('../global/g/loading.ts').default;
  const gLocation: typeof import('../global/g/location.ts').default;
  const gNav: typeof import('../global/g/nav.ts').default;

  // loadable
  const loadable: typeof import('../global/loadable/index.ts').default;

  // api
  const api: typeof import('../global/api/index.ts').default;
  type ApiResult = import('../global/api/index.ts').ApiResult;
  type ApiPaging = import('../global/api/index.ts').ApiPaging;
  type ApiPageLimitRequestData = import('../global/api/index.ts').ApiPageLimitRequestData;

  // Const
  const Const: typeof import('../constant/index').default;

  // mediaQuery
  const mediaQuery: typeof import('../global/mediaQuery/index.ts').default;
  const useScreenSize: typeof import('../global/mediaQuery/index.ts').useScreenSize;
}

export {};
