import l from '@loadable/component';

const LoadingIndicator = l(
  () => import(/* webpackChunkName: "loading-indicator" */ './LoadingIndicator'),
  loadable.options
);

export { LoadingIndicator };

export default LoadingIndicator;

export * from './LoadingIndicator.types';
