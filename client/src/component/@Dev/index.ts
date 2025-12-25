import l from '@loadable/component';

const Dev = l(() => import('./Dev'), loadable.options) as unknown as typeof import('./Dev').default;

export { Dev };

export default Dev;

export * from './Dev.types';
