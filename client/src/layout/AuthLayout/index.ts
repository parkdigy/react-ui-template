import l from '@loadable/component';

const AuthLayout = l(
  () => import('./AuthLayout'),
  loadable.options
) as unknown as typeof import('./AuthLayout').default;

export { AuthLayout };

export default AuthLayout;
