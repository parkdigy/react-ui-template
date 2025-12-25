import l from '@loadable/component';

const Logo = l(() => import('./Logo'), loadable.options) as unknown as typeof import('./Logo').default;

export { Logo };

export default Logo;

export * from './Logo.types';
