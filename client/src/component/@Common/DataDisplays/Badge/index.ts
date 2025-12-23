import l from '@loadable/component';

const Badge = l(
  () => import(/* webpackChunkName: "common-badge" */ './Badge'),
  loadable.options
) as unknown as typeof import('./Badge').default;

export { Badge };

export default Badge;

export * from './Badge.types';
