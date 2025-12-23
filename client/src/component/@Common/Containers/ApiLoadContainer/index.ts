import l from '@loadable/component';

const ApiLoadContainer = l(
  () => import(/* webpackChunkName: "common-api-load-container" */ './ApiLoadContainer'),
  loadable.options
) as unknown as typeof import('./ApiLoadContainer').default;

export { ApiLoadContainer };

export default ApiLoadContainer;

export * from './ApiLoadContainer.types';
