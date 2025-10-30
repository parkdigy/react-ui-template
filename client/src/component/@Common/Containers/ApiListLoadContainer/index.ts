import l from '@loadable/component';
import { loadable } from '@common';

const ApiListLoadContainer = l(
  () => import(/* webpackChunkName: "common-api-list-load-container" */ './ApiListLoadContainer'),
  loadable.options
) as unknown as typeof import('./ApiListLoadContainer').default;

export { ApiListLoadContainer };

export default ApiListLoadContainer;

export * from './ApiListLoadContainer.types';
