import l from '@loadable/component';

const ContentContainer = l(
  () => import('./ContentContainer'),
  loadable.options
) as unknown as typeof import('./ContentContainer').default;

export { ContentContainer };

export default ContentContainer;

export * from './ContentContainer.types';
