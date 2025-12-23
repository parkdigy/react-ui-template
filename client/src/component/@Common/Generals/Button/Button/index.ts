import l from '@loadable/component';

const Button = l(
  () => import(/* webpackChunkName: "common-button" */ './Button'),
  loadable.options
) as unknown as typeof import('./Button').default;

export { Button };

export default Button;

export type TButton = typeof Button;

export * from './Button.types';
