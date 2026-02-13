import l from '@loadable/component';

const NumberText = l(
  () => import('./NumberText'),
  loadable.options
) as unknown as typeof import('./NumberText').default;

export { NumberText };

export default NumberText;

export * from './NumberText.types';
