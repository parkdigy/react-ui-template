import l from '@loadable/component';

const DevButton = l(() => import('./DevButton'), loadable.options) as unknown as typeof import('./DevButton').default;

export { DevButton };

export default DevButton;

export * from './DevButton.types';
