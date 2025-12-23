import l from '@loadable/component';

const HoverContainer = l(
  () => import(/* webpackChunkName: "common-hover-container" */ './HoverContainer'),
  loadable.options
) as unknown as typeof import('./HoverContainer').default;

export { HoverContainer };

export default HoverContainer;

export * from './HoverContainer.types';

export * from './Hover';
