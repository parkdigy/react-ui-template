import l from '@loadable/component';

const TinyMCEViewer = l(
  () => import(/* webpackChunkName: "common-tiny-mce-viewer" */ './TinyMCEViewer'),
  loadable.options
) as unknown as typeof import('./TinyMCEViewer').default;

export { TinyMCEViewer };

export default TinyMCEViewer;

export * from './TinyMCEViewer.types';
