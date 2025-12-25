import l from '@loadable/component';

const Footer = l(() => import('./Footer'), loadable.options) as unknown as typeof import('./Footer').default;

export { Footer };

export default Footer;

export * from './Footer.types';
