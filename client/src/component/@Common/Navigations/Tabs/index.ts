import l from '@loadable/component';

const Tabs = l(
  () => import(/* webpackChunkName: "common-tabs" */ './Tabs'),
  loadable.options
) as unknown as typeof import('./Tabs').default;

export { Tabs };

export default Tabs;

export * from './Tabs.types';
