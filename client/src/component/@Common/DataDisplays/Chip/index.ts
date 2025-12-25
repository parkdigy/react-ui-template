import l from '@loadable/component';

const Chip = l(() => import('./Chip'), loadable.options) as unknown as typeof import('./Chip').default;

export { Chip };

export default Chip;

export * from './Chip.types';
