import l from '@loadable/component';

const ToastContainer = l(
  () => import('./ToastContainer'),
  loadable.options
) as unknown as typeof import('./ToastContainer').default;

export { ToastContainer };

export default ToastContainer;

export * from './ToastContainer.types';
