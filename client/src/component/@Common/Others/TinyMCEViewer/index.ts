import l from '@loadable/component';

const TinyMCEViewer = l(
  () => import('./TinyMCEViewer'),
  loadable.options
) as unknown as typeof import('./TinyMCEViewer').default;

export { TinyMCEViewer };

export default TinyMCEViewer;

export * from './TinyMCEViewer.types';
