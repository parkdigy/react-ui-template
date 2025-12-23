import l from '@loadable/component';

const ListTitle = l(
  () => import(/* webpackChunkName: "common-list-title" */ './ListTitle'),
  loadable.options
) as unknown as typeof import('./ListTitle').default;

export { ListTitle };

export default ListTitle;

export * from './ListTitle.types';
