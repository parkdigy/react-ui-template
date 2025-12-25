import l from '@loadable/component';

const FormHelperText = l(
  () => import('./FormHelperText'),
  loadable.options
) as unknown as typeof import('./FormHelperText').default;

export { FormHelperText };

export default FormHelperText;

export * from './FormHelperText.types';
