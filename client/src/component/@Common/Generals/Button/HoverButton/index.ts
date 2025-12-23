import l from '@loadable/component';

const HoverButton = l(
  () => import(/* webpackChunkName: "common-hover-button" */ './HoverButton'),
  loadable.options
) as unknown as typeof import('./HoverButton').default;

export { HoverButton };

export default HoverButton;

export type THoverButton = typeof HoverButton;

export * from './HoverButton.types';
