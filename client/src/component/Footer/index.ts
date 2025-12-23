import l from '@loadable/component';

const Footer = l(
  () => import(/* webpackChunkName: "footer" */ './Footer'),
  loadable.options
) as unknown as typeof import('./Footer').default;

export { Footer };

export default Footer;

export * from './Footer.types';
