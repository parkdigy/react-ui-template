import l from '@loadable/component';
import { loadable } from '@common';

const NoData = l(
  () => import(/* webpackChunkName: "common-no-data" */ './NoData'),
  loadable.options
) as unknown as typeof import('./NoData').default;

export { NoData };

export default NoData;

export * from './NoData.types';
