import l from '@loadable/component';

const Header = l(() => import('./Header'), loadable.options) as unknown as typeof import('./Header').default;

export { Header };

export default Header;

export * from './Header.types';
