/** 개발 환경에서는 사용할 아이콘 */
export const DevMaterialIconTypes = ['filled', 'outlined', 'round', 'sharp'] as const;
export type DevMaterialIconTypes = (typeof DevMaterialIconTypes)[number];

/** 라이브 환경에서는 사용할 아이콘 */
export const LiveMaterialIconTypes = [
  // 'filled',
  // 'outlined',
  'round',
  // 'sharp'
] as const;
export type LiveMaterialIconTypes = (typeof LiveMaterialIconTypes)[number];

/** 사용 아이콘 */
export const MaterialIconTypes = env.isLocal ? DevMaterialIconTypes : LiveMaterialIconTypes;
export type MaterialIconTypes = (typeof MaterialIconTypes)[number];

/********************************************************************************************************************
 * 아이콘 로드
 * ******************************************************************************************************************/

const loadIconStyle = async (types: readonly string[]) => {
  for (const type of types) {
    switch (type) {
      case 'filled':
        await import('material-icons/iconfont/filled.css');
        break;
      case 'outlined':
        await import('material-icons/iconfont/outlined.css');
        break;
      case 'round':
        await import('material-icons/iconfont/round.css');
        break;
      case 'sharp':
        await import('material-icons/iconfont/sharp.css');
        break;
    }
  }
};

loadIconStyle(MaterialIconTypes);
