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
declare type ApiResult = import('../global/api/index.ts').ApiResult;
declare type ApiPaging = import('../global/api/index.ts').ApiPaging;
declare type ApiPageLimitRequestData = import('../global/api/index.ts').ApiPageLimitRequestData;

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
