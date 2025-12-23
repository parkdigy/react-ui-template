import l from '@loadable/component';

const Tooltip = l(
  () => import(/* webpackChunkName: "common-tooltip" */ './Tooltip'),
  loadable.options
) as unknown as typeof import('./Tooltip').default;

export { Tooltip };

export default Tooltip;

export * from './Tooltip.types';
