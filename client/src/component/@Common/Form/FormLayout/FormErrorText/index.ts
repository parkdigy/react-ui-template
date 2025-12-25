import l from '@loadable/component';

const FormErrorText = l(
  () => import('./FormErrorText'),
  loadable.options
) as unknown as typeof import('./FormErrorText').default;

export { FormErrorText };

export default FormErrorText;

export * from './FormErrorText.types';
