import l from '@loadable/component';

const BoxButton = l(
  () => import(/* webpackChunkName: "common-box-button" */ './BoxButton'),
  loadable.options
) as unknown as typeof import('./BoxButton').default;

export { BoxButton };

export default BoxButton;

export type TBoxButton = typeof BoxButton;

export * from './BoxButton.types';
