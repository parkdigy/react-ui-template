// base
declare const objectKeys: typeof import('../global/base/index.ts').objectKeys;
declare const nextTick: typeof import('../global/base/index.ts').nextTick;

// env
declare const env: typeof import('../global/env/index.ts').default;

// ll
declare const ll: typeof import('../global/ll/index.ts').default;

// g
declare const g: typeof import('../global/g/index.ts').default;

// loadable
declare const loadable: typeof import('../global/loadable/index.ts').default;

// api
declare const api: typeof import('../global/api/index.ts').default;
declare type ApiResult = import('../global/api/index.ts').apiResult;
declare type ApiPaging = import('../global/api/index.ts').apiPaging;
declare type ApiPageLimitRequestData = import('../global/api/index.ts').apiPageLimitRequestData;

// mediaQuery
declare const mediaQuery: typeof import('../global/mediaQuery/index.ts').default;
declare const useScreenSize: typeof import('../global/mediaQuery/index.ts').useScreenSize;
