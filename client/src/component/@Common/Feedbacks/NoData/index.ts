import l from '@loadable/component';

const NoData = l(() => import('./NoData'), loadable.options) as unknown as typeof import('./NoData').default;

export { NoData };

export default NoData;

export * from './NoData.types';
