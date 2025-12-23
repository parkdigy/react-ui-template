import l from '@loadable/component';

const FormInput = l(
  () => import(/* webpackChunkName: "common-form-input" */ './FormInput'),
  loadable.options
) as unknown as typeof import('./FormInput').default;

export { FormInput };

export default FormInput;

export * from './FormInput.types';
