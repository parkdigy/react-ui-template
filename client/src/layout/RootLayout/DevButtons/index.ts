import l from '@loadable/component';

const DevButtons = l(
  () => import('./DevButtons'),
  loadable.options
) as unknown as typeof import('./DevButtons').default;

export { DevButtons };

export default DevButtons;

export * from './DevButtons.types';
