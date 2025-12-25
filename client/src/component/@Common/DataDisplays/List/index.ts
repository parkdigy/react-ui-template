import l from '@loadable/component';

const List = l(() => import('./List'), loadable.options) as unknown as typeof import('./List').default;

export { List };

export default List;

export * from './List.types';
