// base
declare const objectKeys: typeof import('../global/base/index.ts').objectKeys;
declare const nextTick: typeof import('../global/base/index.ts').nextTick;

// env
declare const env: typeof import('../global/env/index.ts').env;

// ll
declare const ll: typeof import('../global/ll/index.ts').ll;

// g
declare const g: typeof import('../global/g/index.ts').g;

// loadable
declare const loadable: typeof import('../global/loadable/index.ts').loadable;

// app
declare const app: typeof import('../global/app/index.ts').app;

// api
declare const api: typeof import('../global/api/index.ts').api;
declare type ApiResult = import('../global/api/index.ts').apiResult;
declare type ApiPaging = import('../global/api/index.ts').apiPaging;
declare type ApiPageLimitRequestData = import('../global/api/index.ts').apiPageLimitRequestData;

// materialIcons
declare const MaterialIconTypes: typeof import('../global/materialIcons/index.ts').MaterialIconTypes;
declare type MaterialIconTypes = import('../global/materialIcons/index.ts').MaterialIconTypes;
declare const DevMaterialIconTypes: typeof import('../global/materialIcons/index.ts').DevMaterialIconTypes;
declare type DevMaterialIconTypes = import('../global/materialIcons/index.ts').DevMaterialIconTypes;
declare const LiveMaterialIconTypes: typeof import('../global/materialIcons/index.ts').LiveMaterialIconTypes;
declare type LiveMaterialIconTypes = import('../global/materialIcons/index.ts').LiveMaterialIconTypes;

// theme
declare const Theme: typeof import('../theme/index.ts').Theme;
declare type Theme = import('../theme/index.ts').Theme;
declare const useTheme: typeof import('../theme/index.ts').useTheme;

// toast
declare const toast: typeof import('../global/toast/index.ts').toast;
