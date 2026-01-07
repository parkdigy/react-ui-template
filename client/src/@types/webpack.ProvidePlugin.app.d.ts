// base
declare const objectKeys: typeof import('../global/base/index.ts').objectKeys;
declare const nextTick: typeof import('../global/base/index.ts').nextTick;

// env
declare const env: typeof import('../global/env/index.ts').default;

// ll
declare const ll: typeof import('../global/ll/index.ts').default;

// g
declare const g: typeof import('../global/g/index.ts').default;
declare const gFormat: typeof import('@pdg/formatting').default;
declare const gKorean: typeof import('@pdg/korean').default;
declare const gAlert: typeof import('../global/g/alert.ts').default;
declare const gBrowser: typeof import('../global/g/browser.ts').default;
declare const gColor: typeof import('../global/g/color.ts').default;
declare const gDate: typeof import('../global/g/date.ts').default;
declare const gLoading: typeof import('../global/g/loading.ts').default;
declare const gLocation: typeof import('../global/g/location.ts').default;
declare const gNav: typeof import('../global/g/nav.ts').default;
declare const gClipboard: typeof import('../global/g/clipboard.ts').default;
declare const gCss: typeof import('../global/g/css.ts').default;
declare const gReact: typeof import('../global/g/react.ts').default;
declare const gStyle: typeof import('../global/g/style.ts').default;
declare const gText: typeof import('../global/g/text.ts').default;
declare const gTheme: typeof import('../global/g/theme.ts').default;

// loadable
declare const loadable: typeof import('../global/loadable/index.ts').default;

// api
declare const api: typeof import('../global/api/index.ts').default;
declare type ApiResult = import('../global/api/index.ts').ApiResult;
declare type ApiPaging = import('../global/api/index.ts').ApiPaging;
declare type ApiPageLimitRequestData = import('../global/api/index.ts').ApiPageLimitRequestData;

// Const
declare const Const: typeof import('../constant/index').default;

// mediaQuery
declare const useScreenSize: typeof import('../context/ScreenSizeContext/useScreenSize.ts').default;

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
