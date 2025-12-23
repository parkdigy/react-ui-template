import l from '@loadable/component';

const FlexButton = l(
  () => import(/* webpackChunkName: "common-flex-button" */ './FlexButton'),
  loadable.options
) as unknown as typeof import('./FlexButton').default;

export { FlexButton };

export default FlexButton;

export type TFlexButton = typeof FlexButton;

export * from './FlexButton.types';
