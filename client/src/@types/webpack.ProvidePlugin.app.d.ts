declare global {
  // api
  export type { ApiResult, ApiPaging, ApiPageLimitRequestData } from '../global/api/index.ts';

  // materialIcons
  export type {
    MaterialIconTypes,
    DevMaterialIconTypes,
    LiveMaterialIconTypes,
  } from '../global/materialIcons/index.ts';
}

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
  const gClipboard: typeof import('../global/g/clipboard.ts').default;
  const gCss: typeof import('../global/g/css.ts').default;
  const gReact: typeof import('../global/g/react.ts').default;
  const gStyle: typeof import('../global/g/style.ts').default;
  const gText: typeof import('../global/g/text.ts').default;
  const gTheme: typeof import('../global/g/theme.ts').default;

  // loadable
  const loadable: typeof import('../global/loadable/index.ts').default;

  // api
  const api: typeof import('../global/api/index.ts').default;

  // Const
  const Const: typeof import('../constant/index').default;

  // mediaQuery
  const useScreenSize: typeof import('../context/ScreenSizeContext/useScreenSize.ts').default;

  // materialIcons
  const MaterialIconTypes: typeof import('../global/materialIcons/index.ts').MaterialIconTypes;
  const DevMaterialIconTypes: typeof import('../global/materialIcons/index.ts').DevMaterialIconTypes;
  const LiveMaterialIconTypes: typeof import('../global/materialIcons/index.ts').LiveMaterialIconTypes;

  // theme
  const Theme: typeof import('../theme/index.ts').Theme;
  declare type Theme = import('../theme/index.ts').Theme;
  const useTheme: typeof import('../theme/index.ts').useTheme;

  // toast
  const toast: typeof import('../global/toast/index.ts').toast;
}

export {};
