import l from '@loadable/component';

const AuthSignUp = l(
  () => import('./AuthSignUp'),
  loadable.options
) as unknown as typeof import('./AuthSignUp').default;

export { AuthSignUp };

export default AuthSignUp;

export * from './AuthSignUp.types';
