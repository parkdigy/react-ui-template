import l from '@loadable/component';

const ColorPicker = l(
  () => import('./ColorPicker'),
  loadable.options
) as unknown as typeof import('./ColorPicker').default;

export { ColorPicker };

export default ColorPicker;

export * from './ColorPicker.types';
