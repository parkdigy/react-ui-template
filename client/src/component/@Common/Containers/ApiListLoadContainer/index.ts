import l from '@loadable/component';

const ApiListLoadContainer = l(
  () => import('./ApiListLoadContainer'),
  loadable.options
) as unknown as typeof import('./ApiListLoadContainer').default;

export { ApiListLoadContainer };

export default ApiListLoadContainer;

export * from './ApiListLoadContainer.types';
