import l from '@loadable/component';
import { loadable } from '@common';

const HoverButton = l(
  () => import(/* webpackChunkName: "common-text-button" */ './HoverButton'),
  loadable.options
) as unknown as typeof import('./HoverButton').default;

export { HoverButton };

export default HoverButton;

export * from './HoverButton.types';
