import l from '@loadable/component';

const PageRootContainer = l(
  () => import('./PageRootContainer'),
  loadable.options
) as unknown as typeof import('./PageRootContainer').default;

export { PageRootContainer };

export default PageRootContainer;

export * from './PageRootContainer.types';
