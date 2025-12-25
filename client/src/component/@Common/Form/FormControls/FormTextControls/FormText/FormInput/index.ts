import l from '@loadable/component';

const FormInput = l(() => import('./FormInput'), loadable.options) as unknown as typeof import('./FormInput').default;

export { FormInput };

export default FormInput;

export * from './FormInput.types';
