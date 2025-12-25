import l from '@loadable/component';

const Form = l(() => import('./Form'), loadable.options) as unknown as typeof import('./Form').default;

export { Form };

export default Form;

export * from './Form.types';
