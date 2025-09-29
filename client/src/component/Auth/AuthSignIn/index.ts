import l from '@loadable/component';
import { loadable } from '@common';

const AuthSignIn = l(
  () => import(/* webpackChunkName: "auth-sign-in" */ './AuthSignIn'),
  loadable.options
) as unknown as typeof import('./AuthSignIn').default;

export { AuthSignIn };

export default AuthSignIn;

export * from './AuthSignIn.types';
