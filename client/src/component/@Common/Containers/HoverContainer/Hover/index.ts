import l from '@loadable/component';

const Hover = l(() => import('./Hover'), loadable.options) as unknown as typeof import('./Hover').default;

export { Hover };

export default Hover;

export * from './Hover.types';
