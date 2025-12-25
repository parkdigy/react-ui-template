import l from '@loadable/component';

const Pagination = l(
  () => import('./Pagination'),
  loadable.options
) as unknown as typeof import('./Pagination').default;

export { Pagination };

export default Pagination;

export * from './Pagination.types';
