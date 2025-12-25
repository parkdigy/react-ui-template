import l from '@loadable/component';

const FormTitle = l(() => import('./FormTitle'), loadable.options) as unknown as typeof import('./FormTitle').default;

export { FormTitle };

export default FormTitle;

export * from './FormTitle.types';
